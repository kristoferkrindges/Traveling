import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../../../contexts/userContext";
import { FollowersAndFollowingsContainer } from "./style";
import HeadingContainer from "../../../containers/heading";
import UserMessages from "../userMessage";
import { NotContentYet } from "../../../../templates/main/mid/profile/style";
import Loader from "../../../loader";
import { PostContext } from "../../../../contexts/postContext";
import SearchBar from "../../../inputs/searchBar";

export default function CardFollowingsAndFollowers({
	id,
	type,
	setStateModalFollowingsAndFollowers,
}) {
	const { getFollowers, getFollowings } = useContext(UserContext);

	const { findUsersLikes, findUsersFavorites } = useContext(PostContext);

	const modalRef = useRef(null);

	const [users, setUsers] = useState([]);
	const [filteredData, setFilteredData] = useState([]);

	useEffect(() => {
		if (type === "Followers") {
			findFollowers();
		}
		if (type === "Followings") {
			findFollowings();
		}
		if (type === "Likes") {
			findLikesUsers();
		}
		if (type === "Favorites") {
			findFavoritesUsers();
		}
	}, [id, type]);

	useEffect(() => {
		setFilteredData(users);
	}, [users]);

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	const handleClickOutside = (event) => {
		if (modalRef.current && !modalRef.current.contains(event.target)) {
			setStateModalFollowingsAndFollowers(undefined);
		}
	};

	const findLikesUsers = async () => {
		setUsers([]);
		const response = await findUsersLikes(id);
		setUsers(response || []);
	};

	const findFavoritesUsers = async () => {
		setUsers([]);
		const response = await findUsersFavorites(id);
		setUsers(response || []);
	};

	const findFollowers = async () => {
		setUsers([]);
		const response = await getFollowers(id);
		setUsers(response || []);
	};

	const findFollowings = async () => {
		setUsers([]);
		const response = await getFollowings(id);
		setUsers(response || []);
	};

	const handlerClose = () => {
		setStateModalFollowingsAndFollowers(undefined);
	};

	return (
		<FollowersAndFollowingsContainer ref={modalRef}>
			<HeadingContainer type={type} text={type} click={handlerClose} />
			<SearchBar data={users} setFilteredData={setFilteredData} />
			{users ? (
				filteredData.length > 0 ? (
					filteredData.map((value, key) => (
						<UserMessages
							key={key}
							photo={value.photo}
							name={value.firstname + " " + value.lastname}
							message={"@" + value.at}
							online={false}
							type={false}
							at={value.at}
						/>
					))
				) : (
					<NotContentYet>This user has no {type} yet</NotContentYet>
				)
			) : (
				<Loader />
			)}
		</FollowersAndFollowingsContainer>
	);
}
