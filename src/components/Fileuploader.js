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
		const newArray = filesBuffer.slice();
		newArray.push(acceptedFiles);

		setFilesBuffer(newArray);

		console.log(acceptedFiles);
		console.log(this.state.filesBuffer);
	};

	const onComplete = (e) => {
		return(() => {
			setProgress("complete");
		});
	}

	const confirmButtonHandler = (event) => {
		event.stopPropagation();

		console.log(this.state.progress);

		onComplete = (e) => {
			setProgress("complete");
		};

		if(progress === "waiting") {
			database.ref('users/' + user.uid).push(filesBuffer, (e) => onComplete(e));
			this.setState({progress: "sending"});
			// fr.readAsText()
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
