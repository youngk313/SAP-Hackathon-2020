import React, {useState} from 'react';
import Dropzone from 'react-dropzone';
import Card from "@material-ui/core/Card";
import "./Fileuploader.css"
import { database } from "../firebase";

import { useSession } from './App';

const FileUploader = () => {
	const [progress, setProgress] = useState("waiting");
	const [filesBuffer, setFilesBuffer] = useState([]);
	const user = useSession();

	const fileDropHandler = acceptedFiles => {
		let newArray = filesBuffer.slice();

		setFilesBuffer(newArray.concat(acceptedFiles));

		console.log(acceptedFiles);
	};

	const onComplete = (e) => {
		return(() => {
			setProgress("complete");
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
					database.ref('users/' + "useruid").push(json, (e) => onComplete(e));
				})
				setProgress("sending");
			}
		}
	};

	return(
			<Card style={{width:"50%"}}>
				<Dropzone accept={'application/json'} onDrop={fileDropHandler}>
					{({getRootProps, getInputProps}) => (
							<section>
								<div {...getRootProps()}>
									<input {...getInputProps()} />
									<p>Drag 'n' drop some files here, or click to select files</p>
								</div>
							</section>
					)}
				</Dropzone>
				<h4>Files</h4>
				<button className={"confirmButton"} onClick={(event) => confirmButtonHandler(event)}>Confirm</button>
			</Card>
	);
}

export default FileUploader;
