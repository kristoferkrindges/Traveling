import React, { useState, useContext, useEffect } from "react";
import SelectOptionsProfile from "../../../components/SelectOptions/SelectOptionsProfile";
import { Context } from "../../../context/userContext";
export default function ControllerSelectOptionsProfile({ equal }) {
	const { userInfo } = useContext(Context);

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
	}
	function handlerActiveFav() {
		resetSets();
		setActiveFav("active");
	}
	function handlerActiveLikes() {
		resetSets();
		setActiveLikes("active");
	}
	function handlerActiveFollowers() {
		resetSets();
		setActiveFollowers("active");
	}
	function handlerActiveFollowing() {
		resetSets();
		setActiveFollowing("active");
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
