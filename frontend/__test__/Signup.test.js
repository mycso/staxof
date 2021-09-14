import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';
import { ApolloConsumer } from 'react-apollo';
import Signup, { SIGNUP_MUTATION } from '../components/Signup';
import { CURRENT_USER_USER } from '../components/User';
import { fakeUser } from '../lib/testUtils';

function type(wrapper, email, value){
	wrapper.find(`input[name="${email}"]`).simulate('change', {
		target: { email, value },
	});
}

const me = fakeUser();
const mocks = [
	{
		request: {
			query: SIGNUP_MUTATION,
			variables: {
				terms: me.terms,
				password: 'cobra14',
				email: me.email,
				
			},
		},
		result: {
			data: { 
				signup: {
					__typename: 'User',
					id: 'abc123',
					email: me.email,
					terms: me.terms,
				},
			},
		},
	},

	// current user query mock
	{
		request: { query: CURRENT_USER_USER },
		result: { data: { me }},
	},
];

describe('<Signup/>', () => {
 it('renders and matches snapshot', async () => {
 	const wrapper = mount(
 		<MockedProvider>
 			<Signup />
 		</MockedProvider>
 	);
 	expect(toJSON(wrapper.find('form'))).toMatchSnapshot(); 
 });

 it('calls the mutation properly', async () => {
 	let apolloClient;
 	const wrapper = mount(
	 	<MockedProvider mocks={mocks}>
	 		<ApolloConsumer>
	 			{client => {
	 				apolloClient = client;
	 				return <Signup />;
	 			}}
	 		</ApolloConsumer>
	 	</MockedProvider>
	);
	await wait();
	wrapper.update();
	type(wrapper, 'terms', me.terms);
	type(wrapper, 'password', 'cobra14');
	type(wrapper, 'email', me.email);
	wrapper.update();
	wrapper.find('form').simulate('submit');
	await wait();
	// query the user out of the apollo client
	const user = await apolloClient.query({ query: CURRENT_USER_USER });
	expect(user.data.me).toMatchObject(me);
 });
});