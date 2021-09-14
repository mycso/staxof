import styled from 'styled-components';
import PleaseSignIn from '../components/PleaseSignin';
import Permissions from '../components/Permissions';

const Inner = styled.div`
	max-width: ${props => props.theme.maxWidth};
	margin: 0 auto;
	padding: 2rem;
	font-size: 20px;
`;

const PermissionsPage = props => (
	<div>
		<PleaseSignIn>
			<Inner>
				<Permissions />
			</Inner>
		</PleaseSignIn>
  	</div>
);

export default PermissionsPage;