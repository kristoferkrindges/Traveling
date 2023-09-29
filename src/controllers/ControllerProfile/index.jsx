import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context as userContext } from "../../context/userContext";
import CardProfile from "../../components/CardProfile";
import LayoutMenuOptions from "../../layouts/LayoutMenuOptions";
import Followers from "../../components/Followers";
export default function ControllerProfile({ type }) {
	let { id } = useParams();

	const {
		userInfo,
		findUserByAt,
		updatePhoto,
		updateBanner,
		getFollowers,
		getFollowings,
	} = useContext(userContext);

	const [user, setUser] = useState({});
	const [equal, setEqual] = useState();
	const [followers, setFollowers] = useState([]);
	const [followings, setFollowings] = useState([]);
	const [search, setSearch] = useState("Followings");

	useEffect(() => {
		if (id === userInfo.at) {
			setUser(userInfo);
			setEqual("Owner");
			console.log("entrou");
			findFollowings(userInfo.id);
		} else {
			findUserAt();
		}
	}, [id]);

	async function findUserAt() {
		const response = await findUserByAt(id);
		findFollowings(response.id);
		setUser(response);
		setEqual("Profile");
	}

	async function findFollowers(userId) {
		let response;
		if (equal === "Owner") {
			response = await getFollowers(userId ? userId : user.id);
			setFollowers(response || []);
		} else {
			response = await getFollowers(userId ? userId : user.id);
			setFollowers(response || []);
		}
		setSearch("Followers");
	}

	async function findFollowings(userId) {
		let response;
		if (equal === "Owner") {
			response = await getFollowings(userId ? userId : user.id);
			setFollowings(response || []);
		} else {
			response = await getFollowings(userId ? userId : user.id);
			setFollowings(response || []);
		}
		setSearch("Followings");
	}
	return (
		<>
			<CardProfile
				user={user}
				equal={equal}
				updatePhoto={updatePhoto}
				updateBanner={updateBanner}
			/>
			<LayoutMenuOptions
				equal={equal}
				findFollowers={findFollowers}
				findFollowings={findFollowings}
			/>
			{search === "Followers" &&
				followers.length > 0 &&
				followers.map((value, key) => (
					<Followers
						key={key}
						photo={value.photo}
						firstname={value.firstname}
						lastname={value.lastname}
						id={value.id}
						at={value.at}
						follow={value.follow}
					/>
				))}
			{search === "Followings" &&
				followings.length > 0 &&
				followings.map((value, key) => (
					<Followers
						key={key}
						photo={value.photo}
						firstname={value.firstname}
						lastname={value.lastname}
						id={value.id}
						at={value.at}
						follow={value.follow}
					/>
				))}
		</>
	);
}
