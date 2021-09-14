import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import Link from 'next/link';
import RatingTitle from './styles/RatingTitle';
import RatingStyles from './styles/RatingStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteRating from './DeleteRating';
import User from './User';
import StarRatingComponent from 'react-star-rating-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faStar,
} from '@fortawesome/free-solid-svg-icons';

export default class Rating extends Component {
	static propTypes = {
		rating: PropTypes.object.isRequired,
	};
	render() {
		const { rating } = this.props;
		return (
			<RatingStyles>
				<RatingTitle>
					<a>{rating.ratingSubject}</a>
				</RatingTitle>
				<div className="rating-wrapper">
					<StarRatingComponent 
			          name="rate2" 
			          editing={true}
			          renderStarIcon={() => <span><FontAwesomeIcon icon={faStar} /></span>}
			          starCount={5}
			          value={rating.ratingStar}
			        />
			        <span className="star-result">{rating.ratingStar}</span>
		        </div>

				<p>{rating.ratingDescription}</p>

				<User>
					{({ data: { me } }) => (
						<div>
							{!me && ( 
								<div>Sign in to see reviews</div>
							)}
							
							{me && ( 
								<>
								{me.permissions.includes("USER") && (
									<div className="buttonList">
										
										<Link href={{
											pathname: 'updateRating',
											query: { id: rating.id }
										}}>
											<a><button className="btn btn-success">Edit</button></a>
										</Link>
															
										<a><DeleteRating id={rating.id}>Delete Rating</DeleteRating></a>
									</div>
								)}
								</>
							)}
						</div>
					)}
          		</User>
			</RatingStyles>
		);
	}
}
