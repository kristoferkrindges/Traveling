import React, { useState, useContext } from "react";
import {
	Head,
	User,
	ProfilePhoto,
	Ingo,
	Name,
	Small,
	Edit,
	Ellips,
	Photo,
	ActionButtons,
	InteractionButtons,
	BookMark,
	Heart,
	Comment,
	Share,
	Icon,
	Book,
	LikedBy,
	Span,
	P,
	Caption,
	Pharase,
	HarshTag,
	TextMuted,
	DropMenu,
	Item,
	NavLink,
	Space,
	Numbers,
	EditPhoto,
	InputFile,
	DeletIcon,
	LabelFile,
	IoCloudUpload,
	SaveContainer,
	HeartPress,
	BookPress,
} from "./style";

import ButtonPrimary from "../ButtonPrimary";

import { PostContext } from "../../context/postContext";
import { Context as userContext } from "../../context/userContext";

export default function Feeds({
	type,
	user,
	id,
	photo,
	time,
	likes,
	comments,
	pharase,
	favorites,
	pressLike,
	pressFavorite,
}) {
	const [dropdown, setDropdown] = useState(false);
	const { edit, HandlerEdit } = useContext(PostContext);
	const [like, setLike] = useState(likes);
	const [stateLike, setStateLike] = useState(pressLike);
	const [favorite, setFavorite] = useState(favorites);
	const [stateFavorite, setStateFavorite] = useState(pressFavorite);
	const { formatTimeDifference, likePost, favoritePost } =
		useContext(userContext);
	function HandlerOpen() {
		if (dropdown == false) {
			setDropdown(true);
		} else {
			setDropdown(false);
		}
	}

	async function onPressLike() {
		if (stateLike) {
			await likePost(id);
			setStateLike(false);
			if (like > 0) {
				setLike(like - 1);
			}
		} else {
			await likePost(id);
			setStateLike(true);
			setLike(like + 1);
		}
	}

	async function onPressFavorite() {
		if (stateFavorite) {
			await favoritePost(id);
			setStateFavorite(false);
			if (favorite > 0) {
				setFavorite(favorite - 1);
			}
		} else {
			await favoritePost(id);
			setStateFavorite(true);
			setFavorite(favorite + 1);
		}
	}

	return (
		<>
			<Head>
				<User>
					<ProfilePhoto>
						<img src={user.photo} alt="" />
					</ProfilePhoto>
					<Ingo>
						<Name>{user.firstname + " " + user.lastname}</Name>
						<Small>{formatTimeDifference(time)}</Small>
					</Ingo>
				</User>
				<Edit>
					<Ellips onClick={HandlerOpen} />
					{dropdown ? (
						<DropMenu>
							<Item>
								<NavLink>Report</NavLink>
								<NavLink onClick={HandlerEdit}>Edit</NavLink>
							</Item>
						</DropMenu>
					) : (
						<></>
					)}
				</Edit>
			</Head>
			<Caption>
				<Pharase>
					{pharase}
					{/* <HarshTag> #{user.at}</HarshTag> */}
				</Pharase>
			</Caption>
			<Photo>
				<img
					src={photo}
					style={edit ? { filter: `brightness(0.25) opacity(0.75)` } : {}}
					alt=""
				/>
				{edit ? (
					<EditPhoto>
						<InputFile id="uploadBtn" type="file" />
						<LabelFile for="uploadBtn">
							<IoCloudUpload />
						</LabelFile>
						<DeletIcon />
					</EditPhoto>
				) : (
					<></>
				)}
			</Photo>
			{!edit ? (
				<ActionButtons>
					<InteractionButtons>
						<Icon>
							{stateLike ? (
								<HeartPress onClick={onPressLike} />
							) : (
								<Heart onClick={onPressLike} />
							)}
							<Numbers>{like}</Numbers>
						</Icon>
						<Icon>
							<Comment />
							<Numbers>{comments}</Numbers>
						</Icon>
					</InteractionButtons>
					<BookMark>
						<Icon>
							<Share />
						</Icon>
						<Icon>
							{stateFavorite ? (
								<BookPress onClick={onPressFavorite} />
							) : (
								<Book onClick={onPressFavorite} />
							)}
							<Numbers>{favorite}</Numbers>
						</Icon>
					</BookMark>
				</ActionButtons>
			) : (
				<></>
			)}
			{!edit ? (
				<LikedBy>
					<Span>
						<img
							src={
								"https://i.scdn.co/image/ab67706c0000da84c498e529d7a388a8c655eb33"
							}
							alt=""
						/>
					</Span>
					<Span>
						<img
							src={
								"https://i.pinimg.com/736x/2e/c2/28/2ec228e768083b48b308247288ad3b0e.jpg"
							}
							alt=""
						/>
					</Span>
					<Span>
						<img
							src={
								"https://upload.wikimedia.org/wikipedia/commons/3/3a/Ralph_Macchio_Photo_Op_GalaxyCon_Richmond_2019.jpg"
							}
							alt=""
						/>
					</Span>
					<P>
						Liked by <b>Samanta Larusso </b> and <b>{comments} others</b>
					</P>
				</LikedBy>
			) : (
				<></>
			)}
			{!edit ? (
				!type ? (
					<TextMuted>View all {comments} comments</TextMuted>
				) : (
					<></>
				)
			) : (
				<></>
			)}

			{edit ? (
				<SaveContainer>
					<ButtonPrimary label="Save" click={HandlerEdit} />
				</SaveContainer>
			) : (
				<></>
			)}
		</>
	);
}
