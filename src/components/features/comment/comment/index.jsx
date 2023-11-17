import React, { useState, useContext, useEffect } from "react";
import { SaveContainer } from "../../post/post/style";
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
	const [comment, setComment] = useState(comments);
	const [stateUser, setStateUser] = useState(user);
	const [stateEdit, setStateEdit] = useState(false);
	const [timeDate, setTimeDate] = useState(time);
	const [alreadyEditComment, setAlreadyEditComment] = useState(alreadyEdit);
	const [statePhrase, setStatePhrase] = useState(phrase);
	const [stateLike, setStateLike] = useState(pressLike);
	const [stateCountLike, setStateCountLike] = useState(likes);
	const [stateParentComment, setStateParentComment] = useState(false);
	const [parentsComments, setParentsComments] = useState();
	const [progressChildren, setProgressChildren] = useState(false);

	useEffect(() => {
		setStatePhrase(phrase);
		setStateUser(user);
		setTimeDate(time);
		setAlreadyEditComment(alreadyEdit);
		setStateLike(pressLike);
		setStateCountLike(likes);
		setComment(comments);
	}, [phrase, user, time, alreadyEdit, pressLike, likes, comments]);

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
		await delet(commentId, option);
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

	const delet = async (commentId, type) => {
		setProgress(true);
		await deletComment(commentId);
		if (!type) {
			await onDeletComment();
		}
		setProgress(false);
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

	const addCountComment = () => {
		setComment(comment + 1);
	};
	return (
		<>
			{progress || progressChildren ? (
				<LoaderModal />
			) : (
				<CommentContainer>
					<Controller>
						<Extends>
							<AvatarPhoto src={stateUser.photo} />
							<Border />
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
									comments={comment}
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
								<CreateComment
									commentId={id}
									type={true}
									setList={setParentsComments}
									addCount={addCountComment}
								/>
							)}
						</Right>
					</Controller>
				</CommentContainer>
			)}
		</>
	);
}
