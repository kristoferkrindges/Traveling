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
	Trash,
	ToReport,
	EditPhotoNoPhoto,
	Form,
	TextArea,
} from "./style";

import ButtonPrimary from "../ButtonPrimary";
import ModalLoader from "../Modal/ModalLoader";

import { PostContext } from "../../context/postContext";
import { Context as userContext } from "../../context/userContext";
import { Link, useNavigate } from "react-router-dom";
import { format } from "date-fns-tz";

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
	usersLikes,
}) {
	const [dropdown, setDropdown] = useState(false);
	const [progress, setProgress] = useState(true);
	const { update, deletePost } = useContext(PostContext);
	const [like, setLike] = useState(likes);
	const [stateLike, setStateLike] = useState(pressLike);
	const [favorite, setFavorite] = useState(favorites);
	const [stateFavorite, setStateFavorite] = useState(pressFavorite);
	const [statePhoto, setStatePhoto] = useState(photo);
	const [stateEdit, setStateEdit] = useState(alreadyEdit);
	const [statePharase, setStatePharase] = useState(pharase);
	const [file, setFile] = useState();
	const { userInfo, formatTimeDifference, likePost, favoritePost } =
		useContext(userContext);
	const history = useNavigate();
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
	async function updatePost(evt) {
		evt.preventDefault();
		setProgress(false);
		const brasiliaTimeZone = "America/Sao_Paulo";
		const brasiliaCurrentDateTime = new Date();
		const formattedDateTime = format(
			brasiliaCurrentDateTime,
			"yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
			{ timeZone: brasiliaTimeZone }
		);
		const post = {
			phrase: statePharase,
			img: "",
			datePublic: formattedDateTime,
			creatorId: "",
		};
		await update(id, post, file);
		setProgress(true);
		HandlerEdit();
	}
	function clickButtonEdit(evt) {
		evt.preventDefault();
		HandlerEdit();
		HandlerOpen(evt);
	}
	const handlePhoto = (e) => {
		const file = e.target.files[0];
		if (!file) {
			return;
		} else {
			setFile(file);
			const reader = new FileReader();
			reader.onload = (e) => {
				setStatePhoto(e.target.result);
			};

			reader.readAsDataURL(file);
		}
	};
	const deletePhoto = (evt) => {
		evt.preventDefault();
		setStatePhoto("");
		setFile("");
	};
	return (
		<>
			{progress ? (
				<>
					<Link to={!stateEditPost ? `/post/${id}` : null}>
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
											{user.at === userInfo.at ? (
												<>
													<NavLink onClick={(evt) => clickButtonEdit(evt)}>
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
					</Link>
					<Link to={!stateEditPost ? `/post/${id}` : null}>
						<Caption>
							{stateEditPost ? (
								<Form>
									<TextArea
										rows="1"
										value={statePharase}
										onChange={(e) => {
											setStatePharase(e.target.value);
										}}
										maxLength={140}
									></TextArea>
								</Form>
							) : (
								<Pharase>{statePharase}</Pharase>
							)}
						</Caption>
					</Link>
					<Link to={!stateEditPost ? `/post/${id}` : null}>
						<Photo>
							<img
								src={statePhoto}
								style={
									stateEditPost
										? { filter: `brightness(0.25) opacity(0.75)` }
										: {}
								}
								alt=""
							/>
							{stateEditPost ? (
								photo ? (
									<EditPhoto>
										<InputFile
											id="uploadBtn"
											type="file"
											onChange={handlePhoto}
										/>
										<LabelFile for="uploadBtn">
											<IoCloudUpload />
										</LabelFile>
										<DeletIcon onClick={deletePhoto} />
									</EditPhoto>
								) : (
									<EditPhotoNoPhoto>
										<InputFile
											id="uploadBtn"
											type="file"
											onChange={handlePhoto}
										/>
										<LabelFile for="uploadBtn">
											<IoCloudUpload />
										</LabelFile>
									</EditPhotoNoPhoto>
								)
							) : (
								<></>
							)}
						</Photo>
					</Link>
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
						usersLikes && usersLikes.length > 0 ? (
							<LikedBy>
								{usersLikes.map((value, key) => (
									<Span>
										<img src={value.photo} alt="" />
									</Span>
								))}

								<P>
									Liked by{" "}
									<b>
										{usersLikes[usersLikes.length - 1]
											? usersLikes[usersLikes.length - 1].firstname
											: null}{" "}
									</b>{" "}
									and <b>{comments} others</b>
								</P>
							</LikedBy>
						) : null
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
							<ButtonPrimary label="Save" click={updatePost} />
						</SaveContainer>
					) : (
						<></>
					)}
				</>
			) : (
				<ModalLoader />
			)}
		</>
	);
}
