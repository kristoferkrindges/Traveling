import React, { useState, useContext } from "react";
import { Context as userContext } from "../../context/userContext";
import { Controller } from "./style";

export default function ParentComment({
	user,
	id,
	time,
	likes,
	pharase,
	comments,
	editComment,
	deleteComment,
	alreadyEdit,
	postId,
	pressLike,
	likeComment,
}) {
	const { userInfo, formatTimeDifference } = useContext(userContext);
	const [dropdown, setDropdown] = useState(false);
	const [edit, setEdit] = useState(false);
	const [statePhoto, setStatePhoto] = useState(user ? user.photo : "");
	const [stateName, setStateName] = useState(
		user ? user.firstname + " " + user.lastname : null
	);
	const [timeDate, setTimeDate] = useState(time);
	const [alreadyEditComment, setAlreadyEditComment] = useState(alreadyEdit);
	const [statePharase, setStatePharase] = useState(pharase);
	const [stateLike, setStateLike] = useState(pressLike);
	const [stateCountLike, setStateCountLike] = useState(likes);
	function HandlerOpen() {
		if (dropdown === false) {
			setDropdown(true);
		} else {
			setDropdown(false);
		}
	}
	function HandlerEdit() {
		if (edit === false) {
			setEdit(true);
		} else {
			setEdit(false);
		}
	}
	function clickEdit() {
		HandlerEdit();
		HandlerOpen();
	}
	async function saveEdit(evt) {
		evt.preventDefault();
		await editComment(id, statePharase);
		HandlerEdit();
		const currentTimeInMillis = new Date().getTime();
		const currentTimeAsString = currentTimeInMillis.toString();
		setTimeDate(currentTimeAsString);
	}
	async function deleteYourComment(evt) {
		evt.preventDefault();
		await deleteComment(id);
		HandlerOpen();
	}
	async function onPressLike() {
		if (stateLike) {
			await likeComment(id);
			setStateLike(false);
			if (stateCountLike > 0) {
				setStateCountLike(stateCountLike - 1);
			}
		} else {
			await likeComment(id);
			setStateLike(true);
			setStateCountLike(stateCountLike + 1);
		}
	}
	return <Controller></Controller>;
}
