import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const AnimationStyles = styled.span`
	position: relative;
	.count{
		display: block;
		position: absolute;
		transition: all 0.4s;
		backface-visibility: hidden; 
	}
	/* Initial State of the entered Dot */
	.count-enter {
		transform: scale(4) rotateX(0.5turn);
	}
	.count-enter-active {
		transform: rotateX(0);
	}
	.count-exit {
		top: 0;
		position: absolute;
		transform: rotateX(0);
	}
	.count-exit-active {
		transform: scale(4) rotateX(0.5turn);
	}
`;

const Dot = styled.div`
	background: ${props => props.theme.orange};
	color: white;
	border-radius: 20%;
	padding: 0.2rem;
	line-height: 1rem;
	min-width: auto;
    min-height: auto;
    margin-left: 1rem;
    margin-top: -2.7rem;
    font-weight: 100;
    font-feature-settings: 'tnum';
    font-variant-numeric: tabular-nums;
    float: right;
`;

const CartCount = ({ count }) => 
	<AnimationStyles>
		<TransitionGroup>
			<CSSTransition 
				unmountOnExit
				className="count" 
				classNames="count" 
				key={count} 
				timeout={{ enter: 400, exit: 400 }}
			>
				<Dot>{count}</Dot>
			</CSSTransition>
		</TransitionGroup>
	</AnimationStyles>

	
export default CartCount;