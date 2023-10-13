import React from "react";
import { ContainerOptions } from "./style";

import ControllerSelectOptionsProfile from "../../controllers/ControllerSelectOptions/ControllerSelectOptionsProfile";

export default function LayoutMenuOptions({
	equal,
	findFollowers,
	findFollowings,
	findPosts,
	findPostsLikes,
	findPostsFavorites,
}) {
	return (
		<ContainerOptions>
			<ControllerSelectOptionsProfile
				equal={equal}
				findFollowers={findFollowers}
				findFollowings={findFollowings}
				findPosts={findPosts}
				findPostsLikes={findPostsLikes}
				findPostsFavorites={findPostsFavorites}
			/>
		</ContainerOptions>
	);
}
