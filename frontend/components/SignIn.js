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
`

const SIGNIN_MUTATION = gql`
    mutation SIGNIN_MUTATION($email: String!, $password: String!) {
        authenticateUserWithPassword(email: $email, password: $password) {
            ... on UserAuthenticationWithPasswordSuccess {
                item {
                    id
                    email
                    name
                }
            }
            ... on UserAuthenticationWithPasswordFailure {
                code
                message
            }
        }
    }
`;

export default function SignIn() {

    const { inputs, handleChange, resetForm } = useForm({
        email: '',
        password: '',
    });

    const [signin, { data, loading }] = useMutation(SIGNIN_MUTATION, 
        {
            variables: inputs,
            refetchQueries: [{ query: CURRENT_USER_QUERY }],
        }
    );

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(inputs);
        const res = await signin();
        resetForm();
    }

    if (
        data?.authenticateUserWithPassword.__typename ===
        'UserAuthenticationWithPasswordSuccess'
    ) {
        Router.push({
            pathname: '/',
        });

    }
    
    const error = data?.authenticateUserWithPassword.__typename ===
    'UserAuthenticationWithPasswordFailure'
      ? data?.authenticateUserWithPassword
      : undefined;

    return (
        <Form method="POST" onSubmit={handleSubmit}>
            <h2>Sign Into Your Account</h2>
            <fieldset>
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
                <EyeReveal>
                    <label htmlFor="password">
                        Password
                            
                            <div className="float-right mt-1 cursor-pointer">
                                <small>
                                    <span className="pr-1">Show Password </span>
                                    <FontAwesomeIcon icon={faEye} />
                                </small>
                            </div>
                                                            
                        <input 
                            type="password"
                            name="password" 
                            placeholder="Password" 
                            autoComplete="password"
                            value={inputs.password}
                            onChange={handleChange}
                        />
                        
                    </label>
                </EyeReveal>
                <button type="submit">Sign In!</button>
                <div className="float-right mt-1">
                    <small>
                        <a className="member-link" href="/signup"><span className="cursor-pointer">Sign Up</span></a> or <a className="member-link" href="/requestReset"><span className="pr-1 cursor-pointer">Reset Password</span></a>
                    </small>
                </div>
            </fieldset>
        </Form>
    );
}