import React, { useContext, useEffect, useState } from "react";
import CreatePost from "../../../../components/features/post/createPost";
import { PostContext } from "../../../../contexts/postContext";
import { LoaderContainer } from "../../../../components/containers/loader.styled";
import Loader from "../../../../components/loader";
import { StorieContext } from "../../../../contexts/storieContext";
import Post from "../../../../components/features/post/post";
import { PostAllContainer } from "./style";
import Carrousel from "../../../../components/features/stories/carrousel";
export default function HomeMidTemplate() {
	const { findAllPosts, allPosts } = useContext(PostContext);
	const { allStories, setAllStories, findAllUsersWithStories } =
		useContext(StorieContext);
	const [postsLoaded, setPostsLoaded] = useState(false);

	useEffect(() => {
		searchPostsAndStories();
	}, []);
	const searchPostsAndStories = async () => {
		await findAllPosts();
		await findAllUsersWithStories();
		setPostsLoaded(true);
	};

	const deletPostOne = () => {
		return;
	};

	return (
		<>
			{postsLoaded ? (
				<>
					<Carrousel data={allStories} setStories={setAllStories} type={true} />
					<CreatePost />
					{Array.isArray(allPosts) && allPosts.length > 0 ? (
						allPosts.map((value, key) => (
							<PostAllContainer key={key}>
								<Post
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
									deletPostOne={deletPostOne}
								/>
							</PostAllContainer>
						))
					) : (
						<p>No posts to display</p>
					)}
				</>
			) : (
				<LoaderContainer>
					<Loader />
				</LoaderContainer>
			)}
		</>
	);
}
