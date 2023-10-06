import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context as userContext } from "../../context/userContext";
import CardProfile from "../../components/CardProfile";
import LayoutMenuOptions from "../../layouts/LayoutMenuOptions";
import Followers from "../../components/Followers";
import Post from "../../components/Post";
import { Container } from "../../layouts/LayoutOnlyPost/style";
export default function ControllerProfile({ type }) {
	let { id } = useParams();

	const {
		userInfo,
		findUserByAt,
		updatePhoto,
		updateBanner,
		getFollowers,
		getFollowings,
		getPostsWithLiked,
		getPostsUser,
		getPostsWithFavorites,
	} = useContext(userContext);

	const [user, setUser] = useState({});
	const [equal, setEqual] = useState();
	const [followers, setFollowers] = useState([]);
	const [followings, setFollowings] = useState([]);
	const [posts, setPosts] = useState([]);
	const [search, setSearch] = useState("Followings");

	useEffect(() => {
		if (id === userInfo.at) {
			setUser(userInfo);
			setEqual("Owner");
			findPosts(id);
		} else {
			findUserAt();
		}
	}, [id]);

	async function findUserAt() {
		const response = await findUserByAt(id);
		findPosts(id);
		setUser(response);
		setEqual("Profile");
	}

	async function findPosts() {
		const postsResponse = await getPostsUser(id);
		setPosts([]);
		setPosts(postsResponse);
		setSearch("Posts");
	}

	async function findPostsLikes() {
		const postsResponse = await getPostsWithLiked();
		setPosts([]);
		setPosts(postsResponse);
		setSearch("Posts");
	}

	async function findPostsFavorites() {
		const postsResponse = await getPostsWithFavorites();
		setPosts([]);
		setPosts(postsResponse);
		setSearch("Posts");
	}

	async function findFollowers(userId) {
		let response;
		if (equal === "Owner") {
			response = await getFollowers(userId ? userId : user.id);
			setFollowers(response || []);
		} else {
			response = await getFollowers(userId ? userId : user.id);
			setFollowers(response || []);
		}
		setSearch("Followers");
	}

	async function findFollowings(userId) {
		let response;
		if (equal === "Owner") {
			response = await getFollowings(userId ? userId : user.id);
			setFollowings(response || []);
		} else {
			response = await getFollowings(userId ? userId : user.id);
			setFollowings(response || []);
		}
		setSearch("Followings");
	}
	console.log(posts);
	return (
		<>
			<CardProfile
				user={user}
				equal={equal}
				updatePhoto={updatePhoto}
				updateBanner={updateBanner}
			/>
			<LayoutMenuOptions
				equal={equal}
				findFollowers={findFollowers}
				findFollowings={findFollowings}
				findPosts={findPosts}
				findPostsLikes={findPostsLikes}
				findPostsFavorites={findPostsFavorites}
			/>
			{search === "Followers" &&
				followers.length > 0 &&
				followers.map((value, key) => (
					<Followers
						key={key}
						photo={value.photo}
						firstname={value.firstname}
						lastname={value.lastname}
						id={value.id}
						at={value.at}
						follow={value.follow}
					/>
				))}
			{search === "Followings" &&
				followings.length > 0 &&
				followings.map((value, key) => (
					<Followers
						key={key}
						photo={value.photo}
						firstname={value.firstname}
						lastname={value.lastname}
						id={value.id}
						at={value.at}
						follow={value.follow}
					/>
				))}
			{search === "Posts" ? (
				posts && posts.length > 0 ? (
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
					<h1>Erro!</h1>
				)
			) : null}
		</>
	);
}
