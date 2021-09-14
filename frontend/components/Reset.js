import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';
import { 
    faEye,
} from '@fortawesome/free-solid-svg-icons';

const EyeReveal = styled.div`
  .cursor-pointer {
    cursor: pointer;
  }

  .show{
  	opacity: 1;
  }

  .hide {
  	opacity: 0.5;
  }
`
const RESET_MUTATION = gql `
	mutation RESET_MUTATION($resetToken: String!, $password: String!, $confirmPassword: String!) {
		resetPassword(
			resetToken: $resetToken,
			password: $password,
			confirmPassword: $confirmPassword
		) {
			id
			email
			name
		}
	}
`;

class Reset extends Component {
	static propTypes = {
		resetToken: PropTypes.string.isRequired,
	};

	state = {
		password: '',
		confirmPassword: '',
		isPasswordShown: false
	};

	togglePasswordVisibility = () => {
		const { isPasswordShown } = this.state;
		this.setState({ isPasswordShown: !isPasswordShown });
	};

	saveToState = e => {
		this.setState({ [e.target.name]: e.target.value })
	};
	render() {
		const { isPasswordShown } = this.state;
		return (
			<Mutation 
				mutation={RESET_MUTATION} 
				variables={{
					resetToken: this.props.resetToken,
					password: this.state.password,
					confirmPassword: this.state.confirmPassword,
				}}
				refetchQueries={[{ query: CURRENT_USER_QUERY }]}
			>
				{(reset, { error, loading, called }) => (
						<Form 
							method="post" 
							onSubmit={async e => {
								e.preventDefault();
								await reset();
								this.setState({ password: '', confirmPassword: '' });
							}}
						>
							<fieldset disabled={loading} aria-busy={loading}>
								<h2>Request Your Password</h2>
								<Error error={error} />
								<EyeReveal>
									<label htmlFor="password">
										Password
										
											<div className={`${isPasswordShown ? "show" : "hide"} float-right mt-1 cursor-pointer`}>
												<small>
													<span className="pr-1" onClick={this.togglePasswordVisibility}>Show Password </span>
													<FontAwesomeIcon icon={faEye} onClick={this.togglePasswordVisibility}/>
												</small>
											</div>
																		
										<input 
											type={(isPasswordShown) ? "text" : "password"}
											name="password"
											pattern=".{10,}"
											title="10 or more characters"
											placeholder="Password" 
											value={this.state.password} 
											onChange={this.saveToState}
										/>
									</label>
								</EyeReveal>	
								<label htmlFor="confirmPassword">
									Confirm Your Password
										<div className={`${isPasswordShown ? "show" : "hide"} float-right mt-1 cursor-pointer`}>
											<small>
												<span className="pr-1" onClick={this.togglePasswordVisibility}>Show Password </span>
												<FontAwesomeIcon icon={faEye} onClick={this.togglePasswordVisibility}/>
											</small>
										</div>									
										<input 
										type={(isPasswordShown) ? "text" : "password"}
										name="confirmPassword" 
										pattern=".{10,}"
										title="10 or more characters"
										placeholder="Confirm Password" 
										value={this.state.confirmPassword} 
										onChange={this.saveToState}
									/>
								</label>
								<button type="submit">Reset Your Password!</button>
							</fieldset>
						</Form>
					)
				}
			</Mutation>
		);
	}
}

export default Reset;