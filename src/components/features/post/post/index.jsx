import React, { useState, useContext } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { PostContext } from "../../../../contexts/postContext";
import { UserContext } from "../../../../contexts/userContext";
import { AssistantContext } from "../../../../contexts/assistantContext";

import LoaderModal from "../../../modals/loader";
import {
	PostContainer,
	EditPhotoNoPhoto,
	LikedBy,
	Span,
	P,
	MiniAvatar,
	PeopleLike,
	SaveContainer,
	TextMuted,
} from "./style";
import HeadPostComment from "../../../containers/headPostComment";
import CaptionPhraseContainer from "../../../containers/captionPhrase";
import {
	EditPhoto,
	InputFile,
	LabelFile,
	Photo,
	PreviewPhoto,
} from "../modalCreatePost/style";
import {
	CloudUploadIcon,
	DeletIcon,
	ImageIcon,
} from "../../../icons/iO5Icons.styled";
import ActionButtonsContainer from "../../../containers/actionButtons";
import { PrimaryButton } from "../../../buttons/primaryButton.styled";
import ViewImageModal from "../../../modals/viewImage";

export default function Post({
	type,
	user,
	id,
	photo,
	time,
	likes,
	comments,
	phrase,
	favorites,
	pressLike,
	pressFavorite,
	alreadyEdit,
	usersLikes,
	deletPostOne,
}) {
	const { update, deletePost } = useContext(PostContext);
	const { userInfo, likePost, favoritePost } = useContext(UserContext);
	const { formatTime, formatTimeDifference } = useContext(AssistantContext);

	const navigate = useNavigate();
	const { pathname } = useLocation();

	const [like, setLike] = useState(likes);
	const [progress, setProgress] = useState(true);
	const [file, setFile] = useState();
	const [favorite, setFavorite] = useState(favorites);
	const [showCardProfile, setShowCardProfile] = useState(false);
	const [stateLike, setStateLike] = useState(pressLike);
	const [stateFavorite, setStateFavorite] = useState(pressFavorite);
	const [statePhoto, setStatePhoto] = useState(photo);
	const [stateEdit, setStateEdit] = useState(alreadyEdit);
	const [statePhrase, setStatePhrase] = useState(phrase);
	const [stateEditPost, setStateEditPost] = useState(false);
	const [stateModalImage, setStateModalImage] = useState(false);
	const [stateTime] = useState(time);

	const onPressLike = async (evt) => {
		evt.stopPropagation();
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
		console.log("clicou");
		return;
	};

	const onPressFavorite = async (evt) => {
		evt.stopPropagation();
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
		return;
	};

	const updatePost = async (evt) => {
		evt.stopPropagation();
		setProgress(false);
		const post = {
			phrase: statePhrase,
			img: statePhoto,
			datePublic: formatTime(),
			creatorId: "",
		};
		await update(id, post, file);
		setProgress(true);
		handlerEdit();
		setStateEdit(true);
		return;
	};
	const handlerDeletePost = (evt) => {
		evt.stopPropagation();
		deletePost(id);
		deletPostOne();
		return;
	};

	const handlerDeletePhoto = () => {
		setStatePhoto("");
		setFile("");
		return;
	};

	const handlerPhoto = (e) => {
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
		return;
	};

	const handlerEdit = () => {
		stateEditPost ? setStateEditPost(false) : setStateEditPost(true);
		return;
	};
	const handlerRoutePost = (evt) => {
		evt.stopPropagation();
		if (pathname !== `/post/${id}`) {
			navigate(`/post/${id}`);
		}
		return;
	};

	const handlerStopPropaganation = (evt) => {
		evt.stopPropagation();
	};

	const handlerRouteProfile = (evt, at) => {
		evt.stopPropagation();
		navigate(`/profile/${at}`);
		return;
	};
	const handlerCloseModalPhoto = (evt) => {
		evt.stopPropagation();
		console.log("clicou");
		stateModalImage ? setStateModalImage(false) : setStateModalImage(true);
	};
	return (
		<>
			{progress ? (
				<PostContainer onClick={(evt) => handlerRoutePost(evt)}>
					<HeadPostComment
						user={user}
						time={
							stateEdit
								? formatTimeDifference(stateTime) + " Edited"
								: formatTimeDifference(stateTime)
						}
						handlerEdit={handlerEdit}
						handlerDelet={handlerDeletePost}
						handlerRouteProfile={handlerRouteProfile}
						showCardProfile={showCardProfile}
						setShowCardProfile={setShowCardProfile}
						type={false}
					/>
					<CaptionPhraseContainer
						stateEditPost={stateEditPost}
						setStatePhrase={setStatePhrase}
						statePhrase={statePhrase}
						stop={handlerStopPropaganation}
					/>
					<Photo onClick={handlerStopPropaganation}>
						{stateModalImage && (
							<ViewImageModal
								image={statePhoto}
								handlerCloseModalPhoto={handlerCloseModalPhoto}
							/>
						)}
						<PreviewPhoto
							onClick={handlerCloseModalPhoto}
							src={statePhoto}
							style={
								stateEditPost
									? { filter: `brightness(0.25) opacity(0.75)` }
									: null
							}
						/>
						{stateEditPost ? (
							statePhoto ? (
								<EditPhoto>
									<InputFile
										id="uploadBtn"
										type="file"
										onChange={handlerPhoto}
									/>
									<LabelFile for="uploadBtn">
										<CloudUploadIcon />
									</LabelFile>
									<DeletIcon onClick={handlerDeletePhoto} />
								</EditPhoto>
							) : (
								<EditPhotoNoPhoto>
									<InputFile
										id="uploadBtn"
										type="file"
										onChange={handlerPhoto}
									/>
									<LabelFile for="uploadBtn">
										<ImageIcon />
									</LabelFile>
								</EditPhotoNoPhoto>
							)
						) : null}
					</Photo>
					<ActionButtonsContainer
						type={false}
						onPressLike={onPressLike}
						like={like}
						stateEditPost={stateEditPost}
						stateLike={stateLike}
						comments={comments}
						stateFavorite={stateFavorite}
						onPressFavorite={onPressFavorite}
						favorite={favorite}
					/>
					{!stateEditPost && usersLikes && usersLikes.length > 0 && (
						<LikedBy>
							{usersLikes.map((value, key) => (
								<Span>
									<MiniAvatar
										onClick={(evt) => handlerRouteProfile(evt, value.at)}
										src={value.photo}
										alt=""
									/>
								</Span>
							))}

							<P>
								Liked by{" "}
								<PeopleLike
									onClick={(evt) =>
										handlerRouteProfile(
											evt,
											usersLikes[usersLikes.length - 1].at
										)
									}
								>
									<b>
										{usersLikes[usersLikes.length - 1]
											? usersLikes[usersLikes.length - 1].at === userInfo.at
												? "You"
												: usersLikes[usersLikes.length - 1].firstname
											: null}{" "}
									</b>{" "}
								</PeopleLike>
								{usersLikes.length - 1 > 0 ? "and " : null}
								{usersLikes.length - 1 > 0 ? (
									<b>
										{usersLikes.length - 1} other
										{usersLikes.length - 1 > 1 ? "s" : null}
									</b>
								) : null}
							</P>
						</LikedBy>
					)}
					{!stateEditPost && !type && (
						<TextMuted>View all {comments} comments</TextMuted>
					)}

					{stateEditPost && (
						<SaveContainer>
							<PrimaryButton onClick={updatePost}>Save</PrimaryButton>
						</SaveContainer>
					)}
				</PostContainer>
			) : (
				<LoaderModal />
			)}
		</>
	);
}
