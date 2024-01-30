import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoaderContainer } from "../../../../components/containers/loader.styled";
import Loader from "../../../../components/loader";
import { UserContext } from "../../../../contexts/userContext";
import ProfileInfo from "../../../../components/features/user/profileInfo";
import FilterSearchMenu from "../../../../components/menus/filterSearch";
import { PostAllContainer } from "../home/style";
import Post from "../../../../components/features/post/post";
import { ProfileContainer, NotContentYet, ProfileNotFound } from "./style";
import Carrousel from "../../../../components/features/stories/carrousel";
import { StorieContext } from "../../../../contexts/storieContext";

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

	const { findStoriesByAt } = useContext(StorieContext);

	const [user, setUser] = useState({});
	const [equal, setEqual] = useState();
	const [posts, setPosts] = useState([]);
	const [postsLike, setPostsLike] = useState([]);
	const [postsFavorite, setPostsFavorite] = useState([]);
	const [search, setSearch] = useState("Followings");
	const [stories, setStories] = useState([]);
	const [found, setFound] = useState(true);
	const [stateLoader, setStateLoader] = useState(false);

	useEffect(() => {
		start();
	}, [id, userInfo]);

	const start = async () => {
		setStories([]);
		setPosts([]);
		setPostsLike([]);
		setPostsFavorite([]);
		if (id === userInfo.at) {
			setFound(true);
			setUser(userInfo);
			setEqual("Owner");
			await findPosts();
			if (stories) {
				searchStories();
			}
		} else {
			await findUserAt();
		}
	};

	const searchStories = async () => {
		const newStories = await findStoriesByAt(id);
		setStories(newStories);
	};

	async function findUserAt() {
		const response = await findUserByAt(id);
		if (response === "User not found") {
			setFound(false);
		} else {
			setFound(true);
			await findPosts(id);
			setUser(response);
			setEqual("Profile");
			if (stories) {
				searchStories();
			}
		}
	}

	async function findPosts() {
		setStateLoader(true);
		const postsResponse = await getPostsUser(id);
		setPosts(postsResponse);
		setSearch("Posts");
		setStateLoader(false);
		return;
	}

	async function findPostsLikes() {
		setStateLoader(true);
		if (postsLike.length <= 0) {
			const postsResponse = await getPostsWithLiked(id);
			setPostsLike(postsResponse);
		}
		setSearch("Likes");
		setStateLoader(false);
		return;
	}

	async function findPostsFavorites() {
		setStateLoader(true);
		if (postsFavorite.length <= 0) {
			const postsResponse = await getPostsWithFavorites(id);
			setPostsFavorite(postsResponse);
		}
		setSearch("Favorites");
		setStateLoader(false);
		return;
	}
	return (
		<>
			{found ? (
				<ProfileContainer>
					{user ? (
						<>
							<ProfileInfo
								user={user}
								equal={equal}
								updatePhoto={updatePhoto}
								updateBanner={updateBanner}
							/>
							{stories && stories.length > 0 ? (
								<Carrousel
									data={stories}
									setStories={setStories}
									profile={true}
								/>
							) : null}
							<FilterSearchMenu
								search={search}
								findPosts={findPosts}
								findPostsLikes={findPostsLikes}
								findPostsFavorites={findPostsFavorites}
							/>
							{stateLoader ? (
								<LoaderContainer>
									<Loader />
								</LoaderContainer>
							) : (
								<>
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
											<NotContentYet>
												This user has no favorites yet
											</NotContentYet>
										)
									) : null}
								</>
							)}
						</>
					) : (
						<LoaderContainer>
							<Loader />
						</LoaderContainer>
					)}
				</ProfileContainer>
			) : (
				<ProfileNotFound>Profile not found</ProfileNotFound>
			)}
		</>
	);
}
