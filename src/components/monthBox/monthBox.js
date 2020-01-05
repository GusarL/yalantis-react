import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './monthBox.scss';

class MonthBox extends Component {
	render() {
		const { name, color } = this.props;
		return (
			<div className={`month-container ${color}`}>
				{name}
			</div>
		);}
}

MonthBox.propTypes = {
	name: PropTypes.string,
	color: PropTypes.string
};

export default MonthBox;
