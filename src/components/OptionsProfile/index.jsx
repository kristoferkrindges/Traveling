import React, { useState } from "react";
import {
	Container,
	ContextContainer,
	CardContent,
	Options,
	Category,
	Posts,
	Context,
	IconPost,
	Heart,
	Fav,
	IconFollowers,
	IconFollowing,
} from "./style";

export default function OptionsProfile() {
	const [activePosts, setActivePosts] = useState("active");
	const [activeFav, setActiveFav] = useState("");
	const [activeLikes, setActiveLikes] = useState("");
	const [activeFollowers, setActiveFollowers] = useState("");
	const [activeFollowing, setActiveFollowing] = useState("");

	function handlerActivePosts() {
		setActivePosts("active");
		setActiveFav("");
		setActiveLikes("");
		setActiveFollowers("");
		setActiveFollowing("");
	}
	function handlerActiveFav() {
		setActivePosts("");
		setActiveFav("active");
		setActiveLikes("");
		setActiveFollowers("");
		setActiveFollowing("");
	}
	function handlerActiveLikes() {
		setActivePosts("");
		setActiveFav("");
		setActiveLikes("active");
		setActiveFollowers("");
		setActiveFollowing("");
	}
	function handlerActiveFollowers() {
		setActivePosts("");
		setActiveFav("");
		setActiveLikes("");
		setActiveFollowing("");
		setActiveFollowers("active");
	}
	function handlerActiveFollowing() {
		setActivePosts("");
		setActiveFav("");
		setActiveLikes("");
		setActiveFollowers("");
		setActiveFollowing("active");
	}
	return (
		<Container>
			<ContextContainer>
				<CardContent>
					<Category>
						<Context>
							<IconPost />
							<Posts className={activePosts} onClick={handlerActivePosts}>
								Posts
							</Posts>
						</Context>
						<Context>
							<IconFollowers />
							<Posts
								className={activeFollowers}
								onClick={handlerActiveFollowers}
							>
								Followers
							</Posts>
						</Context>
						<Context>
							<IconFollowing />
							<Posts
								className={activeFollowing}
								onClick={handlerActiveFollowing}
							>
								Following
							</Posts>
						</Context>
						<Context>
							<Heart />
							<Posts className={activeLikes} onClick={handlerActiveLikes}>
								Likes
							</Posts>
						</Context>
						<Context>
							<Fav />
							<Posts className={activeFav} onClick={handlerActiveFav}>
								Favorites
							</Posts>
						</Context>
					</Category>
				</CardContent>
			</ContextContainer>
		</Container>
	);
}
