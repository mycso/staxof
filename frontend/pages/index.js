import styled from 'styled-components';
import HomeCarousel from '../components/HomeCarousel';
import Search from '../components/Search';
import Items from '../components/Items';

const Inner = styled.div`
	max-width: ${props => props.theme.maxWidth};
	margin: 0 auto;
	padding: 2rem;
	font-size: 20px;
`;

const Home = props => (
  <div>
	  <HomeCarousel />
	  <Inner>
	    <Search />
	    <Items page={parseFloat(props.query.page) || 1} />
	  </Inner>
  </div>
);

export default Home;
