import Link from 'next/link';
import styled from 'styled-components';
// import AboutSplash from '../components/AboutSplash';
import Search from '../components/Search';

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  font-size: 20px;

  a {
    color: #29abe2;
  }

`;

const privacyPolicy = props => (
  <div>
    {/*<AboutSplash />*/}
    <Inner>
      <br/>
        <h2>Shipping</h2>
        <p>We pay the shipping on your order so there are no surprises when you check out.</p>

        <p>Your order should be with you within a week of the date that the order was placed. 
        Your order should be with you in less than a week, however if it takes a little longer than that, 
        please bear with us as deliveries are taking a little longer than usual at the moment due to pandemic.</p>

        <p>If you have any issues with your order please email us at <a href="mailto:info@staxofstories.com">info@staxofstories.com</a> and we will try and help you in whatever way we can.</p>

        <h2>Returns</h2>
        <p>Not happy with your purchase? We offer hassle-free returns, simply email us at <a href="mailto:returns@staxofstories.com">returns@staxofstories.com</a> with your Name and Order ID, post the products to us unopened and unused and we'll give you a refund!</p>
      <br/>
    </Inner>
  </div>
);

export default privacyPolicy;