import React, { Component } from 'react';
import ItemStyles from './styles/ItemStyles';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ALL_ITEMS_QUERY } from './Items';

const DELETE_ITEM_MUTATION = gql`
	mutation DELETE_ITEM_MUTATION($id: ID!) {
		deleteItem(id: $id) {
			id
		}
	}
`;

class DeleteItem extends Component {
	update = (cache, payload) => {
		// manually update the cache on the client, so it matches the server
		// 1. Read the cahe for the items we want
		const data = cache.readQuery({ query: ALL_ITEMS_QUERY });
		console.log(data, payload);
		// 2. Filter the deleted itemout of the page
		const filteredItems = data.items.filter(item => item.id !== 
		payload.data.deleteItem.id);
		// 3. Put the items back!
		cache.writeQuery({ query: ALL_ITEMS_QUERY, data: { items: filteredItems } });
		Router.back();
	};
	render() {
		return ( 
			<Mutation 
				mutation={DELETE_ITEM_MUTATION} 
				variables={{ id: this.props.id }}
				update={this.update}
				refetchQueries={[{ query: ALL_ITEMS_QUERY }]}
			>
				{(deleteItem, { error }) => (
					<button onClick={() => {
						if (confirm('Are you sure you want to delete this item?')) {
							deleteItem().catch(err => {
								alert(err.message);
							});
						}
					}} className="btn btn-warning">
						{this.props.children}
					</button>
				)}
			</Mutation>
		);
	}
}

export default DeleteItem;