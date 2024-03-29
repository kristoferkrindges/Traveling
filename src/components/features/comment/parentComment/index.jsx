import React, { useState, useContext, useEffect } from "react";
import { Controller, Extends, Border } from "./style";
import { AssistantContext } from "../../../../contexts/assistantContext";
import { AvatarPhoto } from "../../../images/avatar.styled";
import { Right, TopContainer } from "../comment/style";
import HeadPostComment from "../../../containers/headPostComment";
import CaptionPhraseContainer from "../../../containers/captionPhrase";
import { SaveContainer } from "../../post/post/style";
import { PrimaryButton } from "../../../buttons/primaryButton.styled";
import { toast } from "react-toastify";
import { CommentContext } from "../../../../contexts/commentContext";
import ActionButtonsContainer from "../../../containers/actionButtons";
import AvatarNone from "../../../../assets/images/avatarnone.png";

export default function ParentComment({
	user,
	id,
	time,
	likes,
	phrase,
	comments,
	deleteComment,
	alreadyEdit,
	postId,
	pressLike,
	likeComment,
	handlerRouteProfile,
	handlerStopPropaganation,
}) {
	const { formatTime, formatTimeDifference } = useContext(AssistantContext);
	const { updateComment } = useContext(CommentContext);

	const [progress, setProgress] = useState(false);
	const [showCardProfile, setShowCardProfile] = useState(false);
	const [stateUser, setStateUser] = useState(user);
	const [stateEdit, setStateEdit] = useState(false);
	const [timeDate, setTimeDate] = useState(time);
	const [alreadyEditComment, setAlreadyEditComment] = useState(alreadyEdit);
	const [statePhrase, setStatePhrase] = useState(phrase);
	const [stateLike, setStateLike] = useState(pressLike);
	const [stateCountLike, setStateCountLike] = useState(likes);
	const [stateParentComment, setStateParentComment] = useState(false);

	useEffect(() => {
		setStatePhrase(phrase);
		setStateUser(user);
		setTimeDate(time);
		setAlreadyEditComment(alreadyEdit);
		setStateLike(pressLike);
		setStateCountLike(likes);
	}, [phrase, user, time, alreadyEdit, pressLike, likes]);

	async function onPressLike() {
		if (stateLike) {
			await likeComment(id);
			setStateLike(false);
			if (stateCountLike > 0) {
				setStateCountLike(stateCountLike - 1);
			}
		} else {
			await likeComment(id);
			setStateLike(true);
			setStateCountLike(stateCountLike + 1);
		}
	}

	const handlerEdit = () => {
		stateEdit ? setStateEdit(false) : setStateEdit(true);
		return;
	};

	const update = async (evt) => {
		evt.stopPropagation();
		setProgress(true);
		if (statePhrase) {
			const newComment = {
				img: "",
				phrase: statePhrase,
				datePublic: formatTime(),
				postId: postId,
			};
			await updateComment(id, newComment);
			setAlreadyEditComment(true);
			setProgress(false);
		} else {
			toast.error("There is nothing to be comment");
			setStatePhrase(phrase);
		}
		handlerEdit();
		return;
	};

	return (
		<Controller>
			<Border />
			<Extends>
				<AvatarPhoto
					src={
						stateUser.photo || !stateUser.photo === ""
							? stateUser.photo
							: AvatarNone
					}
				/>
			</Extends>
			<Right>
				<TopContainer>
					<HeadPostComment
						type={true}
						user={stateUser}
						time={
							alreadyEditComment
								? formatTimeDifference(timeDate) + " Edited"
								: formatTimeDifference(timeDate)
						}
						handlerDelet={(evt) => deleteComment(evt, id)}
						handlerEdit={handlerEdit}
						handlerRouteProfile={handlerRouteProfile}
						setShowCardProfile={setShowCardProfile}
						showCardProfile={showCardProfile}
					/>
				</TopContainer>
				<CaptionPhraseContainer
					stateEditPost={stateEdit}
					setStatePhrase={setStatePhrase}
					statePhrase={statePhrase}
					stop={handlerStopPropaganation}
				/>
				{stateEdit ? (
					<SaveContainer>
						<PrimaryButton onClick={(evt) => update(evt)}>Save</PrimaryButton>
					</SaveContainer>
				) : (
					<ActionButtonsContainer
						type={true}
						onPressLike={onPressLike}
						like={stateCountLike}
						stateEditPost={stateEdit}
						stateLike={stateLike}
						comments={comments}
						stateFavorite={stateParentComment}
						children={true}
					/>
				)}
			</Right>
		</Controller>
	);
}
