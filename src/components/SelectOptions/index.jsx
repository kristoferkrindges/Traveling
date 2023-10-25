import React, { useState } from "react";
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

export default function SelectOptions({ type }) {
	const [activePosts, setActivePosts] = useState("active");
	const [activeFav, setActiveFav] = useState("");
	const [activeLikes, setActiveLikes] = useState("");
	const [activeFollowers, setActiveFollowers] = useState("");
	const [activeFollowing, setActiveFollowing] = useState("");

	const [activePrimary, setActivePrimary] = useState("active");
	const [activeGeneral, setActiveGeneral] = useState("");
	const [activeRequests, setActiveRequests] = useState("");

	const [activeAll, setActiveAll] = useState("active");
	const [activeUnread, setActiveUnread] = useState("");

	function handlerActiveAll() {
		setActiveAll("active");
		setActiveUnread("");
	}
	function handlerActiveUnread() {
		setActiveAll("");
		setActiveUnread("active");
	}

	function handlerActivePrimary() {
		setActivePrimary("active");
		setActiveGeneral("");
		setActiveRequests("");
	}
	function handlerActiveGeneral() {
		setActivePrimary("");
		setActiveGeneral("active");
		setActiveRequests("");
	}
	function handlerActiveRequests() {
		setActivePrimary("");
		setActiveGeneral("");
		setActiveRequests("active");
	}

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
		<>
			{type === "Notifications" ? (
				<Category>
					<Posts className={activeUnread} onClick={handlerActiveUnread}>
						Unread
					</Posts>
					<Posts className={activeAll} onClick={handlerActiveAll}>
						All
					</Posts>
				</Category>
			) : (
				<></>
			)}
			{type === "Profile" ? (
				<Category style={{ marginBottom: "0" }}>
					<Context>
						<IconPost />
						<Posts className={activePosts} onClick={handlerActivePosts}>
							Posts
						</Posts>
					</Context>
					<Context>
						<IconFollowers />
						<Posts className={activeFollowers} onClick={handlerActiveFollowers}>
							Followers
						</Posts>
					</Context>
					<Context>
						<IconFollowing />
						<Posts className={activeFollowing} onClick={handlerActiveFollowing}>
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
			) : (
				<></>
			)}
			{type === "Messages" ? (
				<Category>
					<Posts className={activePrimary} onClick={handlerActivePrimary}>
						Primary
					</Posts>
					<Posts className={activeGeneral} onClick={handlerActiveGeneral}>
						General
					</Posts>
					<Posts className={activeRequests} onClick={handlerActiveRequests}>
						Blocked
					</Posts>
				</Category>
			) : (
				<></>
			)}
		</>
	);
}
