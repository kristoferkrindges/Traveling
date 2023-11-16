import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../../../contexts/userContext";
import { FollowersAndFollowingsContainer } from "./style";
import HeadingContainer from "../../../containers/heading";
import UserMessages from "../userMessage";
import { NotContentYet } from "../../../../templates/main/mid/profile/style";
import Loader from "../../../loader";

export default function CardFollowingsAndFollowers({
	id,
	type,
	setStateModalFollowingsAndFollowers,
}) {
	const { getFollowers, getFollowings } = useContext(UserContext);

	const modalRef = useRef(null);

	const [users, setUsers] = useState([]);

	useEffect(() => {
		if (type === "Followers") {
			findFollowers();
		}
		if (type === "Followings") {
			findFollowings();
		}
	}, [id, type]);

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
			<HeadingContainer text={type} click={handlerClose} />
			{users ? (
				users.length > 0 ? (
					users.map((value, key) => (
						<UserMessages
							key={key}
							photo={value.photo}
							name={value.firstname + " " + value.lastname}
							// message={value.message[value.message.length - 1]}
							message={"@" + value.at}
							// online={value.online}
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