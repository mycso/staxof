import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import gql from 'graphql-tag';
import { Mutation, Query } from 'react-apollo';
import Error from './ErrorMessage';
import styled from 'styled-components';
import PriceTag from './styles/PriceTag';
import ItemStyles from './styles/ItemStyles';
import RatingStyles from './styles/RatingStyles';
import Rating from './Rating';
import Item from './Item';
// import Ratings from './Ratings';
// import PaginationReview from './PaginationReview';
import InfiniteScroll from "react-infinite-scroll-component";
import formatMoney from '../lib/formatMoney';
import Head from 'next/head';
import DeleteItem from './DeleteItem';
import User from './User';
import AddToCart from './AddToCart';
import CreateRating from './CreateRating';
import { formatDistance } from 'date-fns';
import { perPageReviews } from '../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faStar,
} from '@fortawesome/free-solid-svg-icons';
import StarRatingComponent from 'react-star-rating-component';
import Card from 'react-bootstrap/Card'
import {Container, Row, Col, Carousel} from 'react-bootstrap';

const SingleItemStyles = styled.div`
	.item-details{
		margin: 2rem auto;
		display: grid;
		grid-auto-columns: 1fr;
		grid-auto-flow: column;
		min-height: 800px;
		img{
			width: 100%;
			height: auto;
    		object-fit: contain;
    		max-width: 100%;
		  	transition: transform 0.3s ease-in-out;
		
			@media (max-width: 768px) {
      			height: auto;
    		}
		}
	 	
	 	img:hover {
		  transform: scale(1.2);
		}



		.carousel-item img[src=""] {
		  	display:none;

		}



		@media (max-width: 768px) {
      		grid-auto-flow: unset;
    	}
	}

	.carousel-item {
    	height: auto;
    }

    @media (max-width: 500px) {
		.carousel img {
		    width: 220%;
		    position: absolute;
		    left: 0;
		}

		.carousel-item {
		    height: auto;
		}
	}

	.nav-link {
    	display: block;
    	padding: 0;
    	font-size: 20px;
	}

	.details{
		margin: 3rem;
		font-size: 2rem;
		h2{
			color: ${props => props.theme.navyBlue};
			font-weight: bold;
		}
		p{
			font-size: 1.1rem;
		}

		@media (max-width: 768px) {
      		text-align: center;
      		margin: 0;
    	}

    	.dv-star-rating {
	    	display: inline !important;
	    	float: left;

	    	@media (max-width: 768px) {
	      		float: none;
	    	}

	    	.dv-star-rating-star {
	    		@media (max-width: 768px) {
	      			float: none !important;
	    		}
	  		}
	  	}

	  	.star-result {
	  		margin-left: 10px;
	  	}
	}

`;


const Center = styled.div`
	text-align: center;
`;

const ItemsList = styled.div`
	display: grid;
	grid-template-columns: auto auto auto auto;
	grid-gap: 60px;
	max-width: ${props => props.theme.maxWidth};
	margin: 0 auto;
	@media (max-width: 830px) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 0%;
		a {
    		font-size: 1.2rem;
		}
	}
	@media (max-width: 500px) {
		grid-template-columns: 1fr;
		grid-gap: 0%;
	}
`;

const ItemRatingsList = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 60px;
	max-width: ${props => props.theme.maxWidth};
	margin: 0 auto;
	text-align: left;

	p{
		font-size: 1rem;
	}

	@media (max-width: 830px) {
		grid-template-columns: 1fr;
		grid-gap: 0%;

		p {
    		font-size: 0.95rem;
		}
		
		a {
    		font-size: 1.2rem;
		}
	}
	@media (max-width: 500px) {
		grid-template-columns: 1fr;
		grid-gap: 0%;
	}
