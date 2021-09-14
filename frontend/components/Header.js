import Link from 'next/link';
import styled from 'styled-components';
import NProgress from 'nprogress';
import Router from 'next/router';
import Nav from '../components/Nav';
import Cart from './Cart';

Router.onRouteChangeStart = () => {
	NProgress.start();
}
Router.onRouteChangeComplete = () => {
	NProgress.done();
}
Router.onRouteChangeError = () => {
	NProgress.done();
}


const Header = () => (
	<div>
		<Nav />
		<Cart />
  	</div>
);

export default Header;