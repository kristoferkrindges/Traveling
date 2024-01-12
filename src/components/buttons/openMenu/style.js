import styled from "styled-components";

export const ContextOpen = styled.div`
	& div.active::before {
		transform: translateY(0px) rotate(45deg);
		box-shadow: 0 0 0 #fff;
	}

	& div.active::after {
		transform: translateY(0px) rotate(-45deg);
	}
`;

export const OpenContainer = styled.div`
	position: relative;
	width: 45px;
	height: 45px;
	border-radius: 50%;
	cursor: pointer;
	background: ${(prop) =>
		prop.backgroundColor
			? prop.backgroundColor
			: ({ theme }) => theme.background};
	display: none;
	align-items: center;
	justify-content: center;

	& svg {
		width: 25px;
		height: 25px;
	}

	& svg:hover {
		transform: rotate(-10deg);
		opacity: 0.7;
	}

	&::before {
		content: "";
		position: absolute;
		width: 25px;
		height: 2px;
		background: ${({ theme }) => theme.text};
		transform: translateY(-8px);
		box-shadow: 0 8px 0 ${({ theme }) => theme.text};
		transition: 0.5s;
	}

	&::after {
		content: "";
		position: absolute;
		width: 25px;
		height: 2px;
		background: ${({ theme }) => theme.text};
		transform: translateY(8px);
		transition: 0.5s;
	}

	@media only screen and (max-width: 1400px) {
		display: flex;
	}
`;
