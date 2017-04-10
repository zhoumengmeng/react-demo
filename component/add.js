import React from 'react';
import Edit from './edit'

export default class Add extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Edit {...this.props} isAdd={true} />
		)
	}
}
