import styled from "styled-components";
import { FaUserEdit } from "react-icons/fa";
import { BsFileEarmarkPost } from "react-icons/bs";
import { IoHeart, IoBookmark, IoPeople, IoPerson } from "react-icons/io5";
export const Heart = styled(IoHeart)``;
export const Fav = styled(IoBookmark)``;
export const IconPost = styled(BsFileEarmarkPost)``;
export const IconFollowers = styled(IoPeople)``;
export const IconFollowing = styled(IoPerson)``;

export const Category = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 1rem;
	h6 {
		width: 100%;
		text-align: center;
		border-bottom: 4px solid ${({ theme }) => theme.container};
		padding-bottom: 0.5rem;
		font-size: 0.85rem;
		cursor: pointer;
	}
	& .active {
		border-color: ${({ theme }) => theme.invertedBackground};
	}
`;
export const Context = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	width: 100%;

	svg {
		color: ${({ theme }) => theme.text};
		font-size: 1rem;
		margin-bottom: 0.5rem;
	}

	h6 {
		width: 100%;
		text-align: center;
		border-bottom: 4px solid ${({ theme }) => theme.container};
		padding-bottom: 0.5rem;
		font-size: 0.85rem;
		cursor: pointer;
	}

	&:hover {
		opacity: 0.7;
	}
`;
export const Posts = styled.h6``;
