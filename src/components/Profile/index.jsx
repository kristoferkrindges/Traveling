import React, { useState, useContext } from "react";
import {
	Container,
	Head,
	CardContent,
	Image,
	Logo,
	Icons,
	FaUser,
	Legend,
	Info,
	Name,
	Sign,
	Lists,
	List,
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
export default function Profile() {
	// Render types
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
			<Head>
				<CardContent>
					<Image>
						<Logo
							src={
								"https://s2.glbimg.com/wB2k5I1ty4iVdwzurRl40rcoSqo=/e.glbimg.com/og/ed/f/original/2017/07/20/beach-1790049_960_720.jpg"
							}
						/>
					</Image>
					<Icons>
						<FaUser />
						{/* <Legend>Edit</Legend> */}
					</Icons>
					<Info>
						<Name>Kristofer Rossoni Krindges</Name>
						<Sign>@KristoferRK</Sign>
					</Info>
					<Lists>
						<List>
							Posts<span>{50}</span>
						</List>
						<List>
							Followers<span>{50}</span>
						</List>
						<List>
							Following<span>{150}</span>
						</List>
					</Lists>
				</CardContent>
				<Options>
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
				</Options>
			</Head>
		</Container>
	);
}
