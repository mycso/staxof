import Link from 'next/link';
import styled from 'styled-components';
import AboutSplash from '../components/AboutSplash';
import Search from '../components/Search';

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  font-size: 20px;
`;

const AboutUs = props => (
  <div>
    <AboutSplash />
    <Inner>
      <br/>
      <h2>The Stax Story</h2>
      <p>
        Whilst on maternity leave, I started a small business venture selling children's books and it reignited the passion that I had for reading as a child. 
        My son was only 9 months old at the time, but I knew I wanted him to have the same passion for books and reading that I did growing up.
        I was also reminded that there were not enough diverse children's books reflecting a range of different cultures and backgrounds. 
        It is important to me that children grow up learning about people from all walks of life.
      </p>
      <p>And so Stax Of Stories was born!</p>
      <p>
        In a world where there is often negativity when it comes to embracing different cultures, 
        my hope is that Stax of Stories will be a place that little boys and girls can learn more about their own culture, as well as exploring others. 
        With these carefully selected books, Stax of Stories will help all children find inspiration to dream big and create positive stories of their own.
      </p>
      <p>Jola x</p>
      <br/>
    </Inner>
  </div>
);

export default AboutUs;