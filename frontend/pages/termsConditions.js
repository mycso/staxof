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

const termsConditions = props => (
  <div>
    {/*<AboutSplash />*/}
    <Inner>
      <br/>
        <p><h2>Terms & Conditions</h2></p>
        
        <p>
          <h3>Stax of Stories: Terms of Subscription and Website Use</h3>
        </p>

        <p>
          <h3>1. Introduction</h3>
        </p>

        <p>1.1 These terms apply to the use of the Stax of Stories website and to all
        products sold on this website. No other terms and conditions apply.</p>

        <p>1.2 Our website is provided by us and we are Stax of Stories 
        Limited of 85 Great Portland Street, First Floor, London, England, W1W 7LT (we, us). 
        These Terms and the Privacy Policy accessible on our website affect your legal rights and obligations so please read them carefully. 
        If you have any questions, you can contact us at <a href="mailto:info@staxofstories.com">info@staxofstories.com</a></p>

        <p>1.3 We reserve the right to update these terms from time to time at our discretion. If we do so, the updated 
        version will be effective as soon as it is accessible.</p>

        <p>2. Making a purchase</p>

        <p>2.1 You can make a purchase though the website. You must be (a) at least 18 years old and resident 
        in the United Kingdom or Northern Ireland; and (b) legally capable of entering into a contract. 
        You will create a username and password. You are responsible for keeping your username and password 
        confidential and you are responsible for any activity under your account. Please take precautions to 
        protect your password and contact us if you believe there has been any unauthorised use of your account.</p>

        <p>2.2 You warrant that all information you provide on sign up is accurate and complete and you shall promptly make any 
        changes to your account as necessary to reflect any changes in such information in particular delivery 
        information. We shall process all personal data that you provide to us in accordance with our 
        <a href="/privacyPolicy"> Privacy Policy</a>.</p>

        <p>2.4 The fees for each items are set out on our website and are subject to change at any time.</p>

        <p>2.5 You may cancel your order at any time by written notice to us or by emailing us at <a href="mailto:orders@staxofstories.com">orders@staxofstories.com</a>. 
        If we receive that notice within 14 days of the date you make payment to us, we will refund to you all sums paid. 
        If you have already received your delivery from us during that 14 day period, you must return the items to us at your own cost.
        <br/> 
        To return a product please contact us at <a href="mailto:returns@staxofstories.com">returns@staxofstories.com</a> to inform us that you will be returning the product with your Name and Order ID. 
        We strongly recommend that you send the items back to us via a recorded post service and obtain a certificate of posting. 
        Please also make sure you package the items appropriately to avoid damage.
        <br/>
        We are only able to give you a refund if all items included are not damaged. If you receive an item that is damaged, 
        please contact us at <a href="mailto:orders@staxofstories.com">orders@staxofstories.com</a> with your Name, 
        Order ID and a photograph of the damaged items and, 
        we shall at our discretion replace them or offer you a refund. 
        If you do not receive your order, please contact us at <a href="mailto:orders@staxofstories.com">orders@staxofstories.com</a> with your Name, 
        Order ID and we shall at our discretion replace the items or offer you a refund.</p>

        <p>4. Reviews</p>

        <p>4.1 You grant to us a non-exclusive, royalty free, transferable perpetual licence to reproduce 
        any reviews you may post about Stax of Stories products within our promotional and marketing materials.</p>

        <p>5. Cancellation by us</p>

        <p>5.1 We reserve the right to suspend or terminate your order at any time without notice or liability (a) if 
        any information that you provide to us is not true, ceases to be true, or we cannot verify or authenticate 
        any such information; and/or (b) you have not paid any sums due to us.</p>

        <p>6. Liability</p>

        <p>6.1 Nothing in these Terms is intended to limit any rights you might have as a consumer under 
        applicable local law or other statutory rights that may not be excluded nor in any way to exclude or 
        limit our liability to you which cannot be excluded by English law. In particular, we acknowledge that 
        under applicable laws, the items that we send to you must be as described, fit for purpose and of satisfactory 
        quality.</p>

        <p>6.2 We shall have no liability to pay any money to you by way of compensation or damages for any reason 
        whatsoever in excess of the amount paid by you for the item(s) that is the subject of the claim. 
        You must in any case be able to demonstrate a loss relating to the item in question in accordance with these Terms. 
        For the avoidance of doubt, we shall have no liability to you if you or your child did not enjoy any items 
        received from us.</p>

        <p>6.3 To the extent permitted by law, we shall have no liability to you for our content or third 
        party content on our site, including other user’s reviews.</p>

        <p>7. Use of our website</p>

        <p>7.1 Our website is made for your own, personal use. You must not try to gain unauthorised access to our website or 
        any networks, servers or computer systems connected to our website and/or reproduce, redistribute, sell, 
        create derivative works from, decompile, reverse engineer, or disassemble all or part of the website save 
        to the extent expressly permitted by law not capable of exclusions.</p>

        <p>7.2 The copyright in all material contained in our website including all information, data, text, 
        images and software is owned by or licensed to us. All rights are reserved.</p>

        <p>7.3 Our website may contain links to websites or apps operated by third parties. We do not have any 
        influence or control over any such third party websites or apps and we are not responsible for and do 
        not endorse any third party websites or apps or their availability or content.</p>

        <p>7.4 We accept no responsibility for adverts contained within our website. If you agree to purchase 
        products and/or services from any third party who advertises on our website, you do so at your own risk. 
        The advertiser, and not us, is responsible for such products and/or services and if you have any questions 
        or complaints in relation to them, you should contact the advertiser.</p>

        <p>7.5 We will use reasonable endeavours to make our website available to you at all times. 
        However, there may be occasions when access to the Site may be interrupted, including for 
        scheduled maintenance or upgrades, for emergency repairs, or due to failure of telecommunications links 
        and/or equipment. We reserve the right to remove any products, content or features from our website 
        at any time and for any reason.</p>

        <p>8.General</p>

        <p>8.1 These Terms and the Privacy & Cookie Policy (as amended from time to time) constitute the 
        entire agreement between you and us concerning your use of the Site.</p>

        <p>8.2 If any provision of these Terms is held by a court of competent jurisdiction to be invalid 
        or unenforceable, then such provision shall be construed, as nearly as possible, to reflect the 
        intentions of the parties and all other provisions shall remain in full force and effect.</p>

        <p>8.3 Our failure to exercise or enforce any right or provision of these Terms shall not constitute 
        a waiver of such right or provision.</p>

        <p>8.4 If you have any complaint or wish to raise a dispute under these Terms or otherwise in relation 
        to the products please follow this link <a target="_blank" href="http://ec.europa.eu/odr">http://ec.europa.eu/odr</a></p>

        <p>8.5 These Terms shall be governed by and construed in accordance with English law and you agree to submit 
        to the exclusive jurisdiction of the English Courts.</p>

        <p>Last updated: November 2020</p>

      <br/>
    </Inner>
  </div>
);

export default termsConditions;