import PleaseSignIn from '../components/PleaseSignin';
import Account from '../components/Account';

const AccountPage = props => (
	<div>
		<PleaseSignIn>
			<Account id={props.query.id} />
		</PleaseSignIn>
  	</div>
);

export default AccountPage;