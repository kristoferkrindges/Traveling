import React, { useState } from "react";
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
import CardFollowingsAndFollowers from "../../features/user/cardFollowingsAndFollowers";

export default function ActionButtonsContainer({
	id,
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
	const [
		stateModalFollowingsAndFollowers,
		setStateModalFollowingsAndFollowers,
	] = useState(undefined);
	return (
		<>
			{!stateEditPost && (
				<ActionButtons>
					{stateModalFollowingsAndFollowers !== undefined && (
						<CardFollowingsAndFollowers
							id={id}
							type={stateModalFollowingsAndFollowers}
							setStateModalFollowingsAndFollowers={
								setStateModalFollowingsAndFollowers
							}
						/>
					)}
					<InteractionButtons>
						<Icon>
							{stateLike ? (
								<HeartPressIcon onClick={onPressLike} />
							) : (
								<HeartIcon onClick={onPressLike} />
							)}
							<Numbers
								onClick={() => setStateModalFollowingsAndFollowers("Likes")}
							>
								{like}
							</Numbers>
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
										<Numbers
											onClick={() =>
												setStateModalFollowingsAndFollowers("Favorites")
											}
										>
											{favorite}
										</Numbers>
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
