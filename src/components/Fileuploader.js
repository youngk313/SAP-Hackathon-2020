import React from 'react';
import Dropzone from 'react-dropzone';
import Card from "@material-ui/core/Card";

import { useSession } from './App';

export default class Fileuploader extends React.Component {

	fileDropHandler = acceptedFiles => {
		const user = useSession();
	};

    render() {
		return(
			<Card style={{width:"20%"}}>
			<Dropzone onDrop={this.fileDropHandler}>
				{({getRootProps, getInputProps}) => (
					<section>
					<div {...getRootProps()}>
						<input {...getInputProps()} />
						<p>Drag 'n' drop some files here, or click to select files</p>
					</div>
					</section>
				)}
			</Dropzone>
			</Card>
		);
	}
}