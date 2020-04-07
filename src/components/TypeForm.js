import React, { Component } from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';

class TypeForm extends Component {
	constructor(props) {
		super(props);
		this.openForm = this.openForm.bind(this);
	}

	openForm() {
		this.typeformEmbed.typeform.open();
	}
	render() {
		// const style = {
		//   display: 'inline-block',
		//   textDecoration: none,
		// backgroundColor: "#9C90AF",
		// color: white,
		// cursor: pointer;
		// font - family: Helvetica, Arial, sans - serif;
		// font - size: 20px;
		// line - height: 50px;
		// text - align: center;
		// margin: 0;
		// height: 50px;
		// padding: 0px 33px;
		// border - radius: 25px;
		// max - width: 100 %;
		// white - space: nowrap;
		// overflow: hidden;
		// text - overflow: ellipsis;
		// font - weight: bold;
		// -webkit - font - smoothing: antialiased; -moz - osx - font - smoothing: grayscale;
		// }
		const url = 'https://manonlavalley12.typeform.com/to/IYwny8';
		// const popup = true
		return (
			<div>
				<ReactTypeformEmbed
					url="https://manonlavalley12.typeform.com/to/IYwny8"
					popup
					autoOpen={false}
					hideHeaders
					hideFooter
					buttonText="Go!"
					style={{
						position: 'relative',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
            overflow: 'hidden',
            backgroundColor: '#9C90AF',
            borderRadius: 25,
					}}
					ref={(tf) => {
						this.typeformEmbed = tf;
					}}
					// style={{
					// 	// display: 'inlineBlock',
					// 	textDecoration: 'none',
					// 	backgroundColor: '#9C90AF',
					// 	color: 'white',
					// 	cursor: 'pointer',
					// 	// fontFamily: 'Helvetica', 'Arial', 'sansSerif',
					// 	fontSize: 20,
					// 	// lineHeight: 1,
					// 	textAlign: 'center',
					// 	margin: 0,
					// 	height: 500,
					// 	paddingTop: 0,
					// 	paddingBottom: 0,
					// 	paddingRight: 33,
					// 	paddingLeft: 33,
					// 	borderRadius: 25,
					// 	maxWidth: '100%',
					// 	// whiteSpace: 'nowrap',
					// 	// overflow: 'hidden',
					// 	// textOverflow: 'ellipsis',
					// 	fontWeight: 'bold'
					// 	//  - webkit - font - smoothing: antialiased; - moz - osx - font - smoothing: grayscale;
					// }}
				/>
				<button className="btn btn-green" onClick={this.openForm} style={{ cursor: 'pointer' }}>
					Launch me Test popup
				</button>
			</div>
		);
	}
}

export default TypeForm;
