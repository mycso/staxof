import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { format } from 'date-fns';
import Head from 'next/head';
import gql from 'graphql-tag';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';
import OrderStyles from './styles/OrderStyles';
import SubHeader from '../components/SubHeader';
// import calcTotalDeliveryPrice from '../lib/calcTotalDeliveryPrice';
import calcTotalPrice from '../lib/calcTotalPrice';

const CURRENT_USER_QUERY = gql`
	query {
		me {
			id
			email
			name
			permissions
			cart {
				id
				quantity
				item {
					id
					price
					image
					title
					description
				}
			}

			order {
				id
			}
		}
	}
`;

const SINGLE_ORDER_QUERY = gql`
	query SINGLE_ORDER_QUERY($id: ID!) {
		order(id: $id) {
			id
			charge
			total
			createdAt
			user {
				id
			}
			items {
				id
				title
				description
				price
				image
				quantity
			}
			
		}
	}
`;

class Order extends React.Component {
	static propTypes = {
		id: PropTypes.string.isRequired,
	};
	render() {
		return (
			<Query query={SINGLE_ORDER_QUERY} variables={{ id: this.props.id }}>
				{({ data, error, loading }) => {
					if (error) return <Error error={error} />;
					if (loading) return <p>Loading</p>;
					const order = data.order;	

					// const deliveryCost = order.items.reduce((item, deliver) => item + deliver.deliveryCost, 0);

					// const deliveryQuantity = order.items.reduce((item, deliver) => item + deliver.quantity, 0);

					// console.log(deliveryCost * deliveryQuantity / 2);
					
					if(order.items.length === 1){
						return (
							<div>
								<SubHeader />
								<OrderStyles data-test="order">
									<Head>
										<title>Stax Of Stories - Order {order.id}</title>
									</Head>
									<p>
										<span>Order ID:</span> 
										<span>{this.props.id}</span>
									</p>
									<p>
										<span>Charge</span>
										<span>{order.charge}</span>
									</p>
									<p>
										<span>Date</span>
										<span>{format(order.createdAt, 'MMMM d, YYYY h:mm a')}</span>
									</p>
				 					<p>
										<span>Order Total</span>
										<span>{formatMoney(order.total)} (FREE Delivery)
										{/*(incl Delivery cost - {formatMoney(deliveryCost * deliveryQuantity)})*/}
										</span>
									</p>
									<p>
										<span>Item Count</span>
										<span>{order.items.length}</span>
									</p>
									<div className="items">
										{order.items.map(item => (
											<div className="order-item" key={item.id}>
												<img src={item.image} alt={item.title} />
												<div className="item-details">
													<h2>{item.title}</h2>
													<p>Qty: {item.quantity}</p>
													<p>Each: {formatMoney(item.price)}</p>
													{/*<p>Delivery Cost: {formatMoney(item.deliveryCost * item.quantity)}</p>*/}
													{/*<p>Sub Total: {formatMoney(item.quantity * item.price + item.deliveryCost)}</p>*/}
													<p>Sub Total: {formatMoney(item.quantity * item.price)}</p>
													<p>{item.description}</p>
												</div>
											</div>
										))}
									</div>
								</OrderStyles>
							</div>

						);
					}

					if(order.items.length > 1){
						return (
							<div>
								<SubHeader />
								<OrderStyles data-test="order">
									<Head>
										<title>Stax Of Stories - Order {order.id}</title>
									</Head>
									<p>
										<span>Order ID:</span> 
										<span>{this.props.id}</span>
									</p>
									<p>
										<span>Charge</span>
										<span>{order.charge}</span>
									</p>
									<p>
										<span>Date</span>
										<span>{format(order.createdAt, 'MMMM d, YYYY h:mm a')}</span>
									</p>

									
				 					<p>
										<span>Order Total</span>
										<span>{formatMoney(order.total)} (FREE Delivery)
										{/*(incl Delivery cost - {formatMoney(deliveryCost * deliveryQuantity / 2)})*/}
										</span>
									</p>
									
									<p>
										<span>Item Count</span>
										<span>{order.items.length}</span>
									</p>
									<div className="items">
										{order.items.map(item => (
											<div className="order-item" key={item.id}>
												<img src={item.image} alt={item.title} />
												<div className="item-details">
													<h2>{item.title}</h2>
													<p>Qty: {item.quantity}</p>
													<p>Each: {formatMoney(item.price)}</p>
													{/*<p>Delivery Cost: {formatMoney(item.deliveryCost * item.quantity)}</p>*/}
													{/*<p>Sub Total: {formatMoney(item.quantity * item.price + item.deliveryCost)}</p>*/}
													<p>Sub Total: {formatMoney(item.quantity * item.price)}</p>
													<p>{item.description}</p>
												</div>
											</div>
										))}
									</div>
								</OrderStyles>
							</div>

						);
					}

				}}
				
			</Query>
		);
	}
}

export default Order;
