import React, { useState, useContext, useEffect } from "react";
import Kris from "../../assets/images/foto3.png";
import Comment from "../../components/Comment";
import { CommentContext } from "../../context/commentContext";
import CreateComment from "../../components/Create/CreateComment";
import { format } from "date-fns-tz";

export default function ControllerComment({ postId }) {
	const { findCommentsPost, insertComment, updateComment, deleteComment } =
		useContext(CommentContext);
	const [comments, setComments] = useState([]);

	useEffect(() => {
		searchComments();
	}, []);

	async function searchComments() {
		setComments([]);
		const newComments = await findCommentsPost(postId);
		setComments(newComments);
	}
	async function createComment(text) {
		const comment = {
			phrase: text,
			img: "",
			datePublic: formatedTime(),
			postId: postId,
		};
		const newComment = await insertComment(comment);
		setComments((prevComments) => [newComment, ...prevComments]);
	}
	async function editComment(id, text) {
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
	}

	async function deleteSingleComment(commentId) {
		console.log("Entrou");
		await deleteComment(commentId);
		console.log("Passou pelo api");
		const updatedComments = comments.filter(
			(comment) => comment.id !== commentId
		);
		setComments(updatedComments);
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
			<CreateComment postId={postId} createComment={createComment} />
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
					/>
				))}
		</>
	);
}
// const [comments, setComments] = useState([
// 	{
// 		userPhoto:
// 			"https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2023/04/14/594335823-harry-potter.jpg",
// 		userName: "Harry Potter",
// 		time: 6,
// 		pharase: "Live your life to the fullest while you can.",
// 	},
// 	{
// 		userPhoto: Kris,

// 		userName: "Kristofer Krindges",
// 		time: 2,
// 		pharase:
// 			"I believed in the impossible, challenged limits, and conquered.",
// 	},
// 	{
// 		userPhoto:
// 			"https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400",

// 		userName: "Samanta Lok",
// 		time: 2,
// 		pharase: "Live your life to the fullest while you can.",
// 	},
// 	{
// 		userPhoto:
// 			"https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400",
// 		userName: "Jessica Almeida",
// 		time: 2,
// 		pharase: "Live your life to the fullest while you can.",
// 	},
// 	{
// 		userPhoto:
// 			"https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400",
// 		userName: "Carlos Teves",
// 		time: 2,
// 		pharase: "Live your life to the fullest while you can.",
// 	},
// 	{
// 		userPhoto:
// 			"https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400",
// 		userName: "Kristofer RK",
// 		time: 2,
// 		pharase: "Live your life to the fullest while you can.",
// 	},
// ]);
