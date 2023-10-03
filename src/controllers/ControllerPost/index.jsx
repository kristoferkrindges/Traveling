import React, { useState, useContext, useEffect } from "react";
import Post from "../../components/Post";
import { Container } from "../../layouts/LayoutOnlyPost/style";
import { PostContext } from "../../context/postContext";
import Loader from "../../components/Loader";
export default function ControllerPost({ type }) {
	const [posts, setPosts] = useState([]);
	const { findAll } = useContext(PostContext);
	useEffect(() => {
		searchPosts();
	}, []);

	const searchPosts = async () => {
		const posts = await findAll();
		setPosts(posts);
	};

	return (
		<>
			{posts && posts.length > 0 ? (
				posts.map((value, key) => (
					<Container>
						<Post
							type={type}
							key={key}
							id={value.id}
							pharase={value.phrase}
							photo={value.img}
							user={value.userAllResponse}
							time={value.datepublic}
							likes={value.likes}
							comments={value.comments}
							favorites={value.favorites}
							pressLike={value.pressLike}
							pressFavorite={value.pressFavorite}
						/>
					</Container>
				))
			) : (
				<Container
					style={
						!posts ? { backgroundColor: "transparent", boxShadow: "none" } : {}
					}
				>
					<Loader />
				</Container>
			)}
		</>
	);
}
