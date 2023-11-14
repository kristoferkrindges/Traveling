import React from "react";

import { OptionsContainer, Options, Option, Legend, Border } from "./style";
import {
	BookPressIcon,
	HeartPressIcon,
	PostIcon,
} from "../../icons/iO5Icons.styled";

export default function FilterSearchMenu({
	search,
	findPosts,
	findPostsLikes,
	findPostsFavorites,
}) {
	return (
		<OptionsContainer>
			<Options>
				<Option onClick={findPosts}>
					<PostIcon style={search === "Posts" ? { color: "#2c2c6c" } : null} />
					<Border
						style={search === "Posts" ? { backgroundColor: "#2c2c6c" } : null}
					/>
					<Legend style={search === "Posts" ? { color: "#2c2c6c" } : null}>
						Posts
					</Legend>
				</Option>
				<Option onClick={findPostsLikes}>
					<HeartPressIcon
						style={search === "Likes" ? { color: "#2c2c6c" } : null}
					/>
					<Border
						style={search === "Likes" ? { backgroundColor: "#2c2c6c" } : null}
					/>
					<Legend style={search === "Likes" ? { color: "#2c2c6c" } : null}>
						Likes
					</Legend>
				</Option>
				<Option onClick={findPostsFavorites}>
					<BookPressIcon
						style={search === "favorites" ? { color: "#2c2c6c" } : null}
					/>
					<Border
						style={
							search === "Favorites" ? { backgroundColor: "#2c2c6c" } : null
						}
					/>
					<Legend style={search === "favorites" ? { color: "#2c2c6c" } : null}>
						Favorites
					</Legend>
				</Option>
			</Options>
		</OptionsContainer>
	);
}
