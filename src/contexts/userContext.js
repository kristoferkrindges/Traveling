import { createContext } from "react";
import useAuth from "../hooks/useAuth";

const UserContext = createContext();
function UserProvider({ children }) {
	const {
		authenticated,
		signUp,
		signIn,
		userInfo,
		getToken,
		alterDarkMode,
		logout,
		update,
		deleteAccount,
		findUserById,
		findPostsUser,
		findStoriesUser,
		updatePassword,
		follow,
		getFollowers,
		getFollowings,
		likePost,
		favoritePost,
		getPostsWithLiked,
		getPostsWithFavorites,
		updatePhoto,
		updateBanner,
		findUserByAt,
		getPostsUser,
		alterCountPosts,
		checkUser,
		findAll,
	} = useAuth();
	return (
		<UserContext.Provider
			value={{
				authenticated,
				signUp,
				signIn,
				userInfo,
				getToken,
				alterDarkMode,
				logout,
				update,
				deleteAccount,
				findUserById,
				findPostsUser,
				findStoriesUser,
				updatePassword,
				follow,
				getFollowers,
				getFollowings,
				likePost,
				favoritePost,
				getPostsWithLiked,
				getPostsWithFavorites,
				updatePhoto,
				updateBanner,
				findUserByAt,
				getPostsUser,
				alterCountPosts,
				checkUser,
				findAll,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}

export { UserContext, UserProvider };
