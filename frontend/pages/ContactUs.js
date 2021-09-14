import Link from 'next/link';
import styled from 'styled-components';
import ContactSplash from '../components/ContactSplash';
import ContactRequest from '../components/ContactRequest';
import Search from '../components/Search';

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  font-size: 20px;
`;

const ContactUs = props => (
  <div>
    <ContactSplash />
    <Inner>
      <ContactRequest />
    </Inner>
  </div>
);

export default ContactUs;