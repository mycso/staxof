import React from 'react';
import { Query } from 'react-apollo';
import { formatDistance } from 'date-fns';
import Link from 'next/link';
import styled from 'styled-components';
import gql from 'graphql-tag';
import Error from './ErrorMessage';
import formatMoney from '../lib/formatMoney';
import OrderItemStyles from './styles/OrderItemStyles';
import SubHeader from '../components/SubHeader';
	
const USER_ORDERS_QUERY = gql`
	query USER_ORDERS_QUERY {
		orders(orderBy: createdAt_DESC) {
			id
			total
			createdAt
			items {
				id
				title
				price
				description
				quantity
				image
			}
			user {
				id
			}
		}
	}
`;

const OrderUl = styled.ul`
	display: grid;
	grip-gap: 4rem;
	grid-template-columns: repeat(auto-fit,minmax(40%, 1fr));
	padding: 0px;


	h2 {
		padding: 0 15px 0 15px;
	}
`;

const OrderUlWrapper = styled.ul`
	min-height: 720px;
	padding: 0px;
`;

class OrderList extends React.Component {
	render() {
		return (
		<Query query={USER_ORDERS_QUERY}>
			{({ data: { orders }, error, loading }) => {
				if (error) return <Error error={error} />;
				if (loading) return <p>Loading...</p>;
				console.log(orders);
				return ( 
					<div>
						<SubHeader />
						<h2 className="mx-5 pt-5">You have {orders.length} orders</h2>
						<OrderUlWrapper>
						<OrderUl>
						{orders.map(order => (
							<OrderItemStyles key={order.id}>
								<Link href={{
									pathname: '/order',
									query: { id: order.id }
								}}>
								<a>
									<div className="order-meta">
										<p>{order.items.reduce((a, b) => a + b.quantity, 0)} Items</p>
										<p>{order.items.length} Products</p>
										<p>{formatDistance(order.createdAt, new Date())} ago</p>
										<p>{formatMoney(order.total)}</p>
									</div>
									<div className="images">
										{order.items.map(item => (
											<img key={item.id} src={item.image} alt={item.title} />
										))}
									</div>
								</a>
								</Link>
							</OrderItemStyles>
						))}
						</OrderUl>
						</OrderUlWrapper>
					</div>
				)
			}}
		</Query>
		);
	}
}

export default OrderList