import Form from './styles/Form';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Router from 'next/router'; 
import useForm from '../lib/useForm';
import Error from './ErrorMessage';
import { 
    faEye,
} from '@fortawesome/free-solid-svg-icons';
import { CURRENT_USER_QUERY } from './User';

const EyeReveal = styled.div`
  .cursor-pointer {
    cursor: pointer;
  }

  .show{
  	opacity: 1;
  }

  .hide {
  	opacity: 0.5;
  }
`;

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!){
    sendUserPasswordResetLink(email: $email) {
        code
        message
    }
  }
`;

export default function RequestReset() {

    const { inputs, handleChange, resetForm } = useForm({
        email: '',
    });

    const [signup, { data, loading , error}] = useMutation(REQUEST_RESET_MUTATION, 
        {
            variables: inputs,
            // refetchQueries: [{ query: CURRENT_USER_QUERY }],
        }
    );

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(inputs);
        const res = await signup().catch(console.error);
        console.log(res);
        console.log({ data, loading, error });
        resetForm();
    }

    return (
        <Form method="POST" onSubmit={handleSubmit}>
            <h2>Request a Password Reset</h2>
            <fieldset>
                {data?.sendUserPasswordResetLink === null && (
                    <p>Success! Check your email for a link!</p>
                )}
                <Error error={error} />
                <label htmlFor="email">
                    Email
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Your Email Address" 
                        autoComplete="email"
                        value={inputs.email}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Request Reset</button>
                <div className="float-right mt-1">
                    <small>
                        <a className="member-link" href="/signin"><span className="cursor-pointer">Sign In</span></a> or <a className="member-link" href="/resetPassword"><span className="pr-1 cursor-pointer">Reset Password</span></a>
                    </small>
                </div>
            </fieldset>
        </Form>
    );
}