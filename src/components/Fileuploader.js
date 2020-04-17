import React, {useState, useMemo} from 'react';
import Dropzone from 'react-dropzone';
import Card from "@material-ui/core/Card";
import "./Fileuploader.css"
import { database } from "../firebase";
import { getNDaysSinceDate} from "../helpers/helpers"
import { useSession } from './App';
import {useDropzone} from 'react-dropzone';
import Modal from '@material-ui/core/Modal';
import DatePicker from "react-datepicker/es";
import Button from "@material-ui/core/Button";
import "../../node_modules/react-datepicker/src/stylesheets/datepicker.scss";

const baseStyle = {
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	borderWidth: 2,
	borderRadius: 2,
	paddingTop: "10%",
	borderColor: '#eeeeee',
	borderStyle: 'dashed',
	backgroundColor: '#fafafa',
	color: '#bdbdbd',
	outline: 'none',
	transition: 'border .24s ease-in-out',
	height: "100%"
};

const activeStyle = {
	borderColor: '#2196f3'
};

const acceptStyle = {
	borderColor: '#00e676'
};

const rejectStyle = {
	borderColor: '#ff1744'
};

const FileUploader = () => {
	const [progress, setProgress] = useState("waiting");
	const [filesBuffer, setFilesBuffer] = useState([]);
	const [hasCorona, setHasCorona] = useState(false);
	const [startDate, setStartDate] = useState(new Date());
	const [isDisabled, setisDisabled] = useState(false);
	const [open, setOpen] = useState(false);
	const {
		getRootProps,
		getInputProps,
		isDragActive,
		isDragAccept,
		isDragReject
	} = useDropzone();

	const style = useMemo(() => ({
		...baseStyle,
		...(isDragActive ? activeStyle : {}),
		...(isDragAccept ? acceptStyle : {}),
		...(isDragReject ? rejectStyle : {})
	}), [
		isDragActive,
		isDragReject
	]);

	const user = useSession();
	const displayFiles = filesBuffer.map(file => (
			<li key={file.name}>
				{file.name} - {file.size} bytes
			</li>
	));

	const fileDropHandler = acceptedFiles => {
		let newArray = filesBuffer.slice();

		setFilesBuffer(newArray.concat(acceptedFiles));

		console.log(acceptedFiles);
	};

	const onComplete = (e) => {
		return(() => {
			setProgress("waiting");
		});
	}

	const confirmButtonHandler = async (event) => {
		event.stopPropagation();
		console.log(progress);
		console.log(filesBuffer);

		let onComplete = (e) => {
			setProgress("complete");
		};

		if(progress === "waiting") {
			for(let i = 0; i < filesBuffer.length; i++) {

				let p = filesBuffer[i].text();
				console.log(p);
				await p.then(function(s) {

					let json = JSON.parse(s);
					json = json["timelineObjects"];
					let filtered = json.filter(function (place) {
						return place.placeVisit != null;
					});
					// let b = JSON.parse("{\"hi\":1}");

					// database.ref("/locations").update(json, (e) => onComplete(e))

					// handles valid covid cases to have all days since 15 days before symptomatic stored
					if(hasCorona) {
						const nDay = getNDaysSinceDate(startDate, 15);

						filtered = filtered.filter(function (place) {
							return place.placeVisit.duration.endTimestampMs > nDay;
						})
					} else { // else just get 15 days before now
						const nDay = getNDaysSinceDate(Date.now(), 15);

						filtered = filtered.filter(function (place) {
							return place.placeVisit.duration.endTimestampMs > nDay;
						})
					}

					for(let j = 0; j < filtered.length; j++) {
						let location = filtered[j].placeVisit;

						let day = new Date(parseInt(location.duration.endTimestampMs,10));
						const year = day.getFullYear().toString(10);
						let month = (day.getMonth() + 1).toString();
						let days31 = day.getDate().toString(10);

						if(month.length < 2) {
							month = '0' + month;
						}
						if(days31.length < 2) {
							days31 = '0' + days31;
						}

						let hashKey = year + month + days31 + "_" + location.location.placeId;

						console.log(location);
						console.log(hashKey);
						database.ref('/users/' + "userid" + "/" + hashKey).update(location);

						// if the upload has a corona flag need to update corona visit count and push
						if(hasCorona) {
							database.ref("/locations/" + hashKey).once("value").then(
								function(snapshot) {
									if(snapshot.val() === null) {
										database.ref("/locations/" + hashKey).update(location);
										database.ref("/locations/" + hashKey).update({count: 1});
									} else {
									  let newCount = snapshot.val().count;
									  newCount++;
										database.ref("/locations/" + hashKey).update({count: newCount});
									}
								}
							)
						}

						//
						// database.ref("/").once("locations").then(
						// 	function(snapshot) {
						// 		let count =
						// 	}
						// )
						// let currentCount = database.ref("/").once(location)
					}

				})

			}
			setProgress("sending");

		}
	};

	const datePickHandler = (date) => {
		setStartDate(date);
	}

	const coronaToggleHandler = (event) => {
		setOpen(true);
		event.stopPropagation();
		setHasCorona(!hasCorona);
		setisDisabled(true);
		setTimeout(() => setisDisabled(false), 1000);

	}

	return(
			<Card style={{width:"80%", height: "475px"}}>
				<div className={"zone"}>
					<Dropzone accept={'application/json'} onDrop={fileDropHandler}>
						{({getRootProps, getInputProps}) => (
								<section className={"inputSpace"}>
									<div {...getRootProps({style})}>
										<input {...getInputProps()}/>
										<p>To find out more COVID-19 information in your area, please upload a file.</p>
									</div>
								</section>
						)}
					</Dropzone>
				</div>
				<div className={"remaining"}>
				<h4>Files</h4>
				<ul>{displayFiles}</ul>
				<Button color ="primary" variant="contained" className={"confirmButton"} onClick={(event) => confirmButtonHandler(event)}>Confirm</Button>
				<Button color ="primary" variant="contained" className={hasCorona ? "coronaToggleOn" : "coronaToggleOff"} disabled={isDisabled} onClick={(event) => coronaToggleHandler(event)}>{hasCorona ? "Sick" : "Healthy"}</Button>
				<aside id={"calendar"} className={hasCorona ? "show" : "hide"}>
					<h4>Please select the date you started showing symptoms</h4>
						<DatePicker selected={startDate} onChange={(event) => datePickHandler(event)}/>
				</aside>
				</div>
			</Card>
	);
}

export default FileUploader;
