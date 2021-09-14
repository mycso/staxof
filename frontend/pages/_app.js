import App, { Container } from 'next/app';
import { ScrollTo } from "react-scroll-to"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faArrowDown,
} from '@fortawesome/free-solid-svg-icons';

import { 
    faFacebook,
    faTwitter,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';

import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';
import HttpsRedirect from 'react-https-redirect';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps){
      pageProps = await Component.getInitialProps(ctx);
    }
    //this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render () {
    const { Component, apollo, pageProps } = this.props;

      return (
        <Container>
          <ApolloProvider client={apollo}>
            <HttpsRedirect>
              <Page>
                <Component {...pageProps} />
              </Page>
            </HttpsRedirect>
          </ApolloProvider>
        </Container>

      );
  }
}

export default withData(MyApp);
