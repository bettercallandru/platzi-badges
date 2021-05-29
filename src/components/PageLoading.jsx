import React from 'react';

import './styles/PageLoading.css';
import Loader from './Loader';

function PageLoading(props) {
	return (
		<div className="PageLoading">
			<Loader />
			{props.children}
		</div>
	);
}

export default PageLoading;
