import styled from "styled-components";

export const OrderUser = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media only screen and (max-width: 1720px) {
		flex-direction: column;
	}

	@media only screen and (max-width: 1400px) {
		flex-direction: row;
	}

	@media only screen and (max-width: 1150px) {
		flex-direction: column;
	}
`;
