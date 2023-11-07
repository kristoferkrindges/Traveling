import React, { useContext, useEffect, useState } from "react";
import CreatePost from "../../../../components/features/post/createPost";
import { PostContext } from "../../../../contexts/postContext";
import { LoaderContainer } from "../../../../components/containers/loader.styled";
import Loader from "../../../../components/loader";
import { StorieContext } from "../../../../contexts/storieContext";
import Post from "../../../../components/features/post/post";
import { PostAllContainer } from "./style";
export default function HomeMidTemplate() {
	const { findAllPosts } = useContext(PostContext);
	const { allStories, findAllStories } = useContext(StorieContext);
	const [allPosts, setAllPosts] = useState();

	useEffect(() => {
		searchPostsAndStories();
	}, []);

	const searchPostsAndStories = async () => {
		setAllPosts(await findAllPosts());
		await findAllStories();
	};

	const deletPostOne = (postId) => {
		setAllPosts((allPosts) => allPosts.filter((post) => post.id !== postId));
	};
	return (
		<>
			{allPosts && allStories ? (
				<>
					<CreatePost />
					{allPosts &&
						allPosts.map((value, key) => (
							<PostAllContainer>
								<Post
									key={key}
									type={false}
									id={value.id}
									phrase={value.phrase}
									photo={value.img}
									user={value.userAllResponse}
									time={value.datepublic}
									likes={value.likes}
									comments={value.comments}
									favorites={value.favorites}
									pressLike={value.pressLike}
									pressFavorite={value.pressFavorite}
									alreadyEdit={value.edit}
									usersLikes={value.usersLikes}
									deletPostOne={() => deletPostOne(value.id)}
								/>
							</PostAllContainer>
						))}
				</>
			) : (
				<LoaderContainer>
					<Loader />
				</LoaderContainer>
			)}
		</>
	);
}
