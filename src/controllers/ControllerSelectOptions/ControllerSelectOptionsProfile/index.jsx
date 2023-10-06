import React, { useState, useContext } from "react";
import SelectOptionsProfile from "../../../components/SelectOptions/SelectOptionsProfile";
import { Context } from "../../../context/userContext";
export default function ControllerSelectOptionsProfile({
	equal,
	findFollowers,
	findFollowings,
	findPosts,
	findPostsLikes,
	findPostsFavorites,
}) {
	const [activePosts, setActivePosts] = useState("active");
	const [activeFav, setActiveFav] = useState("");
	const [activeLikes, setActiveLikes] = useState("");
	const [activeFollowers, setActiveFollowers] = useState("");
	const [activeFollowing, setActiveFollowing] = useState("");

	function controllerClick(type) {
		if (type === "posts") {
			handlerActivePosts();
		} else if (type === "favs") {
			handlerActiveFav();
		} else if (type === "likes") {
			handlerActiveLikes();
		} else if (type === "followers") {
			handlerActiveFollowers();
		} else {
			handlerActiveFollowing();
		}
	}

	function handlerActivePosts() {
		resetSets();
		setActivePosts("active");
		findPosts();
	}
	function handlerActiveFav() {
		resetSets();
		setActiveFav("active");
		findPostsFavorites();
	}
	function handlerActiveLikes() {
		resetSets();
		setActiveLikes("active");
		findPostsLikes();
	}
	function handlerActiveFollowers() {
		resetSets();
		setActiveFollowers("active");
		findFollowers();
	}
	function handlerActiveFollowing() {
		resetSets();
		setActiveFollowing("active");
		findFollowings();
	}
	function resetSets() {
		setActivePosts("");
		setActiveFav("");
		setActiveLikes("");
		setActiveFollowers("");
		setActiveFollowing("");
	}
	return (
		<>
			<SelectOptionsProfile
				equal={equal}
				activePosts={activePosts}
				activeFav={activeFav}
				activeLikes={activeLikes}
				activeFollowers={activeFollowers}
				activeFollowing={activeFollowing}
				controllerClick={controllerClick}
			/>
		</>
	);
}
