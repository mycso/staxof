import styled from 'styled-components';
import SingleProduct from '../../components/SingleProduct';

const Inner = styled.div`
	max-width: ${props => props.theme.maxWidth};
	margin: 0 auto;
	padding: 2rem;
	font-size: 20px;
`;

export default function SingleProductPage({ query }) {
    return <Inner>
        <SingleProduct id={query.id} />
    </Inner>;
}