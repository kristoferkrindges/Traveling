import React, { useContext } from "react";
import CreatePost from "../../../../components/features/post/createPost";
import { PostContext } from "../../../../contexts/postContext";
import { LoaderContainer } from "../../../../components/containers/loader.styled";
import Loader from "../../../../components/loader";
import { StorieContext } from "../../../../contexts/storieContext";
import Post from "../../../../components/features/post/post";
export default function HomeMidTemplate() {
	const { allPosts } = useContext(PostContext);
	const { allStories } = useContext(StorieContext);
	return (
		<>
			{allPosts && allStories ? (
				<>
					<CreatePost />
					{allPosts &&
						allPosts.map((value, key) => (
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
							/>
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
