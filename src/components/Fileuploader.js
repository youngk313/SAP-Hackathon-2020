import React, { useContext } from 'react';
import Dropzone from 'react-dropzone';
import Card from "@material-ui/core/Card";
import "./Fileuploader.css"
import { database } from "../firebase";

import { UserContext } from '../providers/UserProvider';

export default class Fileuploader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			progress: "waiting",
			filesBuffer: Array(0)
		}
	}


	fileDropHandler = acceptedFiles => {
		const newArray = this.state.filesBuffer.slice();
		newArray.push(acceptedFiles);
		this.setState({filesBuffer: newArray});
		// const user = useContext(UserContext);
		console.log(acceptedFiles);
		console.log(this.state.filesBuffer);
	};

	onComplete = (e) => {
		return(function() {
			this.setState({progress: "complete"});
		});
	}

	confirmButtonHandler(event) {
		event.stopPropagation();

		console.log(this.state.progress);

		this.onComplete = (e) => {
			this.setState({progress: "complete"});
		};

		if(this.state.progress === "waiting") {
			database.ref('users/' + "TODOUSERID").push(this.state.filesBuffer, (e) => this.onComplete(e));
			this.setState({progress: "sending"});
				// fr.readAsText()


		}
	}

    render() {
		return(
			<Card style={{width:"50%"}}>
			<Dropzone accept={'application/json'} onDrop={this.fileDropHandler}>
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
				<button className={"confirmButton"} onClick={(event) => this.confirmButtonHandler(event)}>Confirm</button>
			</Card>
		);
		}
}



