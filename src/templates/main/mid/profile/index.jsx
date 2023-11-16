import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoaderContainer } from "../../../../components/containers/loader.styled";
import Loader from "../../../../components/loader";
import { UserContext } from "../../../../contexts/userContext";
import ProfileInfo from "../../../../components/features/user/profileInfo";
import FilterSearchMenu from "../../../../components/menus/filterSearch";
import { PostAllContainer } from "../home/style";
import Post from "../../../../components/features/post/post";
import { NotContentYet } from "./style";

export default function ProfileMidTemplate() {
	let { id } = useParams();
	const {
		userInfo,
		findUserByAt,
		updatePhoto,
		updateBanner,
		getPostsWithLiked,
		getPostsUser,
		getPostsWithFavorites,
	} = useContext(UserContext);

	const [user, setUser] = useState({});
	const [equal, setEqual] = useState();
	const [posts, setPosts] = useState([]);
	const [postsLike, setPostsLike] = useState([]);
	const [postsFavorite, setPostsFavorite] = useState([]);
	const [search, setSearch] = useState("Followings");

	useEffect(() => {
		setPosts([]);
		setPostsLike([]);
		setPostsFavorite([]);
		if (id === userInfo.at) {
			setUser(userInfo);
			setEqual("Owner");
			findPosts(id);
		} else {
			findUserAt();
		}
	}, [id, userInfo]);

	async function findUserAt() {
		const response = await findUserByAt(id);
		findPosts(id);
		setUser(response);
		setEqual("Profile");
	}

	async function findPosts() {
		if (posts.length <= 0) {
			const postsResponse = await getPostsUser(id);
			setPosts(postsResponse);
		}
		setSearch("Posts");
		return;
	}

	async function findPostsLikes() {
		if (postsLike.length <= 0) {
			const postsResponse = await getPostsWithLiked(id);
			setPostsLike(postsResponse);
		}
		setSearch("Likes");
		return;
	}

	async function findPostsFavorites() {
		if (postsFavorite.length <= 0) {
			const postsResponse = await getPostsWithFavorites(id);
			setPostsFavorite(postsResponse);
		}
		setSearch("Favorites");
		return;
	}

	return (
		<>
			{user ? (
				<>
					<ProfileInfo
						user={user}
						equal={equal}
						updatePhoto={updatePhoto}
						updateBanner={updateBanner}
					/>
					<FilterSearchMenu
						search={search}
						findPosts={findPosts}
						findPostsLikes={findPostsLikes}
						findPostsFavorites={findPostsFavorites}
					/>
					{search === "Posts" ? (
						Array.isArray(posts) && posts.length > 0 ? (
							posts.map((value, key) => (
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
									/>
								</PostAllContainer>
							))
						) : (
							<NotContentYet>This user has no posts yet</NotContentYet>
						)
					) : null}

					{search === "Likes" ? (
						Array.isArray(postsLike) && postsLike.length > 0 ? (
							postsLike.map((value, key) => (
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
									/>
								</PostAllContainer>
							))
						) : (
							<NotContentYet>This user has no likes yet</NotContentYet>
						)
					) : null}

					{search === "Favorites" ? (
						Array.isArray(postsFavorite) && postsFavorite.length > 0 ? (
							postsFavorite.map((value, key) => (
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
									/>
								</PostAllContainer>
							))
						) : (
							<NotContentYet>This user has no favorites yet</NotContentYet>
						)
					) : null}
				</>
			) : (
				<LoaderContainer>
					<Loader />
				</LoaderContainer>
			)}
		</>
	);
}
