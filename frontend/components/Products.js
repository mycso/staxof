import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import Product from '../components/Product';
import gql from "graphql-tag";
import { perPage } from '../config';

export const ALL_PRODUCTS_QUERY = gql`
    query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
        allProducts(first: $first, skip: $skip){
            id
            name
            price
            ageRange
            author
            inStock
            photo {
                id
                image {
                publicUrlTransformed
                }
            }
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

export default function Products ({ page }) {
    const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
        variables: {
            skip: page * perPage - perPage,
            first: perPage,
        },
    });
    console.log( data, error, loading )
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <Center>
            <ItemsList>
                {data.allProducts.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </ItemsList>
        </Center>
    );
}