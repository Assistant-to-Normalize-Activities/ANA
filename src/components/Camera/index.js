import React, { Component } from "react";
import QrReader from "react-qr-reader";

class CamScanner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			result: "Carregando..."
		};

		this.handleScan = this.handleScan.bind(this);
	}
	handleScan(result) {
		if (result) {
			this.setState({ result });
		}
	}
	handleError(err) {
		console.error(err);
	}
	render() {
		const previewStyle = {
			width: "80%",
			margin: "8em 0 0 0"
		};

		return (
			<div style={previewStyle}>
				<QrReader
					delay={this.state.delay}
					onError={this.handleError}
					onScan={this.handleScan}
				/>
				<p>{this.state.result}</p>
			</div>
		);
	}
}

export default CamScanner;
