import React, { Component } from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import { CURRENT_USER_QUERY } from './User';

const SignoutBtn = styled.div`

button {
    width: auto;
    color: white;
    background-color: ${props => props.theme.orange};
    border: 0;
    border-radius: ${props => props.theme.roundedCorner} !important;
    font-size: 1rem;
    padding: 0.1rem 1.2rem;
  }
`;

const SIGN_OUT_MUTATION = gql`
	mutation SIGN_OUT_MUTATION {
		signout {
			message
		}
	}
`;



const Signout = props => (
	<SignoutBtn>
		<Mutation mutation={SIGN_OUT_MUTATION} refetchQueries={[{ query: CURRENT_USER_QUERY }]} >
			{(signout, {loading}) => 
				<button onClick={signout}>Sign{loading && 'ing'} Out</button>
			}
		</Mutation>
	</SignoutBtn>
)

export default Signout;