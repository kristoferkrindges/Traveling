import styled from "styled-components";
export const Form = styled.form`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 1rem;
	background-color: ${({ theme }) => theme.container};
	padding: 0.4rem 1rem;
	border-radius: 2rem;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
`;
export const ProfilePhoto = styled.div`
	img {
		width: 45px;
		height: 45px;
		border-radius: 50%;
		object-fit: cover;
		cursor: pointer;
	}
`;
export const Input = styled.input`
	justify-self: start;
	width: 100%;
	padding-left: 1rem;
	background: transparent;
	color: ${({ theme }) => theme.invertedBackground};
	margin-right: 1rem;
`;
