import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../../../../contexts/postContext";
import { LoaderContainer } from "../../../../components/containers/loader.styled";
import Loader from "../../../../components/loader";
import Post from "../../../../components/features/post/post";
import { PostAllContainer } from "../home/style";
import CreateComment from "../../../../components/features/comment/createComment";

export default function OnlyPostMidTemplate() {
	let { id } = useParams();

	const { findById } = useContext(PostContext);

	const [postId, setPostId] = useState();

	useEffect(() => {
		searchPostId();
	}, []);

	const searchPostId = async () => {
		const post = await findById(id);
		setPostId(post);
	};
	return (
		<>
			{postId ? (
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
						/>
						<CreateComment postId={postId.id} type={false} />
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
