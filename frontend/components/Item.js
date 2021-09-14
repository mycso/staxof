import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteItem from './DeleteItem';
import User from './User';
import AddToCart from './AddToCart';
import MinusFromCart from './MinusFromCart';

export default class Item extends Component {
	static propTypes = {
		item: PropTypes.object.isRequired,
	};
	render() {
		const { item } = this.props;

		return (
			<ItemStyles>
				<Link 
					href={{
						pathname: '/item',
						query: { id: item.id },
					}}
				>
				{item.image && <img src={item.image} alt={item.title} />}
				</Link>

				<Title>
					<Link 
						href={{
							pathname: '/item',
							query: { id: item.id },
						}}
					>
						<a>{item.title}</a>
					</Link>
				</Title>
				<p>By {item.author}</p>
				<p>Age {item.ageRange}</p>
				{
					item.inStock < 6 && item.inStock > 0 ? <p className="font-weight-bold" style={{color: item.inStock < 6 && item.inStock > 0 ? "red" : "#8dc63f"}}>Low stock</p> : '' 
				}
				{
					item.inStock < 1 ? <p className="font-weight-bold" style={{color: item.inStock < 1 ? "red" : "#8dc63f"}}>Back in stock soon!</p> : '' 
				}

				
				{/*<p style={{color: item.inStock < 11 ? "red" : "#8dc63f"}}>{item.inStock} In Stock</p>*/}
				{/*<p className="orange-text">{item.inStock}</p>*/}
				{/*<PriceTag>{formatMoney(item.price + item.deliveryCost)}</PriceTag>*/}
				<PriceTag>{formatMoney(item.price)}</PriceTag>

				{/*				
				
				{
					item.inStock > 1 ? 
					<div className="buttonList">
						<AddToCart id={item.id} />
					</div> : '' 
				}
					
				*/}

				<User>
					{({ data: { me } }) => (
						<div>
							{!me && ( 
								<>
									<div className="buttonList">
										<a href="/signup" prefetch="true"><button className="cart-btn">Buy Item</button></a>
									</div>
								</>
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
										
										<Link 
											href={{
												pathname: 'update',
												query: { id: item.id }
											}} 
											prefetch="true"
										>
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
		);
	}
}
