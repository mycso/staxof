import React, { Component } from 'react';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router'; 
import Form from './styles/Form';
import ItemStyles from './styles/ItemStyles';
import formatMoney from '../lib/formatMoney';
import SubHeader from '../components/SubHeader';
import Error from './ErrorMessage';
import NProgress from 'nprogress';
import { ALL_ITEMS_QUERY } from './Items';

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

const CREATE_ITEM_MUTATION = gql`
	mutation CREATE_ITEM_MUTATION (
		$title: String!
		$description: String!
		$price: Int!
		$inStock: String!
		$image: String
		$image2: String
		$image3: String
		$image4: String
		$largeImage: String
		$largeImage2: String
		$largeImage3: String
		$largeImage4: String
		$author: String
		$ageRange: String
	){
		createItem(
			title: $title
			description: $description
			price: $price
			inStock: $inStock
			image: $image
			image2: $image2
			image3: $image3
			image4: $image4
			largeImage: $largeImage
			largeImage2: $largeImage2
			largeImage3: $largeImage3
			largeImage4: $largeImage4
			author: $author
			ageRange: $ageRange
		) {
			id
		}
	}
`;

class CreateItem extends Component {

	state = {
		title: '',
		author: '',
		description: '',
		image: '',
		image2: '',
		image3: '',
		image4: '',
		largeImage: '',
		largeImage2: '',
		largeImage3: '',
		largeImage4: '',
		price: '',
		deliveryCost: '',
		inStock: '',
		ageRange: '',
	};
	handleChange = e => {
		const { name, type, value } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};


	uploadFile = async e => {
		console.log('uploading file...');

		const files = e.target.files;
		const data = new FormData();
		data.append('file', files[0]);
		data.append('upload_preset', 'staxxxx');

		const res = await fetch('https://api.cloudinary.com/v1_1/dcnxv4ksy/image/upload', {
			method: 'POST',
			body: data,
		});
		const file = await res.json();
		
		console.log(file);
		this.setState({
			image: file.secure_url,
			largeImage: file.eager[0].secure_url,
		});
	};

	uploadFile2 = async e => {
		console.log('uploading file...');

		const files = e.target.files;
		const data = new FormData();
		data.append('file', files[0]);
		data.append('upload_preset', 'staxxxx');

		const res = await fetch('https://api.cloudinary.com/v1_1/dcnxv4ksy/image/upload', {
			method: 'POST',
			body: data,
		});
		const file = await res.json();
		
		console.log(file);
		this.setState({
			image2: file.secure_url,
			largeImage2: file.eager[0].secure_url,
		});
	};

	uploadFile3 = async e => {
		console.log('uploading file...');

		const files = e.target.files;
		const data = new FormData();
		data.append('file', files[0]);
		data.append('upload_preset', 'staxxxx');

		const res = await fetch('https://api.cloudinary.com/v1_1/dcnxv4ksy/image/upload', {
			method: 'POST',
			body: data,
		});
		const file = await res.json();
		
		console.log(file);
		this.setState({
			image3: file.secure_url,
			largeImage3: file.eager[0].secure_url,
		});
	};

	uploadFile4 = async e => {
		console.log('uploading file...');

		const files = e.target.files;
		const data = new FormData();
		data.append('file', files[0]);
		data.append('upload_preset', 'staxxxx');

		const res = await fetch('https://api.cloudinary.com/v1_1/dcnxv4ksy/image/upload', {
			method: 'POST',
			body: data,
		});
		const file = await res.json();
		
		console.log(file);
		this.setState({
			image4: file.secure_url,
			largeImage4: file.eager[0].secure_url,
		});
	};

