import React, { Component } from 'react';
import styled from 'styled-components';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router'; 
import Form from './styles/Form';
import ItemStyles from './styles/ItemStyles';
import formatMoney from '../lib/formatMoney';
import SubHeader from '../components/SubHeader';
import Error from './ErrorMessage';

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

const SINGLE_ITEM_QUERY = gql`
	query SINGLE_ITEM_QUERY($id: ID!){
		item(where: { id: $id }){
			id
			title
			description
			price
			author
			image
			image2
			image3
			image4
			largeImage
			largeImage2
			largeImage3
			largeImage4
			ageRange
			inStock
		}
	}
`;

const UPDATE_ITEM_MUTATION = gql`
	mutation UPDATE_ITEM_MUTATION (
		$id: ID!,
		$title: String,
		$description: String,
		$price: Int,
		$inStock: String,
		$image: String,
		$image2: String,
		$image3: String,
		$image4: String,
		$largeImage: String,
		$largeImage2: String,
		$largeImage3: String,
		$largeImage4: String,
		$author: String,
		$ageRange: String
	){
		updateItem(
			id: $id,
			title: $title,
			description: $description,
			price: $price,
			inStock: $inStock,
			image: $image,
			image2: $image2,
			image3: $image3,
			image4: $image4,
			largeImage: $largeImage,
			largeImage2: $largeImage2,
			largeImage3: $largeImage3,
			largeImage4: $largeImage4,
			author: $author,
			ageRange: $ageRange

		) {
			id
			title
			description
			price
			inStock
			image
			image2
			image3
			image4
			largeImage
			largeImage2
			largeImage3
			largeImage4
			author
			ageRange
		}
	}
`;

class UpdateItem extends Component {
	state = {};

	handleChange = e => {
		const { name, type, value } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};
	updateItem = async (e, updateItemMutation) => {
		e.preventDefault();
		console.log('Updating Item!!');
		console.log(this.state);
		const res = await updateItemMutation({
			variables: {
				id: this.props.id,
				...this.state,
			}
		});
		console.log('Updated!!');
		Router.back();
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
				<Query query={SINGLE_ITEM_QUERY} variables={{
					id: this.props.id
				}}>
				{({data, loading}) => {
					if (loading) return <p>Loading..</p>;
					if(!data.item) return <p>No Item Found for ID {this.props.id}</p>
					console.log(data.item.image);
					return (
						<Mutation mutation={UPDATE_ITEM_MUTATION} variables={this.state}>
						{(updateItem, { loading, error }) => (
							<Form 
								onSubmit={e => this.updateItem(e, updateItem)}>
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
												onChange={this.uploadFile}
												className="upload-btn-file"
											/>

											{data.item.image && 
												<>
												<div>Current Image</div>
												<img width="200" src={data.item.image} alt="Upload Preview" />
												</>
											}

											{this.state.image && 
												<>
												<div>New Image</div>
												<img width="200" src={this.state.image} alt="Upload Preview" />
												</>
											}
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
										
										{data.item.image2 && 
											<>
											<div>Current Image</div>
											<img width="200" src={data.item.image2} alt="Upload Preview" />
											</>
										}

										{this.state.image2 && 
											<>
											<div>New Image</div>
											<img width="200" src={this.state.image2} alt="Upload Preview" />
											</>
										}
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

										{data.item.image3 && 
											<>
											<div>Current Image</div>
											<img width="200" src={data.item.image3} alt="Upload Preview" />
											</>
										}

										{this.state.image3 && 
											<>
											<div>New Image</div>
											<img width="200" src={this.state.image3} alt="Upload Preview" />
											</>
										}
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

										{data.item.image4 && 
											<>
											<div>Current Image</div>
											<img width="200" src={data.item.image4} alt="Upload Preview" />
											</>
										}
										
										{this.state.image4 && 
											<>
											<div>New Image</div>
											<img width="200" src={this.state.image4} alt="Upload Preview" />
											</>
										}
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
										defaultValue={data.item.title}
										onChange={this.handleChange}
									/>
									</label>

									<label htmlFor="author">
										Author
										<input 
										type="text" 
										id="author" 
										name="author" 
										placeholder="Author" 
										required 
										defaultValue={data.item.author}
										onChange={this.handleChange}
									/>
									</label>

									<label htmlFor="inStock">
										In Stock
										<input 
										type="text" 
										id="inStock" 
										name="inStock" 
										placeholder=""  
										defaultValue={data.item.inStock}
										onChange={this.handleChange}
									/>
									</label>

									{/*<label htmlFor="deliveryCost">
										Delivery Cost
										<input 
										type="number" 
										id="deliveryCost" 
										name="deliveryCost" 
										placeholder=""  
										defaultValue={data.item.deliveryCost}
										onChange={this.handleChange}
									/>
									</label>*/}

									<label htmlFor="price">
										Price
										<input 
										type="number" 
										id="price" 
										name="price" 
										placeholder="Price" 
										required 
										defaultValue={data.item.price}
										onChange={this.handleChange}
									/>
									</label>

									<label htmlFor="ageRange">
										Age Range
										<input 
										type="text" 
										id="ageRange" 
										name="ageRange" 
										placeholder="Age Range" 
										required 
										defaultValue={data.item.ageRange}
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
										defaultValue={data.item.description}
										onChange={this.handleChange}
									/>
									</label>
									<button type="submit">Sav{loading ? 'ing' : 'e'} Changes</button>

								</fieldset>
							</Form>
						)}
						</Mutation>
					);
				}}
				</Query>
			</div>
		);
	}
}

export default UpdateItem;
export { UPDATE_ITEM_MUTATION };