`;

const ALL_ITEMS_QUERY = gql`
	query ALL_ITEMS_QUERY($skip: Int = 2, $first: Int = 4, $searchTerm: String = "A", $searchTerm2: String = "P") {
    	items(first: $first, skip: $skip, orderBy: createdAt_DESC, 
    	  where: { 
		    OR: [{ 
		      title_gte: $searchTerm
		    }, {
		      author_gte: $searchTerm2
		    }],
		  }) {
			id
			title
			price
			description
			image
			largeImage
			author
			ageRange
			inStock
		}
	}
`;

const SINGLE_ITEM_QUERY = gql`
	query SINGLE_ITEM_QUERY($id: ID!, $skip: Int = 0, $first: Int = ${perPageReviews}) {
		item(where: { id: $id }) {
			id
			title
			description
			price
			largeImage
			largeImage2
			largeImage3
			largeImage4
			ageRange	
			author	
			inStock
			ratings (first: $first, skip: $skip, orderBy: createdAt_DESC ) {
				id
				ratingImage
      			ratingSubject
      			ratingDescription
      			ratingStar
      			createdAt
    		}
    		user{
      			id
    		}
		}
	}
`;

class SingleItem extends Component {
	state = {
		ratings: Array.from({ length: 50 }),
	    hasMore: true
  	};

	fetchMoreData = () => {
    if (this.state.ratings.length >= 500) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState({
        ratings: this.state.ratings.concat(Array.from({ length: 50 }))
      });
    }, 100);
  };
	
	componentDidMount() {
	  window.scrollTo(0, 0)
	}

	render() {

		return (
			<>
			<Query 
			query={SINGLE_ITEM_QUERY}
			variables={{
				id: this.props.id,
				skip: this.props.page * perPageReviews - perPageReviews,
			}}
			>
				{({ error, loading, data }) => {
					if (error) return <Error error={error} />;
					if (loading) return <p>Loading...</p>;
					if (!data.item) return <p>No Item Found! for {this.props.id}</p>;

					const item = data.item;

						return (
							<SingleItemStyles>
									<Head>
										<title>Stax Of Stories - {item.title}</title>
									</Head>
									<div className="item-details">
										<Carousel>
										  {item.largeImage.length < 1 && (
										  	<Carousel.Item>
										    	<p>No Image</p>
										    </Carousel.Item>
										  )}
										  
										  {item.largeImage.length > 1 && (
										  <Carousel.Item>
										    <img src={item.largeImage} alt={item.title} />
										  </Carousel.Item>
										  )}

										  {item.largeImage2.length < 1 && (
										    <Carousel.Item>
										    	<p>No Image</p>
										    </Carousel.Item>
										  )}

										  {item.largeImage2.length > 1 && (
										  <Carousel.Item>
										    <img src={item.largeImage2} alt={item.title} />
										  </Carousel.Item>
										  )}

										  {item.largeImage3.length < 1 && (
										  	<Carousel.Item>
										    	<p>No Image</p>
										    </Carousel.Item>
										  )}

										  {item.largeImage3.length > 1 && (
										   <Carousel.Item>
										    <img src={item.largeImage3} alt={item.title} />
										  </Carousel.Item>
										  )}

										  {item.largeImage4.length < 1 && (
										    <Carousel.Item>
										    	<p>No Image</p>
										    </Carousel.Item>
										  )}

										  {item.largeImage4.length > 1 && (
										   <Carousel.Item>
										    <img src={item.largeImage4} alt={item.title} />
										  </Carousel.Item>
										  )}
										</Carousel>

										{/*<img src={item.largeImage} alt={item.title} />
										<img src={item.largeImage2} alt={item.title} />
										<img src={item.largeImage3} alt={item.title} />
										<img src={item.largeImage4} alt={item.title} />*/}
										<div className="details">
											<h2 className="p-1">{item.title}</h2>

											{/*{item.ratings.map(rating => (*/}
												<h4>
													<StarRatingComponent 
											          name="rate2" 
											          editing={true}
											          renderStarIcon={() => <span><FontAwesomeIcon icon={faStar} /></span>}
											          starCount={1}
											          value={item.ratings.length}
											        />
													<span className="star-result">
												        ({item.ratings.length}) {(item.ratings.length) === 1 ? 'Review' : 'Reviews'}
											        </span>
												</h4>
											{/*}))}*/}

											
											<p className="p-1 mt-1">By {item.author}</p>
											{
												item.inStock < 6 && item.inStock > 0 ? <p className="font-weight-bold p-1" style={{color: item.inStock < 6 && item.inStock > 0 ? "red" : "#8dc63f"}}>Low stock</p> : '' 
											}
											{
												item.inStock < 1 ? <p className="font-weight-bold p-1" style={{color: item.inStock < 1 ? "red" : "#8dc63f"}}>Back in stock soon!</p> : '' 
											}
											{/*<PriceTag>{item.inStock} In Stock</PriceTag>*/}
											<p className="p-1 text-content">{item.description}</p>
											{/*<PriceTag>{formatMoney(item.price + item.deliveryCost)}</PriceTag>*/}
											<PriceTag>{formatMoney(item.price)}</PriceTag>
											<ItemStyles>
												<User>
													{({ data: { me } }) => (
														<div>
															{!me && ( 
																<div className="buttonList">
																	<a prefetch="true" href="/signup"><button className="cart-btn">Buy Item</button></a>
																</div>
															)}

															{me && (
																<>
																{
																	item.inStock > 1 ? 
																	<div className="buttonList">
																		<AddToCart id={item.id} />
																	</div> : '' 
																}

																{me.permissions.includes("ADMIN") && (
																	<div className="buttonList">
																		
																			<Link href={{
																				pathname: 'update',
																				query: { id: item.id }
																			}}>
																				<a><button className="btn btn-success">Edit</button></a>
																			</Link>

																			<a><DeleteItem id={item.id}>Delete This Item</DeleteItem></a>

																	</div>	
																)}
																</>
															)}
														</div>
														
													)}
								          		</User>
								          	</ItemStyles>
										</div>
									</div>
									
									<h2>Write a review</h2>
							        <Center>
							        	<CreateRating id={this.props.id} />
											<br /> 
											
							        		{item.ratings.length < 1 && (
							        			<p>Be the first to write a review</p>
							        		)}

											{item.ratings.length > 0 && (
												<ItemRatingsList>
													<InfiniteScroll
											          dataLength={this.state.ratings.length}
											          next={this.fetchMoreData}
											          hasMore={this.state.hasMore}
											          loader={<h5></h5>}
											          height={500}
											          endMessage={
											            <p style={{ textAlign: "center" }}>
											              <b>You have seen all the reviews on this item</b>
											            </p>
											          }
											        >

											          {item.ratings.map(rating => (
														<div>
															<Rating rating={rating} key={rating.id} />
															<RatingStyles><p>{formatDistance(rating.createdAt, new Date())} ago</p></RatingStyles>
														</div>
													  ))}
													
											        </InfiniteScroll>
												</ItemRatingsList>
											)}
									</Center>
							</SingleItemStyles>

						);
					}}
				</Query>

				<Query 
					query={ALL_ITEMS_QUERY}
					variables={{
						id: this.props.id,
					}}
				>
					{({ data, error, loading }) => {
						if(loading) return <p>loading...</p>
						if(error) return <p>Error: {error.message}</p>
						if (!data) return <p>No Items Found!</p>;
						
						const items = Math.floor(Math.random() * data.items.length);

						// const random = Math.floor(Math.random() * data.items.length);

						// const itemsRandom = (random, items[random]);

						// console.log(random, items[random]);

						return (
							<>
								<br/>

								<hr/>

								<h2>Others you may like</h2>

								<Center>
									<ItemsList>{data.items.map(item => <Item item={item} key={item.id} />)}</ItemsList>
								</Center>
							</>
						);
					}}
				</Query>
				{/*<Center>
					<PaginationReview page={this.props.page} />
				</Center>*/}
				</>
			);			

	}
}

export default SingleItem;
export { SINGLE_ITEM_QUERY };