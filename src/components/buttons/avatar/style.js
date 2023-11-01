import styled from "styled-components";

export const Profile = styled.div`
	position: relative;
	& img:hover {
		transform: rotate(-10deg);
		cursor: pointer;
		opacity: 0.7;
	}
	z-index: 999;
`;
