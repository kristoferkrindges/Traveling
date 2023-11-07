import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostContext } from "../../../../contexts/postContext";
import { LoaderContainer } from "../../../../components/containers/loader.styled";
import Loader from "../../../../components/loader";
import Post from "../../../../components/features/post/post";
import { PostAllContainer } from "../home/style";
import CreateComment from "../../../../components/features/comment/createComment";
import { CommentContext } from "../../../../contexts/commentContext";
import Comment from "../../../../components/features/comment/comment";

export default function OnlyPostMidTemplate() {
	let { id } = useParams();

	const { findById } = useContext(PostContext);
	const { findCommentsPost } = useContext(CommentContext);

	const navigate = useNavigate();

	const [postId, setPostId] = useState();
	const [commentsWithPost, setCommentsWithPost] = useState();

	useEffect(() => {
		searchPostId();
		searchCommentsWithPost();
	}, []);

	const searchPostId = async () => {
		const post = await findById(id);
		setPostId(post);
	};

	const searchCommentsWithPost = async () => {
		const comments = await findCommentsPost(id);
		setCommentsWithPost(comments);
	};
	const deletCommentInList = (commentId) => {
		setCommentsWithPost((commentsWithPost) =>
			commentsWithPost.filter((comment) => comment.id !== commentId)
		);
	};
	const deletPostOne = () => {
		setPostId(undefined);
		navigate("/");
	};
	// new comment
	return (
		<>
			{postId && commentsWithPost ? (
				<>
					<PostAllContainer>
						<Post
							key={postId.id}
							type={true}
							id={postId.id}
							phrase={postId.phrase}
							photo={postId.img}
							user={postId.userAllResponse}
							time={postId.datepublic}
							likes={postId.likes}
							comments={postId.comments}
							favorites={postId.favorites}
							pressLike={postId.pressLike}
							pressFavorite={postId.pressFavorite}
							alreadyEdit={postId.edit}
							usersLikes={postId.usersLikes}
							deletPostOne={deletPostOne}
						/>
						<CreateComment postId={postId.id} type={false} />
						{commentsWithPost.map((value, key) => (
							<Comment
								key={key}
								type={false}
								id={value.id}
								phrase={value.phrase}
								user={value.userAllResponse}
								time={value.datepublic}
								likes={value.likes}
								comments={value.comments}
								pressLike={value.pressLike}
								alreadyEdit={value.edit}
								onDeletComment={() => deletCommentInList(value.id)}
							/>
						))}
					</PostAllContainer>
				</>
			) : (
				<LoaderContainer>
					<Loader />
				</LoaderContainer>
			)}
		</>
	);
}
