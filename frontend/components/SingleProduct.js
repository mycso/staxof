import styled from 'styled-components';
import gql from "graphql-tag";
import { useQuery } from '@apollo/client';
import DisplayError from "./ErrorMessage";
import Head from 'next/head';
import SingleItemStyles from './styles/SingleItemStyles';
import ReactImageMagnify from 'react-image-magnify';
import SliderImage from 'react-zoom-slider';

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

const SINGLE_ITEM_QUERY = gql`
    query SINGLE_ITEM_QUERY ($id: ID!){
        Product(where: { id: $id }) {
            name
            price
            description
            id
            photo {
                altText
                image {
                    publicUrlTransformed
                }
            }
            photo2 {
                altText
                image {
                    publicUrlTransformed
                }
            }
            photo3 {
                altText
                image {
                    publicUrlTransformed
                }
            }

            photo4 {
                altText
                image {
                    publicUrlTransformed
                }
            }
        }
        
        # allProducts (where: {
        #   name_contains_i: "Yeti"
        # }) {
        #   name
        #   price
        #   description
        # }
    }

`;

export default function SingleProduct({ id }) {
    const { data, loading, error } = useQuery
        (SINGLE_ITEM_QUERY, {
            variables: {
                id,
            },
        });
    if (loading) return <p>Loading...</p>;
    if (error) return <DisplayError error={error} />; 
    const { Product } = data;
    console.log(Product)

    if (!Product.photo || !Product.photo2 || !Product.photo3 || !Product.photo4){
        return <div>Please upload a minimum of 4 images for this product...</div>;
    }

    const dataImage = [
        {
            image: Product.photo.image.publicUrlTransformed,
            text: Product.photo.altText
        },
        {
            image: Product.photo2.image.publicUrlTransformed,
            text: Product.photo2.altText
        },
        {
            image: Product.photo3.image.publicUrlTransformed,
            text: Product.photo3.altText
        },
        {
            image: Product.photo4.image.publicUrlTransformed,
            text: Product.photo4.altText
        },
    ];

    if (dataImage.length > 4){
        return <div>Please upload a minimum of 4 images for this product...</div>;
    }
    
    return (
        <SingleItemStyles>
            <Head>
                <title>Stax Of Stories - {Product.name}</title>
            </Head>
            <div className="item-details">


                <SliderImage 
                    data={dataImage} 
                    width="500px" 
                    showDescription={false} 
                    direction="right" 
                />

                <div className="details">
                    <h2>{Product.name}</h2>
                    <p>{Product.description}</p>
                </div>
            </div>
        </SingleItemStyles>
    );
}