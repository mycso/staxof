import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';
import { CURRENT_USER_QUERY } from "./User";

const SignoutBtn = styled.div`

button {
    width: auto;
    color: white;
    background-color: ${props => props.theme.orange};
    border: 0;
    border-radius: ${props => props.theme.roundedCorner} !important;
    font-size: 1rem;
    padding: 0.1rem 1.2rem;
    vertical-align: text-top;
  }
`;

const SIGN_OUT_MUTATION = gql`
    mutation {
        endSession
    }
`;

export default function SignOut() {
    const [signout] = useMutation(SIGN_OUT_MUTATION, {
        refetchQueries: [{ query: CURRENT_USER_QUERY }],
    });
    return (
        <SignoutBtn>
            <button type="button" onClick={() => {
                signout();
            }}>
                Sign Out
            </button>
        </SignoutBtn>
    );
}