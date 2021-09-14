import styled from 'styled-components';
import SubHeader from '../components/SubHeader';
import SingleItem from '../components/SingleItem';

const Inner = styled.div`
	max-width: ${props => props.theme.maxWidth};
	margin: 0 auto;
	padding: 2rem;
	font-size: 20px;
`;


const Item = props => (
  <div>
	<SubHeader />
	  <Inner>
	    <SingleItem id={props.query.id} />
	  </Inner>
  </div>
);

export default Item;
