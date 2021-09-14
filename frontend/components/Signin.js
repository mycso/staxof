import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import Router from 'next/router'; 
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

const SIGNIN_MUTATION = gql `
	mutation SIGNIN_MUTATION(
	$email: String!, 
	$password: String!
	) {
		signin(email: $email, password: $password) {
			id
			email
			name
		}
	}
`;

class Signin extends Component {
	state = {
		name: '',
		password: '',
		email: '',
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
				mutation={SIGNIN_MUTATION} 
				variables={this.state}
				refetchQueries={[{ query: CURRENT_USER_QUERY }]}
			>
				{(signup, { error, loading }) => (
						<Form 
							method="post" 
							onSubmit={async e => {
								e.preventDefault();
								await signup();
								this.setState({ name: '', email: '', password: '' });
								Router.push({
									pathname: '/items',
								});
							}}
						>
							<fieldset disabled={loading} aria-busy={loading}>
								<h2>Sign into your Account</h2>
								<Error error={error} />
								<label htmlFor="email">
									Email
									<input 
										type="email" 
										name="email" 
										placeholder="Email" 
										value={this.state.email} 
										onChange={this.saveToState}
									/>
								</label>
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
											placeholder="Password" 
											value={this.state.password} 
											onChange={this.saveToState}
										/>
										
									</label>
								</EyeReveal>
								<button type="submit">Sign In!</button>
								<div className="float-right mt-1">
									<small>
										<a className="member-link" href="/signup"><span className="cursor-pointer">Sign Up</span></a> or <a className="member-link" href="/resetPassword"><span className="pr-1 cursor-pointer">Reset Password</span></a>
									</small>
								</div>
							</fieldset>
						</Form>
					)
				}
			</Mutation>
		);
	}
}

export default Signin;