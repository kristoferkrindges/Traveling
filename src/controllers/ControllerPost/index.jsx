import React, { useContext, useEffect, useState } from "react";
import Post from "../../components/Post";
import { Container, ContainerOnly } from "../../layouts/LayoutOnlyPost/style";
import { PostContext } from "../../context/postContext";
import Loader from "../../components/Loader";
import { useParams } from "react-router-dom";
import CreateComment from "../../components/Create/CreateComment";
import ControllerComment from "../ControllerComment";

export default function ControllerPost({ type }) {
	const { edit, findAll, allPosts, findById } = useContext(PostContext);
	const [postId, setPostId] = useState();
	let { id } = useParams();
	useEffect(() => {
		if (!type) {
			searchPosts();
		} else {
			searchPostId();
		}
	}, []);

	const searchPosts = async () => {
		await findAll();
	};
	const searchPostId = async () => {
		const post = await findById(id);
		setPostId(post);
		console.log(postId);
	};
	return (
		<>
			{!type ? (
				allPosts && allPosts.length > 0 ? (
					allPosts.map((value, key) => (
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
								alreadyEdit={value.edit}
								usersLikes={value.usersLikes}
							/>
						</Container>
					))
				) : (
					<Container
						style={
							!allPosts
								? { backgroundColor: "transparent", boxShadow: "none" }
								: {}
						}
					>
						<Loader />
					</Container>
				)
			) : postId ? (
				<ContainerOnly>
					<Post
						type={type}
						id={postId.id}
						pharase={postId.phrase}
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
					{!edit ? <CreateComment /> : <></>}
					{!edit ? <ControllerComment /> : <></>}
				</ContainerOnly>
			) : (
				<Container
					style={
						!allPosts
							? { backgroundColor: "transparent", boxShadow: "none" }
							: {}
					}
				>
					<Loader />
				</Container>
			)}
		</>
	);
}
