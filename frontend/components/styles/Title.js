import styled from 'styled-components';

const Title = styled.h3`
  margin: 0 1rem;
  text-align: center;
  margin-top: 1rem;
  a {
    display: inline;
    line-height: 1.3;
    font-size: 1.3rem;
    text-align: center;
    color: ${props => props.theme.navyBlue};
    font-weight: bold;
    padding: 0 1rem;
  }
`;

export default Title;
