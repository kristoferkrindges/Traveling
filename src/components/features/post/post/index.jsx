import React, { useState, useContext } from "react";

import { PostContext } from "../../../../contexts/postContext";
import { UserContext } from "../../../../contexts/userContext";
import { ModalContext } from "../../../../contexts/modalContext";
import { AssistantContext } from "../../../../contexts/assistantContext";

import ModalLoader from "../../../modals/loader";
import { Container, EditPhotoNoPhoto, Head } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import HeadPostComment from "../../../containers/headPostComment";
import CaptionPhraseContainer from "../../../containers/captionPhrase";
import {
	EditPhoto,
	InputFile,
	LabelFile,
	Photo,
	PreviewPhoto,
} from "../modalCreatePost/style";
import { CloudUploadIcon, DeletIcon } from "../../../icons/iO5Icons.styled";

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
}) {
	const { update, deletePost } = useContext(PostContext);
	const { userInfo, likePost, favoritePost } = useContext(UserContext);
	const { handlerEllips } = useContext(ModalContext);
	const { formattedDateTime, formatTimeDifference } =
		useContext(AssistantContext);

	const navigate = useNavigate();
	const { pathname } = useLocation();

	const [like, setLike] = useState(likes);
	const [progress, setProgress] = useState(true);
	const [file, setFile] = useState();
	const [favorite, setFavorite] = useState(favorites);
	const [stateLike, setStateLike] = useState(pressLike);
	const [stateFavorite, setStateFavorite] = useState(pressFavorite);
	const [statePhoto, setStatePhoto] = useState(photo);
	const [stateEdit, setStateEdit] = useState(alreadyEdit);
	const [statePhrase, setStatePhrase] = useState(phrase);
	const [stateEditPost, setStateEditPost] = useState(false);

	const onPressLike = async () => {
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
		return;
	};

	const onPressFavorite = async () => {
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
		evt.preventDefault();
		setProgress(false);
		const post = {
			phrase: statePhrase,
			img: "",
			datePublic: formattedDateTime(),
			creatorId: "",
		};
		await update(id, post, file);
		setProgress(true);
		handlerEdit();
		return;
	};

	const handlerDeletePost = () => {
		deletePost(id);
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

	const handlerEdit = (evt) => {
		// evt.stopPropagation();
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
	return (
		<>
			{progress ? (
				<Container onClick={(evt) => handlerRoutePost(evt)}>
					<HeadPostComment
						photo={user.photo}
						name={user.firstname + " " + user.lastname}
						time={
							stateEdit
								? formatTimeDifference(time) + " Edited"
								: formatTimeDifference(time)
						}
						at={user.at}
						handlerEdit={handlerEdit}
						handlerDelet={handlerDeletePost}
					/>
					<CaptionPhraseContainer
						stateEditPost={stateEditPost}
						setStatePhrase={setStatePhrase}
						statePhrase={statePhrase}
					/>
					<Photo>
						<PreviewPhoto
							src={statePhoto}
							style={
								stateEditPost
									? { filter: `brightness(0.25) opacity(0.75)` }
									: null
							}
							alt=""
						/>
						{stateEditPost ? (
							photo ? (
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
										<CloudUploadIcon />
									</LabelFile>
								</EditPhotoNoPhoto>
							)
						) : null}
					</Photo>
				</Container>
			) : (
				<ModalLoader />
			)}
		</>
	);
}