	render() {
		return (
			
				<div>
					<SubHeader />
					<Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state} refetchQueries={[{ query: ALL_ITEMS_QUERY }]}>
					{(createItem, { loading, error }) => (
						<Form 
							data-test="form"
							onSubmit={async e => {
								// Stop the form from submitting
								e.preventDefault();
								// call the mutation
								const res = await createItem();
								// change them to the single item page
								console.log(res);
								Router.push({
									pathname: '/items',
								});
							}}
						>
							<Error error={error} />
							<fieldset disabled={loading} aria-busy={loading}>
								<StyledUploadFileBtn>
									<label htmlFor="file">
										<div>Upload an image for your book</div>
										<input 
										type="file" 
										id="file" 
										name="file" 
										placeholder="Upload an image"
										required 
										onChange={this.uploadFile}
										className="upload-btn-file"
									/>
									{this.state.image && <img width="200" src=
									{this.state.image} alt="Upload Preview" />}
									</label>
								</StyledUploadFileBtn>

								<StyledUploadFileBtn>
									<label htmlFor="file">
										<div>Upload a 2nd image for your book</div>
										<input 
										type="file" 
										id="file" 
										name="file" 
										placeholder="Upload an image" 
										onChange={this.uploadFile2}
										className="upload-btn-file"
									/>
									{this.state.image2 && <img width="200" src=
									{this.state.image2} alt="Upload Preview" />}
									</label>
								</StyledUploadFileBtn>

								<StyledUploadFileBtn>
									<label htmlFor="file">
										<div>Upload a 3rd image for your book</div>
										<input 
										type="file" 
										id="file" 
										name="file" 
										placeholder="Upload an image" 
										onChange={this.uploadFile3}
										className="upload-btn-file"
									/>
									{this.state.image3 && <img width="200" src=
									{this.state.image3} alt="Upload Preview" />}
									</label>
								</StyledUploadFileBtn>

								<StyledUploadFileBtn>
									<label htmlFor="file">
										<div>Upload a 4th image for your book</div>
										<input 
										type="file" 
										id="file" 
										name="file" 
										placeholder="Upload an image" 
										onChange={this.uploadFile4}
										className="upload-btn-file"
									/>
									{this.state.image4 && <img width="200" src=
									{this.state.image4} alt="Upload Preview" />}
									</label>
								</StyledUploadFileBtn>

								<label htmlFor="title">
									Title
									<input 
									type="text" 
									id="title" 
									name="title" 
									placeholder="Title" 
									required 
									value={this.state.title}
									onChange={this.handleChange}
								/>
								</label>

								<label htmlFor="author">
									Author
									<input 
									type="text" 
									id="author" 
									name="author" 
									placeholder="Book Author" 
									required 
									defaultValue={this.state.author}
									onChange={this.handleChange}
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
									value={this.state.price}
									onChange={this.handleChange}
								/>
								</label>

								{/*<label htmlFor="deliveryCost">
									Delivery Cost
									<input 
									type="number" 
									id="deliveryCost" 
									name="deliveryCost" 
									placeholder="Price - (e.g 499 = £4.99)" 
									required 
									value={this.state.deliveryCost}
									onChange={this.handleChange}
								/>
								</label>*/}

								<label htmlFor="inStock">
									Currently In Stock
									<input 
									type="text" 
									id="inStock" 
									name="inStock" 
									placeholder="In Stock - (e.g Only 5 left)"  
									value={this.state.inStock}
									onChange={this.handleChange}
								/>
								</label>

								<label htmlFor="ageRange">
									Age Range
									<input 
									id="ageRange" 
									name="ageRange" 
									placeholder="Enter An Age Range" 
									required 
									value={this.state.ageRange}
									onChange={this.handleChange}
								/>
								</label>

								<label htmlFor="description">
									Description
									<textarea 
									id="description" 
									name="description" 
									rows="10"
									placeholder="Enter A Description" 
									required 
									value={this.state.description}
									onChange={this.handleChange}
								/>
								</label>

								<button type="submit">Submit</button>

							</fieldset>
						</Form>
					)}
					</Mutation>
				</div>
			
		);
	}
}

export default CreateItem;
export { CREATE_ITEM_MUTATION };