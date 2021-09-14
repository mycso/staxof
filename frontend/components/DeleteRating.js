import React, { Component } from 'react';
import ItemStyles from './styles/ItemStyles';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
// import { ALL_RATINGS_QUERY } from './SingleItem';
import { SINGLE_ITEM_QUERY } from './SingleItem';

const SINGLE_RATING_QUERY = gql`
	query SINGLE_RATING_QUERY($id: ID!){
		rating(where: { id: $id }){
			id
			ratingSubject
			ratingDescription
			ratingImage
			ratingStar
		}
	}
`;

const DELETE_RATING_MUTATION = gql`
	mutation DELETE_RATING_MUTATION($id: ID!) {
		deleteRating(id: $id) {
			id
		}
	}
`;

class DeleteRating extends Component {
	reloadPage () {
  		window.location.reload()
	}

	update = (cache, payload) => {
		// manually update the cache on the client, so it matches the server
		// 1. Read the cahe for the ratings we want
		const data = cache.readQuery({ query: SINGLE_ITEM_QUERY });
		console.log(data, payload);
		// 2. Filter the deleted rating out of the page
		const filteredRatings = item.ratings.filter(rating => rating.id !== 
		payload.data.deleteRating.id);
		// 3. Put the ratings back!
		cache.writeQuery({ query: SINGLE_ITEM_QUERY, data: { ratings: filteredRatings } });
		Router.back();
	};
	render() {
		return ( 
			<Mutation 
				mutation={DELETE_RATING_MUTATION} 
				variables={{ id: this.props.id }}
				update={this.update}
				refetchQueries={[{ query: SINGLE_RATING_QUERY }]}
			>
				{(deleteRating, { error }) => (
					<button onClick={() => {
						if(confirm('Are you sure you want to delete this rating?')) {
							deleteRating().catch(err => {
								alert(err.message);
							});	
						} this.reloadPage()
					}
				}  
					className="btn btn-warning">
						{this.props.children}
					</button>
				)}
			</Mutation>
		);
	}
}

export default DeleteRating;
