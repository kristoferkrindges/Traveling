import styled from "styled-components";
import {
	IoEllipsisHorizontal,
	IoHeartOutline,
	IoChatbubbleOutline,
	IoShareOutline,
	IoBookmarkOutline,
} from "react-icons/io5";
import { NavLink as Link } from "react-router-dom";

export const Ellips = styled(IoEllipsisHorizontal)`
	cursor: pointer;
	&:hover {
		opacity: 0.5;
	}
`;
export const Heart = styled(IoHeartOutline)``;
export const IconComment = styled(IoChatbubbleOutline)``;
export const Share = styled(IoShareOutline)``;
export const Book = styled(IoBookmarkOutline)``;

export const Container = styled.div`
	margin-top: 1rem;
	padding: 1rem;
	border-radius: 1rem;
	background-color: ${({ theme }) => theme.background};
`;

export const Controller = styled.div`
	display: flex;
	width: 100%;
	gap: 1rem;
`;

export const Left = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const Extends = styled.div``;

export const Border = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 1.4rem;
	padding: 1px;
	height: 70%;
	border-left: 1px solid gray;
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
export const Ingo = styled.div`
	display: flex;
	justify-content: space-between;
`;
export const NameContext = styled.div``;
export const Name = styled.h3``;
export const Small = styled.small``;
export const Space = styled.span`
	margin-left: 2px;
`;

export const Caption = styled.div`
	margin-top: 0.8rem;
	margin-bottom: 0.7rem;
`;

export const Pharase = styled.p`
	font-size: 1rem;
`;

export const ActionButtons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1.3rem;
	margin-top: 1rem;
	font-weight: bold;
`;
export const InteractionButtons = styled.div`
	display: flex;
	gap: 2rem;
`;
export const BookMark = styled.div`
	display: flex;
	gap: 2rem;
`;
export const Icon = styled.div`
	display: flex;
	align-items: center;
	gap: 0.7rem;
	font-size: 1.3rem;
	svg {
		font-size: 1.3rem;
	}
`;
export const Numbers = styled.span`
	font-size: 0.8rem;
	/* color: ${({ theme }) => theme.textMuted}; */
`;

export const Edit = styled.span`
	position: relative;
	font-size: 1.3rem;
`;

export const DropMenu = styled.ul`
	position: absolute;
	top: 80%;
	right: 0;
	background: ${({ theme }) => theme.container};
	padding: 0.5rem 0;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.9);
	border-radius: 1rem;
	transition: all 0.3s ease;
	font-weight: 600;
	z-index: 2;
`;
export const Item = styled.li``;

export const NavLink = styled(Link)`
	cursor: pointer;
	font-weight: bold;
	padding: 0.5rem 1rem;
	display: flex;
	grid-gap: 10px;
	font-size: 0.85rem;
	color: ${({ theme }) => theme.text};
	align-items: center;
	transition: all 0.3s ease;
	&:hover {
		color: ${({ theme }) => theme.secondColor};
		background: ${({ theme }) => theme.background};
	}
`;

// export const Head = styled.div`
// 	display: flex;
// 	justify-content: space-between;
// `;
// export const User = styled.div`
// 	display: flex;
// 	gap: 1rem;
// `;
// export const ProfilePhoto = styled.div`
// 	img {
// 		width: 45px;
// 		height: 45px;
// 		border-radius: 50%;
// 		object-fit: cover;
// 		cursor: pointer;
// 	}
// `;
// export const Ingo = styled.div``;
// export const Name = styled.h3``;
// export const Small = styled.small``;
// export const Space = styled.span`
// 	margin-left: 2px;
// `;
// export const Edit = styled.span`
// 	position: relative;
// 	font-size: 1.3rem;
// `;

// export const ActionButtons = styled.div`
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	margin: 0.6rem;
// 	font-size: 1.3rem;
// 	font-weight: bold;
// `;
// export const InteractionButtons = styled.div`
// 	display: flex;
// 	gap: 2rem;
// `;
// export const BookMark = styled.div`
// 	display: flex;
// 	gap: 2rem;
// `;
// export const Icon = styled.div`
// 	display: flex;
// 	align-items: center;
// 	gap: 0.7rem;
// 	font-size: 1.3rem;
// 	svg {
// 		font-size: 1.3rem;
// 	}
// `;
// export const Numbers = styled.span`
// 	font-size: 0.8rem;
// 	/* color: ${({ theme }) => theme.textMuted}; */
// `;

// export const Caption = styled.div`
// 	margin-top: 0.8rem;
// 	margin-bottom: 0.7rem;
// 	margin-left: 0.2rem;
// `;

// export const Pharase = styled.p`
// 	font-size: 1rem;
// `;

// export const DropMenu = styled.ul`
// 	position: absolute;
// 	top: 80%;
// 	right: 0;
// 	background: ${({ theme }) => theme.container};
// 	padding: 0.5rem 0;
// 	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.9);
// 	border-radius: 1rem;
// 	transition: all 0.3s ease;
// 	font-weight: 600;
// 	z-index: 2;
// `;
// export const Item = styled.li``;

// export const NavLink = styled(Link)`
// 	cursor: pointer;
// 	font-weight: bold;
// 	padding: 0.5rem 1rem;
// 	display: flex;
// 	grid-gap: 10px;
// 	font-size: 0.85rem;
// 	color: ${({ theme }) => theme.text};
// 	align-items: center;
// 	transition: all 0.3s ease;
// 	&:hover {
// 		color: ${({ theme }) => theme.secondColor};
// 		background: ${({ theme }) => theme.background};
// 	}
// `;
