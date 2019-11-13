import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { fetchUser } from './redux/actions/user';
import { FETCH_USER_LOADING } from './redux/actions/type';
import User from './User';
import './App.css'

function App(props) {

	const { loading, users } = props.users;
	const [showUserSection, setShowUserSection] = useState(false);

	const showUserSectionHandler = () => {
		if(!showUserSection) {
			props.fetchUsers();
		}
		
		setShowUserSection(!showUserSection);

	}


	return (
		<div>
			<Button variant="outlined" onClick={showUserSectionHandler}>
				{showUserSection ? "Hide User List" : "Show User List"}
      </Button>
			<div className={showUserSection ? "show" : "hide"} >
				<User data={props.users} />
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		users: state.users
	}
}

const mapsDispatchToProps = (dispatch) => {
	return {
		fetchUsers: () => dispatch(fetchUser())
	}
}

export default connect(mapStateToProps, mapsDispatchToProps)(App);
