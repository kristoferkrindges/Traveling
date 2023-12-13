import styled, { keyframes } from "styled-components";
import { size } from "../../../../styles/variables";

const thumbAnimation = keyframes`
  to {
    transform: initial;
  }
`;

export const ContainerInstaStories = styled.div``;

export const Slide = styled.div`
	max-width: 380px;
	margin: 20px auto;
	display: grid;
	box-shadow: 0 4px 20px 2px rgba(0, 0, 0, 0.4);
`;

export const SlideItems = styled.div`
	position: relative;
	grid-area: 1/1;
	border-radius: 5px;
	overflow: hidden;

	& > * {
		position: absolute;
		top: 0px;
		opacity: 0;
		pointer-events: none;
	}

	& > .active {
		position: relative;
		opacity: 1;
		pointer-events: initial;
	}

	& img {
		max-width: 100%;
		display: block;
	}
`;

export const NavButtons = styled.nav`
	grid-area: 1/1;
	z-index: 1;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto 1fr;
`;

export const SlideThumb = styled.div`
	display: flex;
	grid-column: 1 / 3;

	& span {
		flex: 1;
		display: block;
		height: 3px;
		background: rgba(0, 0, 0, 0.4);
		margin: 5px;
		border-radius: 3px;
		overflow: hidden;
	}

	& > span.active::after {
		content: "";
		display: block;
		height: inherit;
		background: rgba(255, 255, 255, 0.9);
		border-radius: 3px;
		transform: translateX(-100%);
		animation: ${thumbAnimation} 5s forwards linear;
	}
`;

export const SlidePrev = styled.button`
	-webkit-appearance: none;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	opacity: 0;
`;

export const SlideNext = styled.button`
	-webkit-appearance: none;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	opacity: 0;
`;
