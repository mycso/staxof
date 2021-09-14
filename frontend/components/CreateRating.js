import React, { Component } from 'react';
import styled from 'styled-components';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router'; 
import Item from './Item';
import Form from './styles/Form';
import ItemStyles from './styles/ItemStyles';
import formatMoney from '../lib/formatMoney';
import StarRatingComponent from 'react-star-rating-component';
import SubHeader from './SubHeader';
import Error from './ErrorMessage';
import NProgress from 'nprogress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faStar,
} from '@fortawesome/free-solid-svg-icons';
import { SINGLE_ITEM_QUERY } from './SingleItem';

const StyledRatingWrapper = styled.div`
label .dv-star-rating .dv-star-rating-star {
    display: inline-block;
    padding: 5px;
    background: transparent;
    float: left;
}
`;

const CREATE_RATING_MUTATION = gql`
    mutation CREATE_RATING_MUTATION (
        $ratingSubject: String! 
        $ratingImage: String!
        $ratingDescription: String!
        $ratingStar: Int!
        $itemId: ID!
    ){
      createRating (
            ratingSubject: $ratingSubject
            ratingImage: $ratingImage
            ratingDescription: $ratingDescription
            ratingStar: $ratingStar
            itemId: $itemId              
      ) {
        ratingSubject
        ratingImage
        ratingDescription
        ratingStar
          item {
            id
          }
      }
    }
`;

class CreateRating extends React.Component {

	state = {
	      	ratingSubject: '',
	      	ratingImage: '',
	      	ratingDescription: '',
	      	ratingStar: 1,
	      	itemId: this.props.id,
	};

	onStarClick(nextValue, prevValue, name) {
    	this.setState({ratingStar: nextValue});
  	}

	handleChange = e => {
		const { name, type, value } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};

	uploadFile = async e => {

		const files = e.target.files;
		const data = new FormData();
		data.append('file', files[0]);
		data.append('upload_preset', 'staxxxx');
		const res = await fetch('https://api.cloudinary.com/v1_1/dcnxv4ksy/image/upload', {
			method: 'POST',
			body: data,
		});
		const file = await res.json();
		
		this.setState({
			ratingImage: file.secure_url,
		});
	};

	render() {
		const { ratingStar } = this.state;
		return (

			<Mutation mutation={CREATE_RATING_MUTATION} variables={this.state}>
			{(createRating, { loading, error }) => (
				<Form 
					className="mw-100"
					onSubmit={async e => {
						// Stop the form from submitting
						e.preventDefault();
						// call the mutation
						const res = await createRating();
						// change them to the single item page;
						window.location.reload();
					}}
				>
					<Error error={error} />
					<fieldset disabled={loading} aria-busy={loading}>
					<StyledRatingWrapper>
						<label htmlFor="ratingSubject">
							<input 
							type="text" 
							id="ratingSubject" 
							name="ratingSubject" 
							placeholder="Review Title" 
							required 
							value={this.state.ratingSubject}
							onChange={this.handleChange}
						/>
						</label>

						<label htmlFor="ratingDescription">
							<textarea 
							type="text" 
							id="ratingDescription" 
							name="ratingDescription" 
							rows="3"
							placeholder="Review Comments" 
							required 
							defaultValue={this.state.ratingDescription}
							onChange={this.handleChange}
						/>
						</label>

						<label>
						<StarRatingComponent 
				          name="rate1" 
				          starCount={5}
				          editing={true}
				          renderStarIcon={() => <span><FontAwesomeIcon icon={faStar} /></span>}
				          value={ratingStar}
				          onStarClick={this.onStarClick.bind(this)}
				        />
				        </label>

						<label htmlFor="ratingStar">
							<input 
							type="number" 
							id="ratingStar" 
							name="ratingStar" 
							placeholder="Review Stars 1-5" 
							min="1" 
							max="5"
							required 
							value={this.state.ratingStar}
							onChange={this.handleChange}
						/>
						</label>
						<button type="submit">Add Review</button>
					</StyledRatingWrapper>
					</fieldset>
				</Form>
			)}
			</Mutation>
			
		);
	}
}

export default CreateRating;
export { CREATE_RATING_MUTATION };