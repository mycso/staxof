import styled from 'styled-components';

const PriceTag = styled.span`
  background:;
  color: ${props => props.theme.green};
  font-weight: 600;
  padding: 5px;
  border-radius: 50px;
  line-height: 1;
  font-size: 1.5rem;
  display: inline-block;
`;

export default PriceTag;
