import React, { Component } from "react";
import axios from "axios";

export default class UserForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			values: {
				account: "",
				username: "",
				password: "",
				phone: "",
				email: "",
				type: "",
			},
		};
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState((state) => ({
			values: {
				...state.values,
				[name]: value,
			},
		}));
	};
	handleSubmit = async (e) => {
		e.preventDefault();
		const { id, ...payload } = this.state.values;

		try {
			if (id) {
				await axios.put(
					`https://62a42428259aba8e10e2f93f.mockapi.io/api/UserManagement/${id}`,
					payload
				);
			} else {
				await axios.post(
					"https://62a42428259aba8e10e2f93f.mockapi.io/api/UserManagement",
					payload
				);
			}
			this.setState({
				values: {
					account: "",
					username: "",
					password: "",
					phone: "",
					email: "",
					type: "",
				},
			});
			this.props.onSuccess();
		} catch (error) {
			console.log(error);
		}
	};

	componentDidUpdate(prevProps, prevState) {
		if (this.props.user !== prevProps.user) {
			this.setState({ values: { ...this.props.user } });
		}
	}

	render() {
		const { values } = this.state;
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div className="row">
						<div className="col-md-6 mb-3">
							<label htmlFor="account" className="form-label">
								Tài khoản
							</label>
							<input
								id="account"
								type="text"
								className="form-control"
								value={values.account}
								name="account"
								onChange={this.handleChange}
							/>
						</div>
						<div className="col-md-6 mb-3">
							<label htmlFor="username" className="form-label">
								Họ tên
							</label>
							<input
								id="username"
								type="text"
								className="form-control"
								value={values.username}
								name="username"
								onChange={this.handleChange}
							/>
						</div>
						<div className="col-md-6 mb-3">
							<label htmlFor="password" className="form-label">
								Mật khẩu
							</label>
							<input
								id="password"
								type="password"
								className="form-control"
								value={values.password}
								name="password"
								onChange={this.handleChange}
							/>
						</div>
						<div className="col-md-6 mb-3">
							<label htmlFor="phone" className="form-label">
								Số điện thoại
							</label>
							<input
								id="phone"
								type="text"
								className="form-control"
								value={values.phone}
								name="phone"
								onChange={this.handleChange}
							/>
						</div>

						<div className="col-md-6 mb-3">
							<label htmlFor="email" className="form-label">
								Email
							</label>
							<input
								id="email"
								type="text"
								className="form-control"
								value={values.email}
								name="email"
								onChange={this.handleChange}
							/>
						</div>

						<div className="col-md-6 mb-3">
							<label htmlFor="type" className="form-label">
								Mã loại người dùng
							</label>
							<select
								id="type"
								className="form-select"
								value={values.type}
								name="type"
								onChange={this.handleChange}
							>
								<option value="">Vui lòng chọn</option>
								<option>Khách hàng</option>
							</select>
						</div>
					</div>
					<div className="mt-2">
						<button
							className="btn btn-success me-2"
							disabled={this.props.disabled}
						>
							Đăng ký
						</button>
						<button
							className="btn btn-primary"
							disabled={!this.props.disabled}
						>
							Cập nhật
						</button>
					</div>
				</form>
			</div>
		);
	}
}
