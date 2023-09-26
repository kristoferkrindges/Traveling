import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context as userContext } from "../../context/userContext";
import CardProfile from "../../components/CardProfile";
import LayoutMenuOptions from "../../layouts/LayoutMenuOptions";
export default function ControllerProfile({ type }) {
	let { id } = useParams();

	const { userInfo, findUserByAt, updatePhoto, updateBanner } =
		useContext(userContext);

	const [user, setUser] = useState({});
	const [equal, setEqual] = useState();

	useEffect(() => {
		if (id === userInfo.at) {
			setUser(userInfo);
			setEqual("Owner");
			console.log("entrou");
		} else {
			findUserAt();
		}
	}, [id]);

	async function findUserAt() {
		const response = await findUserByAt(id);
		console.log(response);
		setUser(response);
		setEqual("Profile");
	}

	return (
		<>
			<CardProfile
				user={user}
				equal={equal}
				updatePhoto={updatePhoto}
				updateBanner={updateBanner}
			/>
			<LayoutMenuOptions equal={equal} />
		</>
	);
}
