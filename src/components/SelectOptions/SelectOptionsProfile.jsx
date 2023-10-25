import React from "react";
import {
	Category,
	Posts,
	Context,
	IconPost,
	Heart,
	Fav,
	IconFollowers,
	IconFollowing,
} from "./style";

export default function SelectOptionsProfile({
	activePosts,
	activeFav,
	activeLikes,
	activeFollowers,
	activeFollowing,
	controllerClick,
	equal,
}) {
	return (
		<Category style={{ marginBottom: "0" }}>
			<Context>
				<IconPost />
				<Posts className={activePosts} onClick={() => controllerClick("posts")}>
					Posts
				</Posts>
			</Context>
			<Context>
				<IconFollowers />
				<Posts
					className={activeFollowers}
					onClick={() => controllerClick("followers")}
				>
					Followers
				</Posts>
			</Context>
			<Context>
				<IconFollowing />
				<Posts
					className={activeFollowing}
					onClick={() => controllerClick("followings")}
				>
					Following
				</Posts>
			</Context>
			{equal === "Owner" ? (
				<>
					<Context>
						<Heart />
						<Posts
							className={activeLikes}
							onClick={() => controllerClick("likes")}
						>
							Likes
						</Posts>
					</Context>
					<Context>
						<Fav />
						<Posts
							className={activeFav}
							onClick={() => controllerClick("favs")}
						>
							Favorites
						</Posts>
					</Context>
				</>
			) : null}
		</Category>
	);
}
