import React from "react";
import {
	Container,
	Left,
	Right,
	Photo,
	MessageBody,
	Name,
	TextMuted,
	IoNotifications,
	Question,
	Heart,
	Comment,
	At,
	IoPersonAdd,
} from "./style";

export default function Notifications({ key, user, creator, type, date }) {
	return (
		<Container>
			<Left>
				<Photo>
					<img src={creator.photo} alt="" />
				</Photo>
				<MessageBody>
					{type === "COMMENTPOST" ? (
						<Name>
							{creator.firstname + " " + creator.lastname}{" "}
							<Question>comment your post</Question>
						</Name>
					) : (
						<></>
					)}
					{type === "LIKEPOST" ? (
						<Name>
							{creator.firstname + " " + creator.lastname}{" "}
							<Question>like your post</Question>
						</Name>
					) : (
						<></>
					)}
					{type === "MENTIONED" ? (
						<Name>
							{creator.firstname + " " + creator.lastname}{" "}
							<Question>mentioned you in a comment</Question>
						</Name>
					) : (
						<></>
					)}
					{type === "FOLLOW" ? (
						<Name>
							{creator.firstname + " " + creator.lastname}{" "}
							<Question>followed you</Question>
						</Name>
					) : (
						<></>
					)}
					<TextMuted>{date}</TextMuted>
				</MessageBody>
			</Left>
			<Right>
				{type === "COMMENTPOST" ? (
					<Name>
						<Comment />
					</Name>
				) : (
					<></>
				)}
				{type === "LIKEPOST" ? (
					<Name>
						<Heart />
					</Name>
				) : (
					<></>
				)}
				{type === "MENTIONED" ? (
					<Name>
						<At />
					</Name>
				) : (
					<></>
				)}
				{type === "FOLLOW" ? (
					<Name>
						<IoPersonAdd />
					</Name>
				) : (
					<></>
				)}
			</Right>
		</Container>
	);
}
