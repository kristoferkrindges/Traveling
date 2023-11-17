import React from "react";
import {
	NotificationContainer,
	Left,
	Right,
	Photo,
	MessageBody,
	Name,
	TextMuted,
	Question,
} from "./style";
import {
	BookPressIcon,
	CommentPressIcon,
	FollowingsIcon,
	HeartPressIcon,
	ReplyIcon,
} from "../../icons/iO5Icons.styled";
import { AtIcon } from "../../icons/rIIcons.styled";
import { useNavigate } from "react-router-dom";
import { AvatarPhoto } from "../../images/avatar.styled";

export default function Notifications({ user, creator, type, date }) {
	const navigate = useNavigate();

	const handlerRouted = (at) => {
		navigate(`/profile/${at}`);
	};
	return (
		<NotificationContainer>
			<Left>
				<AvatarPhoto
					src={creator.photo}
					onClick={() => handlerRouted(creator.at)}
				/>
				<MessageBody>
					{type === "COMMENTPOST" && (
						<Name onClick={() => handlerRouted(creator.at)}>
							{creator.firstname + " " + creator.lastname}{" "}
							<Question>comment your post</Question>
						</Name>
					)}

					{type === "REPLYCOMMENT" && (
						<Name onClick={() => handlerRouted(creator.at)}>
							{creator.firstname + " " + creator.lastname}{" "}
							<Question>reply your comment</Question>
						</Name>
					)}

					{type === "LIKEPOST" && (
						<Name onClick={() => handlerRouted(creator.at)}>
							{creator.firstname + " " + creator.lastname}{" "}
							<Question>like your post</Question>
						</Name>
					)}
					{type === "MENTIONED" && (
						<Name onClick={() => handlerRouted(creator.at)}>
							{creator.firstname + " " + creator.lastname}{" "}
							<Question>mentioned you in a comment</Question>
						</Name>
					)}
					{type === "FOLLOW" && (
						<Name onClick={() => handlerRouted(creator.at)}>
							{creator.firstname + " " + creator.lastname}{" "}
							<Question>followed you</Question>
						</Name>
					)}
					{type === "FAVORITEPOST" && (
						<Name onClick={() => handlerRouted(creator.at)}>
							{creator.firstname + " " + creator.lastname}{" "}
							<Question>favorite your post</Question>
						</Name>
					)}
					<TextMuted>{date}</TextMuted>
				</MessageBody>
			</Left>
			<Right>
				{type === "COMMENTPOST" && (
					<Name>
						<CommentPressIcon />
					</Name>
				)}
				{type === "REPLYCOMMENT" && (
					<Name>
						<ReplyIcon />
					</Name>
				)}
				{type === "LIKEPOST" && (
					<Name>
						<HeartPressIcon />
					</Name>
				)}
				{type === "MENTIONED" && (
					<Name>
						<AtIcon />
					</Name>
				)}
				{type === "FOLLOW" && (
					<Name>
						<FollowingsIcon />
					</Name>
				)}
				{type === "FAVORITEPOST" && (
					<Name>
						<BookPressIcon />
					</Name>
				)}
			</Right>
		</NotificationContainer>
	);
}
