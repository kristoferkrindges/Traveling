import React, { useState, useContext, useEffect } from "react";
import Kris from "../../assets/images/foto3.png";
import Comment from "../../components/Comment";
import { CommentContext } from "../../context/commentContext";
import CreateComment from "../../components/Create/CreateComment";
import { format } from "date-fns-tz";
import ModalLoader from "../../components/Modal/ModalLoader";
import { ContainerComment } from "../../components/Comment/style";

export default function ControllerComment({ postId }) {
	const {
		findCommentsPost,
		insertComment,
		updateComment,
		deleteComment,
		likeComment,
		findChildsComments,
	} = useContext(CommentContext);
	const [comments, setComments] = useState([]);
	const [progress, setProgress] = useState(false);

	useEffect(() => {
		searchComments();
	}, []);

	async function searchComments() {
		setComments([]);
		const newComments = await findCommentsPost(postId);
		setComments(newComments);
	}
	async function createComment(text, type, idComment) {
		setProgress(true);
		let comment;
		if (type) {
			comment = {
				phrase: text,
				img: "",
				datePublic: formatedTime(),
				parentComment: idComment,
			};
		} else {
			comment = {
				phrase: text,
				img: "",
				datePublic: formatedTime(),
				postId: postId,
			};
		}
		// const newComment = await insertComment(comment);
		// setComments((prevComments) => [newComment, ...prevComments]);
		await insertComment(comment);
		await searchComments();
		setProgress(false);
	}
	async function editComment(id, text) {
		setProgress(true);
		const updatedComments = comments.map((comment) => {
			if (comment.id === id) {
				const updatedComment = {
					...comment,
					phrase: text,
					datePublic: formatedTime(),
				};
				return updatedComment;
			}
			return comment;
		});
		const newComment = {
			img: "",
			phrase: text,
			datePublic: formatedTime(),
			postId: postId,
		};
		await updateComment(id, newComment);
		setComments(updatedComments);
		setProgress(false);
	}

	async function deleteSingleComment(commentId) {
		setProgress(true);
		await deleteComment(commentId);
		// const updatedComments = comments.filter(
		// 	(comment) => comment.id !== commentId
		// );
		// setComments(updatedComments);
		await searchComments();
		setProgress(false);
	}

	function formatedTime() {
		const brasiliaTimeZone = "America/Sao_Paulo";
		const brasiliaCurrentDateTime = new Date();
		const formattedDateTime = format(
			brasiliaCurrentDateTime,
			"yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
			{ timeZone: brasiliaTimeZone }
		);
		return formattedDateTime;
	}
	return (
		<>
			{!progress || <ModalLoader />}
			<CreateComment
				postId={postId}
				createComment={createComment}
				type={false}
			/>
			<ContainerComment>
				{comments.length > 0 &&
					comments.map((value, key) => (
						<Comment
							key={key}
							id={value.id}
							user={value.userAllResponse}
							time={value.datepublic}
							likes={value.likes}
							comments={value.comments}
							pharase={value.phrase}
							alreadyEdit={value.edit}
							postId={value.postId}
							editComment={editComment}
							deleteComment={deleteSingleComment}
							pressLike={value.pressLike}
							likeComment={likeComment}
							findChildsComments={findChildsComments}
							createComment={createComment}
						/>
					))}
			</ContainerComment>
		</>
	);
}
