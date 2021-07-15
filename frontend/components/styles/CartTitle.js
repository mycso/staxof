import styled from 'styled-components';

const CartTitle = styled.h3`
  color: ${props => props.theme.grey};
  display: inline-block;
  padding: 0px 0px;
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 500px) {
      font-size: 1.2rem;
  }

`;

export default CartTitle;
