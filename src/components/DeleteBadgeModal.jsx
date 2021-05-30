import React from 'react';

import Modal from './Modal';

function DeleteBadgeModal(props) {
	return (
		<Modal isOpen={props.isOpen} closeModal={props.closeModal}>
			<h1>Are you sure?</h1>
			<p>You are about to delete this badge.</p>

			<div>
				<button onClick={props.deleteBadge} className="btn btn-danger mr-4">
					Delete
				</button>
				<button onClick={props.closeModal} className="btn btn-primary">
					Cancel
				</button>
			</div>
		</Modal>
	);
}

export default DeleteBadgeModal;
