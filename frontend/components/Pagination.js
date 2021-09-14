import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Head from 'next/head';
import Link from 'next/link';
import PaginationStyles from './styles/PaginationStyles';
import { perPage } from '../config';
import User from './User';

const PAGINATION_QUERY = gql`
	query PAGINATION_QUERY {
		itemsConnection {
			aggregate {
				count
			}
		}
	}

`;

const Pagination = props => (
	
		<Query query={PAGINATION_QUERY}>
			{({data, loading, error}) => {
				if(loading) return <p>Loading...</p>;
				const count = data.itemsConnection.aggregate.count;
				const pages = Math.ceil(count / perPage);
				const page = props.page;
				return (
					<PaginationStyles data-test="pagination">
						<User>
							{({ data: { me } }) => (
							<>
								<head>
									<title>
										Stax Of Stories - {page} of {pages}
									</title>
								</head>
								<Link 
									prefetch={true}
									href={{
										pathname: 'items',
										query: { page: page - 1 }
									}}
								>
									<a className="prev" aria-disabled={page <= 1}>← Prev</a>
								</Link>
								<p>
									{props.page} of 
									<span className="totalPages"> {pages}</span>
									
								</p>
								{me && (
					      			<>

									{me.permissions.includes("ADMIN") && (
										<p>{count} Items Total</p>
									)}

									</>
								)}

								<Link 
									prefetch={true}
									href={{
										pathname: 'items',
										query: { page: page + 1 }
									}}
								>
									<a className="next" aria-disabled={page >= pages}>Next →</a>
								</Link>
							</>
							)}
          				</User>
					</PaginationStyles>
				);
			}}
		</Query>
);

export default Pagination;
export { PAGINATION_QUERY };