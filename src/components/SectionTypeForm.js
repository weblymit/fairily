import React from 'react';
import TypeForm from './TypeForm';
import styled from 'styled-components';
const SectionTypeForm = () => {
	return (
		<Div>
			<div className="container">
				<h2>Type form</h2>
				<a
					href="https://manonlavalley12.typeform.com/to/IYwny8"
					className="btn btn-danger"
					target="_blank"
					rel="noopener noreferrer"
				>
					Launch me open new onglet
				</a>
				<TypeForm />
			</div>
		</Div>
	);
};

export default SectionTypeForm;

const Div = styled.div`
	background-color: #fff;
	padding-top: 50px;
	display: flex;
	justify-content: center;
  align-content: center;
`;
