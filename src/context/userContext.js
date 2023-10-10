import { createContext } from "react";
import useAuth from "../hooks/useAuth";

const Context = createContext();
function UserProvider({ children }) {
	const {
		authenticated,
		register,
		login,
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
		formatTimeDifference,
		getPostsUser,
		alterCountPosts,
		checkUser,
	} = useAuth();
	return (
		<Context.Provider
			value={{
				authenticated,
				register,
				login,
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
				formatTimeDifference,
				getPostsUser,
				alterCountPosts,
				checkUser,
			}}
		>
			{children}
		</Context.Provider>
	);
}

export { Context, UserProvider };
