import React from 'react';

function BadgesList(props) {
	if (props.loading) {
		return 'Cargando...';
	}

	if (props.error) {
		return `La aplicacion salto error ${props.error.message}`;
	}

	return 'Se cargaron todos los datos';
}

export default BadgesList;
