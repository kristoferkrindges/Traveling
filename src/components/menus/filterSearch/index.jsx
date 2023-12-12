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
						style={
							search === "Posts" && {
								color: `${({ theme }) => theme.secondColor}`,
							}
						}
					/>
					<Border
						style={
							search !== "Posts" ? { backgroundColor: "transparent" } : null
						}
					/>
					<Legend
						style={
							search === "Posts"
								? { color: `${({ theme }) => theme.secondColor}` }
								: null
						}
					>
						Posts
					</Legend>
				</Option>
				<Option onClick={findPostsLikes}>
					<HeartPressIcon
						style={
							search === "Likes" && {
								color: `${({ theme }) => theme.secondColor}`,
							}
						}
					/>
					<Border
						style={
							search !== "Likes" ? { backgroundColor: "transparent" } : null
						}
					/>
					<Legend
						style={
							search === "Likes"
								? { color: `${({ theme }) => theme.secondColor}` }
								: null
						}
					>
						Likes
					</Legend>
				</Option>
				<Option onClick={findPostsFavorites}>
					<BookPressIcon
						style={
							search === "Favorites" && {
								color: `${({ theme }) => theme.secondColor}`,
							}
						}
					/>
					<Border
						style={
							search !== "Favorites" ? { backgroundColor: "transparent" } : null
						}
					/>
					<Legend
						style={
							search === "Favorites"
								? { color: `${({ theme }) => theme.secondColor}` }
								: null
						}
					>
						Favorites
					</Legend>
				</Option>
			</Options>
		</OptionsContainer>
	);
}
