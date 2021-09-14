import React, { Component } from 'react';
import { Mutation, Query} from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router'; 
import Form from './styles/Form';
import ItemStyles from './styles/ItemStyles';
import formatMoney from '../lib/formatMoney';
import SubHeader from '../components/SubHeader';
import Error from './ErrorMessage';
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

const UPDATE_RATING_MUTATION = gql`
	mutation UPDATE_RATING_MUTATION (
		$id: ID!,
		$ratingSubject: String,
		$ratingDescription: String,
		$ratingImage: String,
		$ratingStar: Int
	){
		updateRating(
			id: $id,
			ratingSubject: $ratingSubject,
			ratingDescription: $ratingDescription,
			ratingImage: $ratingImage,
			ratingStar: $ratingStar

		) {
			id
			ratingSubject
			ratingDescription
			ratingImage
			ratingStar
		}
	}
`;

class UpdateRating extends Component {
	state = {};
	handleChange = e => {
		const { name, type, value } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};
	updateRating = async (e, updateRatingMutation) => {
		e.preventDefault();
		const res = await updateRatingMutation({
			variables: {
				id: this.props.id,
				...this.state,
			}
		});
		Router.back();
	};

	render() {
		return (
			<div>
				<SubHeader />
				<Query query={SINGLE_RATING_QUERY} variables={{ id: this.props.id }} refetchQueries={[{ query: SINGLE_ITEM_QUERY }]}>
				{({data, loading}) => {
					if (loading) return <p>Loading..</p>;
					if(!data.rating) return <p>No Rating Found for ID {this.props.id}</p>
					return (
						<Mutation mutation={UPDATE_RATING_MUTATION} variables={this.state}>
						{(updateRating, { loading, error }) => (
							<Form onSubmit={e => this.updateRating(e, updateRating)}>
								<Error error={error} />
								<fieldset disabled={loading} aria-busy={loading}>
									
								<label htmlFor="ratingSubject">
									Subject
									<input 
									type="text" 
									id="ratingSubject" 
									name="ratingSubject" 
									placeholder="Subject" 
									required 
									defaultValue={data.rating.ratingSubject}
									onChange={this.handleChange}
								/>
								</label>

								<label htmlFor="ratingStar">
									Rate this Book
									<input 
									type="number" 
									id="ratingStar" 
									name="ratingStar" 
									min="1" 
									max="5"
									placeholder="0-5 Star" 
									required 
									defaultValue={data.rating.ratingStar}
									onChange={this.handleChange}
								/>
								</label>

								<label htmlFor="ratingDescription">
									Description
									<textarea 
									id="ratingDescription" 
									name="ratingDescription"
									rows="3" 
									placeholder="Add your comment" 
									required 
									defaultValue={data.rating.ratingDescription}
									onChange={this.handleChange}
								/>
								</label>
									<button type="submit">Sav{loading ? 'ing' : 'e'} Changes</button>

								</fieldset>
							</Form>
						)}
						</Mutation>
					);
				}}
				</Query>
			</div>
		);
	}
}

export default UpdateRating;
export { UPDATE_RATING_MUTATION };