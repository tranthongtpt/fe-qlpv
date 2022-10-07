import axios from "axios";
import React, { Component } from "react";

export default class UserList extends Component {
	handleDeleteUser = async (userId) => {
		try {
			await axios.delete(
				`https://62a42428259aba8e10e2f93f.mockapi.io/api/UserManagement/${userId}`
			);
			this.props.onDeleteSuccess();
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		const { users, onSelectUser } = this.props;
		return (
			<div>
				<table className="table">
					<thead>
						<tr>
							<th>STT</th>
							<th>Tài khoản</th>
							<th>Họ tên</th>
							<th>Mật khẩu</th>
							<th>Email</th>
							<th>Số điện thoại</th>
							<th>Loại người dùng</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => {
							return (
								<tr key={user.id}>
									<td>{index + 1}</td>
									<td>{user.account}</td>
									<td>{user.username}</td>
									<td>{user.password}</td>
									<td>{user.email}</td>
									<td>{user.phone}</td>
									<td>{user.type}</td>
									<td>
										<button
											className="btn btn-primary me-2"
											onClick={() =>
												onSelectUser(user.id)
											}
										>
											Chỉnh sửa
										</button>
										<button
											className="btn btn-danger"
											onClick={() =>
												this.handleDeleteUser(user.id)
											}
										>
											Xóa
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}
