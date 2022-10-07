import React, { Component } from "react";
import axios from "axios";

import UserForm from "./UserForm";
import UserList from "./UserList";

export default class UserManagement extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: [],
			selectedUser: null,
			disabled: false,
		};
	}

	fetchUsers = async () => {
		try {
			const { data } = await axios.get(
				"https://62a42428259aba8e10e2f93f.mockapi.io/api/UserManagement"
			);
			this.setState({ users: data, disabled: false });
		} catch (error) {
			console.log(error);
		}
	};

	fetchUserDetails = async (userId) => {
		try {
			const { data } = await axios.get(
				`https://62a42428259aba8e10e2f93f.mockapi.io/api/UserManagement/${userId}`
			);
			this.setState({ selectedUser: data, disabled: true });
		} catch (error) {}
	};

	componentDidMount() {
		this.fetchUsers();
	}

	render() {
		const { users, selectedUser, disabled } = this.state;
		return (
			<div className="container">
				<h1 className="text-center text-primary">User Management</h1>

				<div className="card mb-5">
					<div className="card-header bg-dark text-light">
						<strong>Form đăng ký</strong>
					</div>
					<div className="card-body">
						<UserForm
							onSuccess={this.fetchUsers}
							user={selectedUser}
							disabled={disabled}
						/>
					</div>
				</div>

				<div className="card">
					<div className="card-header bg-dark text-white">
						<strong>Danh sách người dùng</strong>
					</div>
					<div className="card-body">
						<UserList
							users={users}
							onDeleteSuccess={this.fetchUsers}
							onSelectUser={this.fetchUserDetails}
						/>
					</div>
				</div>
			</div>
		);
	}
}
