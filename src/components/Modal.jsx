import React from 'react';

import './styles/Modal.css';

function Modal(props) {
	return (
		<div className="Modal">
			<div className="Modal__container">{props.children}</div>
		</div>
	);
}

export default Modal;
