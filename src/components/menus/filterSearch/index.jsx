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
					<PostIcon
						style={search === "Posts" ? { color: "hsl(252, 73%, 29%)" } : null}
					/>
					<Border
						style={
							search === "Posts"
								? { backgroundColor: "hsl(252, 73%, 29%)" }
								: null
						}
					/>
					<Legend
						style={search === "Posts" ? { color: "hsl(252, 73%, 29%)" } : null}
					>
						Posts
					</Legend>
				</Option>
				<Option onClick={findPostsLikes}>
					<HeartPressIcon
						style={search === "Likes" ? { color: "hsl(252, 73%, 29%)" } : null}
					/>
					<Border
						style={
							search === "Likes"
								? { backgroundColor: "hsl(252, 73%, 29%)" }
								: null
						}
					/>
					<Legend
						style={search === "Likes" ? { color: "hsl(252, 73%, 29%)" } : null}
					>
						Likes
					</Legend>
				</Option>
				<Option onClick={findPostsFavorites}>
					<BookPressIcon
						style={
							search === "favorites" ? { color: "hsl(252, 73%, 29%)" } : null
						}
					/>
					<Border
						style={
							search === "Favorites"
								? { backgroundColor: "hsl(252, 73%, 29%)" }
								: null
						}
					/>
					<Legend
						style={
							search === "favorites" ? { color: "hsl(252, 73%, 29%)" } : null
						}
					>
						Favorites
					</Legend>
				</Option>
			</Options>
		</OptionsContainer>
	);
}
