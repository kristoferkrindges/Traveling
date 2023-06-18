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

export default function Notifications({ name, photo, type, date }) {
	return (
		<Container>
			<Left>
				<Photo>
					<img src={photo} alt="" />
				</Photo>
				<MessageBody>
					{type == "Comment" ? (
						<Name>
							{name} <Question>comment your post</Question>
						</Name>
					) : (
						<></>
					)}
					{type == "Like" ? (
						<Name>
							{name} <Question>like your post</Question>
						</Name>
					) : (
						<></>
					)}
					{type == "Mention" ? (
						<Name>
							{name} <Question>mentioned you in a comment</Question>
						</Name>
					) : (
						<></>
					)}
					{type == "Follow" ? (
						<Name>
							{name} <Question>followed you</Question>
						</Name>
					) : (
						<></>
					)}
					<TextMuted>{date}</TextMuted>
				</MessageBody>
			</Left>
			<Right>
				{type == "Comment" ? (
					<Name>
						<Comment />
					</Name>
				) : (
					<></>
				)}
				{type == "Like" ? (
					<Name>
						<Heart />
					</Name>
				) : (
					<></>
				)}
				{type == "Mention" ? (
					<Name>
						<At />
					</Name>
				) : (
					<></>
				)}
				{type == "Follow" ? (
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
