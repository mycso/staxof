import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Item from './Item';
import Pagination from './Pagination';
import { perPage } from '../config'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faArrowUp,
} from '@fortawesome/free-solid-svg-icons';

import { ScrollTo } from "react-scroll-to"

const ALL_ITEMS_QUERY = gql`
	query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    	items(first: $first, skip: $skip, orderBy: createdAt_DESC) {
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

const Center = styled.div`
	text-align: center;

	.buttonup {
	    width: auto;
	    color: white;
	    background-color: ${props => props.theme.orange};
	    border: 0;
	    border-radius: ${props => props.theme.roundedCorner} !important;
	    font-size: 1rem;
	    padding: 0.9rem 1.2rem;
  	}
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

class Items extends Component {
	render() {
		return (
			<Center>
				<Query 
			 	 query={ALL_ITEMS_QUERY}
				 variables={{
				 	skip: this.props.page * perPage - perPage,
				 }}
				>
					{({ data, error, loading }) => {
						if(loading) return <p>loading...</p>
						if(error) return <p>Error: {error.message}</p>
						if (!data) return <p>No Items Found!</p>;
						return (
							<ItemsList>{data.items.map(item => <Item item={item} key={item.id} />)}</ItemsList>
						);
					}}
				</Query>
				<Pagination page={this.props.page} />
				<br />
		           <ScrollTo>
		            {({ scrollTo }) => (
		              <a onClick={() => scrollTo({ x: 20, y: 0, smooth: true })}><button className="buttonup btn btn-outline-light rounded-corner"><FontAwesomeIcon icon={faArrowUp} /></button></a>
		            )}
		           </ScrollTo>
		      	<br />
			</Center>
		);
	}
}

export default Items;
export { ALL_ITEMS_QUERY };