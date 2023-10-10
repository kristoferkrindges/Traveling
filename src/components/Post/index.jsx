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
	TextMuted,
	DropMenu,
	Item,
	NavLink,
	Numbers,
	EditPhoto,
	InputFile,
	DeletIcon,
	LabelFile,
	IoCloudUpload,
	SaveContainer,
	HeartPress,
	BookPress,
	EditPost,
	ToHide,
	Trash,
	ToReport,
} from "./style";

import ButtonPrimary from "../ButtonPrimary";

import { PostContext } from "../../context/postContext";
import { Context as userContext } from "../../context/userContext";
import { Link } from "react-router-dom";

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
	alreadyEdit,
}) {
	const [dropdown, setDropdown] = useState(false);
	const { update, deletePost } = useContext(PostContext);
	const [like, setLike] = useState(likes);
	const [stateLike, setStateLike] = useState(pressLike);
	const [favorite, setFavorite] = useState(favorites);
	const [stateFavorite, setStateFavorite] = useState(pressFavorite);
	const [linkPhoto, setLinkPhoto] = useState(photo);
	const [stateEdit, setStateEdit] = useState(alreadyEdit);
	const { userInfo, formatTimeDifference, likePost, favoritePost } =
		useContext(userContext);
	const [stateEditPost, setStateEditPost] = useState(false);
	function HandlerEdit() {
		if (stateEditPost === false) {
			setStateEditPost(true);
		} else {
			setStateEditPost(false);
		}
	}
	function HandlerOpen(evt) {
		evt.preventDefault();
		if (dropdown === false) {
			setDropdown(true);
		} else {
			setDropdown(false);
		}
	}

	async function updatePost() {
		await updatePost;
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
	function clickDeletePost(evt) {
		evt.preventDefault();
		HandlerOpen(evt);
		deletePost(id);
	}
	return (
		<Link to={`/post/${id}`}>
			<Head>
				<User>
					<Link to={`/profile/${user.at}`}>
						<ProfilePhoto>
							<img src={user.photo} alt="" />
						</ProfilePhoto>
					</Link>
					<Ingo>
						<Link to={`/profile/${user.at}`}>
							<Name>{user.firstname + " " + user.lastname}</Name>
						</Link>
						<Small>
							{formatTimeDifference(time)} {stateEdit && "Edit"}
						</Small>
					</Ingo>
				</User>
				<Edit>
					<Ellips onClick={(evt) => HandlerOpen(evt)} />
					{dropdown ? (
						<DropMenu>
							<Item>
								<NavLink>
									<ToReport /> Report
								</NavLink>
								<NavLink>
									{" "}
									<ToHide /> Hide
								</NavLink>
								{user.at === userInfo.at ? (
									<>
										<NavLink onClick={HandlerEdit}>
											{" "}
											<EditPost /> Edit
										</NavLink>
										<NavLink onClick={(evt) => clickDeletePost(evt)}>
											<Trash /> Delete
										</NavLink>
									</>
								) : null}
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
					style={
						stateEditPost ? { filter: `brightness(0.25) opacity(0.75)` } : {}
					}
					alt=""
				/>
				{stateEditPost ? (
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
			{!stateEditPost ? (
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
						<Link to={`/post/${id}`}>
							<Icon>
								<Comment />
								<Numbers>{comments}</Numbers>
							</Icon>
						</Link>
					</InteractionButtons>
					<BookMark>
						{stateEditPost ? (
							<Icon>
								<Share />
							</Icon>
						) : null}
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
			{!stateEditPost ? (
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
			{!stateEditPost ? (
				!type ? (
					<Link to={`/post/${id}`}>
						<TextMuted>View all {comments} comments</TextMuted>
					</Link>
				) : (
					<></>
				)
			) : (
				<></>
			)}

			{stateEditPost ? (
				<SaveContainer>
					<ButtonPrimary label="Save" click={HandlerEdit} />
				</SaveContainer>
			) : (
				<></>
			)}
		</Link>
	);
}
