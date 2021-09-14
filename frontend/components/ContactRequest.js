import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import Form from './styles/Form';
import Error from './ErrorMessage';

const CONTACT_REQUEST_MUTATION = gql `
	mutation CONTACT_REQUEST_MUTATION(
		$email: String!
		$subject: String! 
		$message: String!	
	) {
		createContact(
			email: $email 
			subject: $subject
			message: $message
		) {
			message
		}
	}
`;

class ContactRequest extends Component {
	state = {
		email: '',
		subject: '', 
		message: ''
	};
	saveToState = e => {
		this.setState({ [e.target.name]: e.target.value })
	};
	render() {
		return (
			<Mutation 
				mutation={CONTACT_REQUEST_MUTATION} 
				variables={this.state}
			>
				{(reset, { error, loading, called }) => (
						<Form 
							method="post" 
							onSubmit={async e => {
								e.preventDefault();
								await reset();
								this.setState({ email: '', subject: '', message: '' });
							}}
						>
							<fieldset disabled={loading} aria-busy={loading}>

								<h2>Contact Us</h2>
								<br />
						    	<h4>Leave a message for us right here and we’ll get back to you as soon as we can!</h4>
						    	<br />

								<Error error={error} />
								{!error && !loading && called && <p>Success! Thank you for your message!</p>}
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
								<label htmlFor="subject">
									Subject
									<input 
										type="text" 
										name="subject" 
										placeholder="Subject" 
										value={this.state.subject} 
										onChange={this.saveToState}
										required
									/>
								</label>
								<label htmlFor="message">
									Message
									<textarea 
										type="text" 
										name="message" 
										placeholder="Message" 
										value={this.state.message} 
										onChange={this.saveToState}
										required
									/>
								</label>
								<button type="submit">Send Message</button>
							</fieldset>
						</Form>
					)
				}
			</Mutation>
		);
	}
}

export default ContactRequest;
export { CONTACT_REQUEST_MUTATION };