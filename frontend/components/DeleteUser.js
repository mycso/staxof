import React, { Component } from 'react';
import UserStyles from './styles/UserStyles';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

const DELETE_USER_MUTATION = gql`
	mutation DELETE_USER_MUTATION($id: ID!) {
		deleteUser(id: $id) {
			id
		}
	}
`;

class DeleteUser extends Component {
	update = (cache, payload) => {
		// manually update the cache on the client, so it matches the server
		// 1. Read the cahe for the items we want
		const data = cache.readQuery({ query: CURRENT_USER_QUERY });
		console.log(data, payload);
		// 2. Filter the deleted itemout of the page
		const filteredUsers = data.user.filter(user => user.id !== 
		payload.data.deleteUser.id);
		// 3. Put the items back!
		cache.writeQuery({ query: CURRENT_USER_QUERY, data: { user: filteredUsers } });
		Router.push({
			pathname: '/items',
		});
	};
	render() {
		return ( 
			<Mutation 
				mutation={DELETE_USER_MUTATION} 
				variables={{ id: this.props.id }}
				update={this.update}
				refetchQueries={[{ query: CURRENT_USER_QUERY }]}
			>
				{(deleteUser, { error }) => (
					<UserStyles>
						<button onClick={() => {
							if (confirm('Are you sure you want to delete this user?')) {
								deleteUser().catch(err => {
									alert(err.message);
								});
							}
						}} className="btn btn-warning">
							{this.props.children}
						</button>
					</UserStyles>
				)}
			</Mutation>
		);
	}
}

export default DeleteUser;