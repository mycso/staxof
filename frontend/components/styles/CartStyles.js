import styled from 'styled-components';

const CartStyles = styled.div`
  padding: 20px;
  position: relative;
  background: white;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  width: 40%;
  min-width: 320px;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 2000;
  display: grid;
  grid-template-rows: auto 1fr auto;

  @media (max-width: 768px) {
    width: 60%;
  }

  ${props => props.open && `transform: translateX(0);`};
  header {
    border-bottom: 1px solid ${props => props.theme.grey};
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
  footer {
    border-top: 1px double ${props => props.theme.grey};
    margin-top: 2rem;
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    // grid-template-columns: auto auto;
    align-items: end;
    font-size: 2rem;
    font-weight: 900;
    @media (max-width: 500px) {
      display: block;
    }

    p {
      margin: 0;

      @media (max-width: 500px) {
        font-size: 32px;
      }
    }
    
    select {
      font-size: 22px;
      max-width: 214px;
    }

    .sub-text {
        font-size: 22px;
    }
    
    @media (max-width: 1146px) {
      grid-template-columns: 1fr 1fr;
      width: 100%;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow-y: scroll;
    
    @media (max-width: 500px) {
      width: 100%;
      overflow-y: scroll;
    }
  }
  button {
    border-radius: ${props => props.theme.roundedCorner} !important;
    padding: 10px;
    border: 0;
  }
  .checkout{
    width: 100%
  }

`;

export default CartStyles;
