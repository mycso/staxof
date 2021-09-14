import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Router from 'next/router'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';
import { 
    faEye,
} from '@fortawesome/free-solid-svg-icons';

const Terms = styled.div`

  .links {
    color: ${props => props.theme.lightBlue};;
    text-decoration: none;
    font-weight: normal;
    background-color: transparent;
    padding: 0;
    font-size: 17px;
  }

  .terms,
  input[type='checkbox'] {
    width: auto;
  }
`

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

const SIGNUP_MUTATION = gql `
	mutation SIGNUP_MUTATION(
	$email: String!, 
	$password: String!,
	$terms: Boolean!,
	$location: String!,
	) {
		signup(
			email: $email, 
			password: $password,
			terms: $terms,
			location: $location
		) {
			id
			email
			terms
			location
		}
	}
`;

class Signup extends Component {
	state = {
		email: '',
		password: '',
		terms: true,
		location: '',
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
				mutation={SIGNUP_MUTATION} 
				variables={this.state}
				refetchQueries={[{ query: CURRENT_USER_QUERY }]}
			>
				{(signup, { error, loading }) => (
						<Form 
							method="post" 
							onSubmit={async e => {
								e.preventDefault();
								const res = await signup();
								this.setState({ email: '', password: '' });

							    Router.push({
									pathname: '/items',
								});
							}}
						>
							<fieldset disabled={loading} aria-busy={loading}>
								<h2>Sign Up for an Account</h2>
								<Error error={error} />
								<label htmlFor="email">
									Email
									<input 
										type="email" 
										name="email" 
										placeholder="Email" 
										value={this.state.email} 
										onChange={this.saveToState}
										required
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
											pattern=".{10,}"
											title="10 or more characters"
											placeholder="Password" 
											value={this.state.password} 
											onChange={this.saveToState}
											required
										/>
									</label>
								</EyeReveal>

								{/*<br />

								<label>
									Enter Your Location
								</label>

								<select 
									type="text"
									name="location" 
									placeholder="Location" 
									value={this.state.location} 
									onChange={this.saveToState} 
									htmlFor="location" 
									required
								>
									<option> 
									United Kingdom 
									</option>

									<option> 
									Europe
									</option>

									<option> 
									International 
									</option>
								</select>*/}

								<Terms>
									<br/>
									<div htmlFor="terms">
										<h6 className="terms">
											<input 
												name="terms"
												type="checkbox" 
												required 
												className="mr-2" 
												value={this.state.terms} 
												onChange={this.saveToState}
											/>
											 By signing up, you agree to our <a className="links" href="/termsConditions" target="_blank">Terms of Use</a> and <a className="links" href="/privacyPolicy" target="_blank">Privacy Policy</a>.
										</h6>
									</div>
									<br/>
								</Terms>
								<button type="submit">Sign Up!</button>
								<div className="float-right mt-1">
									<small>
										<a className="member-link" href="/signin"><span className="cursor-pointer">Sign In</span></a> or <a className="member-link" href="/resetPassword"><span className="pr-1 cursor-pointer">Reset Password</span></a>
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

export default Signup;
export { SIGNUP_MUTATION };