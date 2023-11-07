import React, { useState, useContext } from "react";
import { PostContainer, SaveContainer } from "../../post/post/style";
import HeadPostComment from "../../../containers/headPostComment";
import {
	Border,
	CommentContainer,
	Controller,
	Extends,
	Right,
	TopContainer,
} from "./style";
import { AvatarPhoto } from "../../../images/avatar.styled";
import { useNavigate } from "react-router-dom";
import CaptionPhraseContainer from "../../../containers/captionPhrase";
import { PrimaryButton } from "../../../buttons/primaryButton.styled";
import ActionButtonsContainer from "../../../containers/actionButtons";
import { CommentContext } from "../../../../contexts/commentContext";
import LoaderModal from "../../../modals/loader";
import { AssistantContext } from "../../../../contexts/assistantContext";
import ParentComment from "../parentComment";
import CreateComment from "../createComment";
import { toast } from "react-toastify";

export default function Comment({
	id,
	comments,
	user,
	time,
	alreadyEdit,
	phrase,
	pressLike,
	likes,
	postId,
	onDeletComment,
}) {
	const navigate = useNavigate();
	const { deletComment, updateComment, findChildsComments, likeComment } =
		useContext(CommentContext);
	const { formatTime, formatTimeDifference } = useContext(AssistantContext);

	const [progress, setProgress] = useState(false);
	const [showCardProfile, setShowCardProfile] = useState(false);
	const [stateEdit, setStateEdit] = useState(false);
	const [statePhoto, setStatePhoto] = useState(user ? user.photo : "");
	const [timeDate, setTimeDate] = useState(time);
	const [alreadyEditComment, setAlreadyEditComment] = useState(alreadyEdit);
	const [statePhrase, setStatePhrase] = useState(phrase);
	const [stateLike, setStateLike] = useState(pressLike);
	const [stateCountLike, setStateCountLike] = useState(likes);
	const [stateParentComment, setStateParentComment] = useState(false);
	const [parentsComments, setParentsComments] = useState();
	const [progressChildren, setProgressChildren] = useState(false);

	const handlerRouteProfile = (evt, at) => {
		evt.stopPropagation();
		navigate(`/profile/${at}`);
		return;
	};

	const handlerStopPropaganation = (evt) => {
		evt.stopPropagation();
	};

	const handlerDelet = async (evt, commentId, option) => {
		evt.stopPropagation();
		if (option) {
			setParentsComments((parentsComments) =>
				parentsComments.filter((comment) => comment.id !== commentId)
			);
		}
		await delet(commentId);
	};

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

	const delet = async (commentId) => {
		setProgress(true);
		await deletComment(commentId);
		onDeletComment();
	};

	const replyComment = async (evt) => {
		evt.preventDefault();
		if (stateParentComment) {
			setStateParentComment(false);
		} else {
			setProgressChildren(true);
			await searchParentsComments();
			setStateParentComment(true);
			setProgressChildren(false);
		}
	};

	const searchParentsComments = async () => {
		const parents = await findChildsComments(id);
		setParentsComments(parents);
	};

	const onPressLike = async () => {
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
	};

	return (
		<>
			{progress || progressChildren ? (
				<LoaderModal />
			) : (
				<CommentContainer>
					<Controller>
						<Extends>
							<AvatarPhoto src={statePhoto} />
							<Border />
						</Extends>
						<Right>
							<TopContainer>
								<HeadPostComment
									type={true}
									user={user}
									time={
										alreadyEditComment
											? formatTimeDifference(timeDate) + " Edited"
											: formatTimeDifference(timeDate)
									}
									handlerDelet={(evt) => handlerDelet(evt, id, false)}
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
									<PrimaryButton onClick={(evt) => update(evt)}>
										Save
									</PrimaryButton>
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
									onPressFavorite={replyComment}
								/>
							)}
							{!stateEdit &&
								stateParentComment &&
								parentsComments.length > 0 &&
								parentsComments.map((value, key) => (
									<ParentComment
										key={key}
										id={value.id}
										user={value.userAllResponse}
										time={value.datepublic}
										likes={value.likes}
										comments={value.comments}
										phrase={value.phrase}
										alreadyEdit={value.edit}
										postId={value.postId}
										deleteComment={(evt) => handlerDelet(evt, value.id, true)}
										pressLike={value.pressLike}
										likeComment={likeComment}
										handlerStopPropaganation={handlerStopPropaganation}
									/>
								))}
							{!stateEdit && stateParentComment && (
								<CreateComment commentId={id} type={true} />
							)}
						</Right>
					</Controller>
				</CommentContainer>
			)}
		</>
	);
}
