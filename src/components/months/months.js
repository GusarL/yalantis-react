import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import MonthBox from '../monthBox/monthBox';
import UsersPerMonth from '../uresrPerMonth/usersPerMonth'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { chooseColor } from '../../utils/utils'
import './month.scss';


class Months extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeMonth: '',
		};
	}
	
	mouseHoverHandler = month => {
		this.setState({
			activeMonth: month,
		});
	};
	
	render() {
		const { birthsdaysSpredMonth = {} }  = this.props;
		const { activeMonth } = this.state;
		const renderMonthList = Object.keys(birthsdaysSpredMonth).map(key => {
			  let users = [...birthsdaysSpredMonth[key].userListPerMonth];
				const color = chooseColor(birthsdaysSpredMonth[key].usersNumber);
				return (<Col xs={4}
										 key={key}
										 onMouseEnter={this.mouseHoverHandler.bind(this, key)}
										 onMouseLeave={this.mouseHoverHandler.bind(this, key)}>
										 
					<MonthBox name={key}
										color={color}/>
					<UsersPerMonth users={users} activeMonth={activeMonth} actualMonth={key}/>
				</Col>)
			}
		);
		return (
			<Container className={'monthList-container'}>
				<Row>
				  {renderMonthList}
				</Row>
			</Container>
		);}
}
//
Months.propTypes = {
	userList: PropTypes.arrayOf(
		PropTypes.shape({
			users: PropTypes.object
		})
	)
};

const mapStateToProps = (state) => {
	return {
		userList: state.users.userList,
		birthsdaysSpredMonth: state.users.birthsdaysSpredMonth,
	};
};

export default connect(
	mapStateToProps,
)(Months);
