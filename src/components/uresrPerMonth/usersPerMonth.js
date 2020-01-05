import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

class UsersPerMonth extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isHovering: false,
		};
	}
	
	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.actualMonth === nextProps.activeMonth) {
			return {
				isHovering: !prevState.isHovering,
			};
		}
		return prevState;
	}
	
	render() {
		const { users }  = this.props;
		const { isHovering }  = this.state;
		
		let userOutput = users.map(user => {
			return (<Col key={user.id}>{user.firstName} {user.lastName}</Col>)
		});
		
		return (
			<Container>
				{isHovering && userOutput}
			</Container>
		);}
}

UsersPerMonth.propTypes = {
	userList: PropTypes.arrayOf(
		PropTypes.shape({
			users: PropTypes.object
		})
	)
};

export default UsersPerMonth;
