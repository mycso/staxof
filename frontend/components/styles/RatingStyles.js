import styled from 'styled-components';

const Rating = styled.div`
  background:;
  border: 0.4px solid ${props => props.theme.white};
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 5px;
  img {
    width: 100%;
    height: 320px;
    object-fit: contain;
    cursor: pointer;
  }

  a {
    padding: 0.5rem 16px 10px 0 !important;
  }

  p {
    font-size: 12px;
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    font-size: 0.9rem;
    margin-bottom: 0px;
  }

  .buttonList {
    display: block;
    width: 100%;
    grid-template-columns: 1fr;
    grid-gap: 1px;
    background: ${props => props.theme.white};
    & > * {
      background:;
      border: 0;
      font-size: 1rem;
    }
  }

  button {
    border-radius: ${props => props.theme.roundedCorner} !important;
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
          color: #212529;
          background-color: #f8f9fa;
          border-color: #f8f9fa;        
        }

    @media (max-width: 500px) {
      width: 155px;
    }

  }

  .star {
    color: ${props => props.theme.yellow};
  }

  .dv-star-rating {
    float: left;
  }

  .star-result {
    margin-left: 10px;
    float: none;
  }

  .rating-wrapper {
    max-width: 150px;
  }

`;

export default Rating;
