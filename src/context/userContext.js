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
		unfollow,
		getFollowers,
		getFollowings,
		likePost,
		favoritePost,
		getPostsWithLiked,
		getPostsWithFavorites,
		updatePhoto,
		updateBanner,
		findUserByAt,
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
				unfollow,
				getFollowers,
				getFollowings,
				likePost,
				favoritePost,
				getPostsWithLiked,
				getPostsWithFavorites,
				updatePhoto,
				updateBanner,
				findUserByAt,
			}}
		>
			{children}
		</Context.Provider>
	);
}

export { Context, UserProvider };
