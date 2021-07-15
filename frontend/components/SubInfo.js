import Link from 'next/link';
import StyledSubHeader from './styles/SubHeaderStyles';
// import User from './User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTruck,
} from '@fortawesome/free-solid-svg-icons';
import { useUser } from './User';

export default function SubInfo() {
    const user = useUser();
	console.log(user);

    return (
        <StyledSubHeader>
        <div className="subheader-wrapper">
                <div className="subheader-inner">
                    {user && (
                        <>
                            <li>
                                <Link href="/account">
                                    <span>
                                        <a className="float-left">Hi, {user.email}</a>
                                    </span>
                                </Link>
                            </li>
                        </>
                    )}

                    {!user && ( 
                        <>
                            <li>
                                <span>
                                    <Link activeClassName='active' href="/signin">
                                        <a href="/signin" className="float-left">Sign In/Sign Up</a>
                                    </Link>
                                    <span className="float-right"><FontAwesomeIcon icon={faTruck} /> FREE UK Delivery</span>
                                </span>
                            </li>
                        </>
                    )}	
                </div>
        </div>
        </StyledSubHeader>
    );
}