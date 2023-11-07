import React from "react";
import {
	ActionButtons,
	InteractionButtons,
	Icon,
	Numbers,
	BookMark,
} from "./style";
import {
	BookIcon,
	BookPressIcon,
	CommentIcon,
	DontReplyIcon,
	HeartIcon,
	HeartPressIcon,
	ReplyIcon,
	ShareIcon,
} from "../../icons/iO5Icons.styled";

export default function ActionButtonsContainer({
	type,
	stateEditPost,
	stateLike,
	stateFavorite,
	like,
	favorite,
	comments,
	onPressLike,
	onPressFavorite,
	children,
}) {
	return (
		<>
			{!stateEditPost && (
				<ActionButtons>
					<InteractionButtons>
						<Icon>
							{stateLike ? (
								<HeartPressIcon onClick={onPressLike} />
							) : (
								<HeartIcon onClick={onPressLike} />
							)}
							<Numbers>{like}</Numbers>
						</Icon>
						{!children && (
							<Icon>
								<CommentIcon />
								<Numbers>{comments}</Numbers>
							</Icon>
						)}
					</InteractionButtons>
					<BookMark>
						<BookMark>
							{stateEditPost && (
								<Icon>
									<ShareIcon />
								</Icon>
							)}
							{!children ? (
								type ? (
									<Icon>
										{stateFavorite ? (
											<DontReplyIcon onClick={(evt) => onPressFavorite(evt)} />
										) : (
											<ReplyIcon onClick={(evt) => onPressFavorite(evt)} />
										)}
									</Icon>
								) : (
									<Icon>
										{stateFavorite ? (
											<BookPressIcon onClick={onPressFavorite} />
										) : (
											<BookIcon onClick={onPressFavorite} />
										)}
										<Numbers>{favorite}</Numbers>
									</Icon>
								)
							) : null}
						</BookMark>
					</BookMark>
				</ActionButtons>
			)}
		</>
	);
}
