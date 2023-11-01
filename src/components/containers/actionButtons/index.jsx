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
	HeartIcon,
	HeartPressIcon,
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
						<Icon>
							<CommentIcon />
							<Numbers>{comments}</Numbers>
						</Icon>
					</InteractionButtons>
					<BookMark>
						<BookMark>
							{stateEditPost && (
								<Icon>
									<ShareIcon />
								</Icon>
							)}
							<Icon>
								{stateFavorite ? (
									<BookPressIcon onClick={onPressFavorite} />
								) : (
									<BookIcon onClick={onPressFavorite} />
								)}
								<Numbers>{favorite}</Numbers>
							</Icon>
						</BookMark>
					</BookMark>
				</ActionButtons>
			)}
		</>
	);
}
