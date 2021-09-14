import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';
import Order, { SINGLE_ORDER_QUERY } from '../components/Order';
import { fakeOrder } from '../lib/testUtils';

const mocks = [
	{
		request: { query: SINGLE_ORDER_QUERY, variables: { id: 'abc123' } },
		result: { data: { order: fakeOrder() } }
	},
];

describe('<Order/>', async () => {
	it('renders the order', () => {
		const wrapper = mount(
			<MockedProvider>
				<Order id="ord123" />
			</MockedProvider>
		);
		await wait();
		wrapper.update();
		const order = wrapper.find('div[data-test="order"]')
		expect(toJSON(order)).toMatchSnapshot();
	});
});