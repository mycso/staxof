import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  max-width: 700px;
  margin: 40px auto;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid ${props => props.theme.grey};
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.mainBlue};
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    color: white;
    background-color: ${props => props.theme.lightBlue};
    border: 0;
    border-radius: ${props => props.theme.roundedCorner} !important;
    font-size: 20px;
    padding: 0.5rem 1.2rem;
  }

  a {
    width: auto;
    color: white;
    // background-color: ${props => props.theme.lightBlue};
    border: 0;
    // border-radius: ${props => props.theme.roundedCorner} !important;
    font-size: 20px;
    // padding: 0.8rem 1.2rem;
    text-decoration: none;
    font-weight: normal;
  }

  .member-link {
    color: ${props => props.theme.mainBlue};
  }

  fieldset {
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before{
      height: 3px;
      margin-bottom: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(to right, ${props => props.theme.orange} 0%, ${props => props.theme.yellow} 50%, ${props => props.theme.orange} 100% );
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }

`;

export default Form;
