import Link from 'next/link';
import styled from 'styled-components';
// import AboutSplash from '../components/AboutSplash';
import Search from '../components/Search';

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  font-size: 20px;

  a {
    color: #29abe2;
  }

`;

const privacyPolicy = props => (
  <div>
    {/*<AboutSplash />*/}
    <Inner>
      <br/>
      <h2>Stax of stories Privacy Policy &amp; GDPR Commitment</h2>
        <p>
        This Privacy Policy describes how your personal information is collected, used, and shared when you 
        visit or make a purchase from staxofstories.com (the “Site”).
        </p>

        <br/>
        <h2>PERSONAL INFORMATION WE COLLECT</h2>
        <p>When you visit the Site, we automatically collect certain information about your device, 
        including information about your web browser, IP address, time zone, and some of the cookies that 
        are installed on your device. Additionally, as you browse the Site, we collect information about the 
        individual web pages or products that you view, what websites or search terms referred you to the Site, 
        and information about how you interact with the Site. We refer to this automatically-collected 
        information as “Device Information”.</p>

        <p>We collect Device Information using the following technologies: - “Cookies” are data files that are placed on your 
        device or computer and often include an anonymous unique identifier. For more information about cookies, 
        and how to disable cookies, visit <a target="_blank" href="https://www.allaboutcookies.org">https://www.allaboutcookies.org</a>.</p>

        <p>Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, 
        including your name, billing address, shipping address, payment information (including credit and debit card numbers), email address, 
        and phone number. We refer to this information as “Order Information”.</p>

        <p>When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information</p>
        <br/>

        <h2>HOW DO WE USE YOUR PERSONAL INFORMATION?</h2>
        <p>We use the Order Information that we collect generally to fulfill any orders placed through the Site 
        (including processing your payment information, arranging for shipping, and providing you with invoices 
        and/or order confirmations). Additionally, we use this Order Information to:</p> 

        <p>  
            - Communicate with you; 
            <br/>
            - Screen our orders for potential risk or fraud; and 
            <br/>
            - When in line with the preferences you have shared with us, 
            provide you with information, advertising or special offers relating to our products or services. 
        </p>

        <p>We use the Device Information that we collect to help us screen for potential risk and fraud 
        (in particular, your IP address), and more generally to improve and optimize our Site (for example, 
        by generating analytics about how our customers browse and interact with the Site, and to assess the success of o
        ur marketing and advertising campaigns). We sometimes use your device information to remind you of products you've 
        browsed using targeted adverts on sites such as Facebook.
        </p>

        <br/>
        <h2>SHARING YOUR PERSONAL INFORMATION</h2>
        <p>
        We share your Personal Information with third parties to help us use your Personal Information, as described above. 
        We also use Google Analytics to help us understand how our customers use the Site -- you can read more about how Google 
        uses your Personal Information here: <a target="_blank" href="https://www.google.com/intl/en/policies/privacy/">https://www.google.com/intl/en/policies/privacy/</a>.
        You can also opt-out of Google Analytics here: <a target="_blank" href="https://tools.google.com/dlpage/gaoptout">https://tools.google.com/dlpage/gaoptout</a>.
        Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful 
        request for information we receive, or to otherwise protect our rights.</p>

        <br/>
        <h2>BEHAVIOURAL ADVERTISING</h2>
        <p>
        As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. 
        For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s (“NAI”) educational page at
        <a target="_blank" href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work"> http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work. </a>
        You can opt out of targeted advertising by using the links below:
        <br/>
        - Facebook: <a target="_blank" href="https://www.facebook.com/settings/?tab=ads">https://www.facebook.com/settings/?tab=ads</a>
        <br/>
        - Google: <a target="_blank" href="https://www.google.com/settings/ads/anonymous">https://www.google.com/settings/ads/anonymous</a>
        <br/>
        - Bing: <a target="_blank" href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads">https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads</a>
        <br/>
        Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at:
        <a target="_blank" target="_blank" href="http://optout.aboutads.info/"> http://optout.aboutads.info/</a>.
        </p>

        <br/>
        <h2>DO NOT TRACK</h2>
        <p>
        Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal
        from your browser.</p>

        <br/>
        <h2>YOUR RIGHTS</h2>
        <p>If you are a European resident, you have the right to access personal information we hold about you and to ask
        that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please
        contact us through the contact information below.</p>
        
        <p>Additionally, if you are a European resident we note that we are processing your information in order to fulfill
        contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our
        legitimate business interests listed above. Additionally, please note that your information will be securely
        transferred outside of Europe, including to Canada and the United States.</p>

        <br/>
        <h2>DATA RETENTION</h2>
        <p>When you place an order through the Site, we will maintain your Order Information for our records unless and
        until you ask us to delete this information.</p>

        <br/>
        <h2>CHANGES</h2>
        <p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or
        for other operational, legal or regulatory reasons.</p>

        <br/>
        <h2>MINORS</h2>
        <p>The Site is not intended for individuals under the age of 18.</p>

        <br/>
        <h2>CONTACT US</h2>
        <p>
        For more information about our privacy practices, if you have questions, or if you would like to make a complaint,
        please contact us by e-mail at <a href="mailto:info@staxofstories.com">info@staxofstories.com</a> or by mail using the details provided below:</p>
        
        <p>Stax of Stories
        FAO Jola Sokan (Data Privacy Officer)
        85 Great Portland Street, First Floor, London, England, W1W 7LT
        </p>
      <br/>
    </Inner>
  </div>
);

export default privacyPolicy;