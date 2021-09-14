import styled from 'styled-components';

const CloseButton = styled.button`
  background: ${props => props.theme.white};
  color: ${props => props.theme.grey};
  font-size: 2rem;
  border: 0;
  position: absolute;
  z-index: 2;
  right: 0;
  top: 0;
`;

export default CloseButton;
