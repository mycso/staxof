import { useQuery, useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import styled from 'styled-components';
import { ALL_PRODUCTS_QUERY } from './Products';
import Form from './styles/Form';
import DisplayError from './ErrorMessage';
import Router from 'next/router';

const SINGLE_PRODUCT_QUERY = gql`
    query SINGLE_PRODUCT_QUERY($id: ID!) {
        Product(where: { id: $id }) {
            id
            name
            description
            inStock
            ageRange
            author
            price   
            photo {
                id
                image {
                publicUrlTransformed
                }
            }
            photo2 {
                id
                image {
                publicUrlTransformed
                }
            }
            photo3 {
                id
                image {
                publicUrlTransformed
                }
            }
            photo4 {
                id
                image {
                publicUrlTransformed
                }
            }
        }
    }
`;

const UPDATE_PRODUCT_MUTATION = gql`
    mutation UPDATE_PRODUCT_MUTATION (
        $id: ID!
        $name: String!
        $ageRange: String!
        $inStock: String!
        $author: String!
        $price: Int!
        $image: Upload
        $image2: Upload
        $image3: Upload
        $image4: Upload
        $description: String!
    ){
        updateProduct(
            id: $id
            data: {
                name: $name
                ageRange: $ageRange
                inStock: $inStock
                author: $author
                price: $price
                description: $description
                status: "AVAILABLE"
                photo: { create: { image: $image, altText: $name } }
                photo2: { create: { image: $image2, altText: $name } }
                photo3: { create: { image: $image3, altText: $name } }
                photo4: { create: { image: $image4, altText: $name } }
            }
        ) {
            id
            name
            description
            inStock
            ageRange
            author
            price
        }
    }
`;

const StyledUploadFileBtn = styled.div`
label{
  padding:5px 10px;
  background:#efefef;
  position:relative;
  color:#606060;
  border-radius:2px;
  text-align:center;
  cursor:pointer
}

.upload-btn-file {
    position: absolute;
    z-index: 1000;
    opacity: 0;
    cursor: pointer;
    background:#efefef;
    color:#606060;
    right: 0;
    top: 0;
    height: 100%;
    font-size: 24px;
    width: 100%;
    cursor:pointer
}
`;

export default function UpdateProduct ({ id }) {

    const { loading, error, data } = useQuery
    (SINGLE_PRODUCT_QUERY, {
        variables: { id }
    });

    const [updateProduct, { data: updateData, error: updateError, loading: updateLoading }] = useMutation
    (UPDATE_PRODUCT_MUTATION);

    const { inputs, handleChange, clearForm, resetForm } = useForm(data?.Product);

    console.log(inputs);

    if (loading) return <p>loading...</p>;

    return (
        <Form 
            onSubmit={async (e) => {
                e.preventDefault();
                const res = await updateProduct({
                    variables: {
                        id,
                        name: inputs.name,
                        description: inputs.description,
                        price: inputs.price,    
                        inStock: inputs.inStock,
                        ageRange: inputs.ageRange,
                        author: inputs.author,
                        image: inputs.image, 
                        image2: inputs.image2,      
                        image3: inputs.image3,  
                        image4: inputs.image4,                      
                    },
                }).catch(console.error);
                console.log(res);
                //Submit the inputfield to the backend
                // const res = await createProduct();
                // clearForm();
                Router.push({ pathname: `/`})
                //     pathname: `/product/${res.data.createProduct.id}`,
                // });
            }}
        >
            <DisplayError error={error || updateError} />
            <fieldset disabled={updateLoading} aria-busy={updateLoading}>
                <StyledUploadFileBtn>
                    <label htmlFor="image">

                        {inputs?.photo?.image?.publicUrlTransformed && (
                            <img 
                                type="file" 
                                id="image" 
                                name="image"
                                width="200"    
                                src={inputs?.photo?.image?.publicUrlTransformed} 
                                alt={inputs?.photo?.name} 
                            />
                        )}
                    
                        {!inputs.image && (
                            <p>Upload Book Image 1 Here</p>
                        )}

                        {inputs.image && (
                            <p>{inputs.image.name}</p>
                        )}

                        <input 
                            type="file" 
                            id="image" 
                            name="image"
                            className="upload-btn-file"
                            required
                            onChange={handleChange}
                            src={inputs?.photo?.image?.publicUrlTransformed}
                            alt={inputs?.image?.name}
                        />

                    </label>
                </StyledUploadFileBtn>
                <StyledUploadFileBtn>
                    <label htmlFor="image2">

                        {inputs?.photo2?.image?.publicUrlTransformed && (
                            <img 
                                type="file" 
                                id="image2" 
                                name="image2"
                                width="200"    
                                src={inputs?.photo2?.image?.publicUrlTransformed} 
                                alt={inputs?.photo2?.name} 
                            />
                        )}

                        {!inputs.image2 && (
                            <p>Upload Book Image 2 Here</p>
                        )}

                        {inputs.image2 && (
                            <p>{inputs.image2.name}</p>
                        )}

                        <input 
                            type="file" 
                            id="image2" 
                            name="image2"
                            className="upload-btn-file"
                            required
                            onChange={handleChange}
                            src={inputs?.photo2?.image2?.publicUrlTransformed}
                            alt={inputs?.image2?.name}
                        />

                    </label>
                </StyledUploadFileBtn>
                <StyledUploadFileBtn>
                    <label htmlFor="image3">

                        {inputs?.photo3?.image?.publicUrlTransformed && (
                            <img 
                                type="file" 
                                id="image3" 
                                name="image3"
                                width="200"    
                                src={inputs?.photo3?.image?.publicUrlTransformed} 
                                alt={inputs?.photo3?.name} 
                            />
                        )}

                        {!inputs.image3 && (
                            <p>Upload Book Image 3 Here</p>
                        )}

                        {inputs.image3 && (
                            <p>{inputs.image3.name}</p>
                        )}

                        <input 
                            type="file" 
                            id="image3" 
                            name="image3"
                            className="upload-btn-file"
                            required
                            onChange={handleChange}
                            src={inputs?.photo3?.image3?.publicUrlTransformed}
                            alt={inputs?.image3?.name}
                        />

                    </label>
                </StyledUploadFileBtn>
                <StyledUploadFileBtn>
                    <label htmlFor="image">

                        {inputs?.photo4?.image?.publicUrlTransformed && (
                            <img 
                                type="file" 
                                id="image4" 
                                name="image4"
                                width="200"    
                                src={inputs?.photo4?.image?.publicUrlTransformed} 
                                alt={inputs?.photo4?.name} 
                            />
                        )}
                        
                        {!inputs.image4 && (
                            <p>Upload Book Image 4 Here</p>
                        )}

                        {inputs.image4 && (
                            <p>{inputs.image4.name}</p>
                        )}
                        
                        <input 
                            type="file" 
                            id="image4" 
                            name="image4"
                            className="upload-btn-file"
                            required
                            onChange={handleChange}
                            src={inputs?.photo4?.image4?.publicUrlTransformed}
                            alt={inputs?.image4?.name}
                        />
                    
                    </label>
                </StyledUploadFileBtn>
                <label htmlFor="name">
                   Book Title
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Book Title"
                        required
                        value={inputs.name}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="author">
                    Book Author
                    <input 
                        type="text" 
                        id="author" 
                        name="author" 
                        placeholder="Book Author"
                        required
                        value={inputs.author}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="price">
                    Price
                    <input 
                        type="number" 
                        id="price" 
                        name="price" 
                        placeholder="Price - (e.g 499 = £4.99)"
                        required
                        value={inputs.price}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="ageRange">
                    In Stock
                    <input 
                        type="text" 
                        id="inStock" 
                        name="inStock" 
                        placeholder="In Stock - (e.g Only 5 left)"
                        required
                        value={inputs.inStock}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="ageRange">
                    Age Range
                    <input 
                        type="text" 
                        id="ageRange" 
                        name="ageRange" 
                        placeholder="Enter an Age Range"
                        required
                        value={inputs.ageRange}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="description">
                    Description
                    <textarea 
                        id="description" 
                        name="description" 
                        rows="10"
                        placeholder="Enter A Description" 
                        value={inputs.description}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Update Product</button>
            </fieldset>
        </Form>
    );
}