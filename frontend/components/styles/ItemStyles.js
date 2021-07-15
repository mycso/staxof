import styled from 'styled-components';

const Item = styled.div`
  background:;
  border: 0.4px solid ${props => props.theme.white};
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 25px 5px;
  img {
    width: 100%;
    height: 320px;
    object-fit: contain;
    cursor: pointer;
  }

  a {
    padding: 0.5rem 0 !important;
  }

  p {
    font-size: 12px;
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    font-size: 0.9rem;
    margin-bottom: 0px;
  }

  .orange-text {
    color: ${props => props.theme.orange};
    font-weight: bold;
  }

  .buttonList {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    grid-gap: 1px;
    background: ${props => props.theme.white};
    & > * {
      background:;
      border: 0;
      font-size: 1rem;
      padding: 1rem;
    }
  }

  button {
    border-radius: ${props => props.theme.roundedCorner} !important;
    padding: 5px;
    width: 150px;
    border: 0;
  }

  .cart-btn {
    background-color: ${props => props.theme.orange};
    color: ${props => props.theme.white};
    max-width: 160px !important;
    min-width: 130px !important;
        :focus{
          box-shadow: 0 0 0 0.2rem rgba(241, 90, 36, 0.36);
        }
        :hover {
          background-color: #db5322;
        }

    @media (max-width: 500px) {
      width: 155px;
    }
  }

`;

export default Item;
