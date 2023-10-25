import React, { useState } from "react";
import { Category, Posts } from "./style";

export default function SelectOptionsNotification({
	searchAllNotification,
	searchUnreadNotification,
}) {
	const [activeAll, setActiveAll] = useState("");
	const [activeUnread, setActiveUnread] = useState("active");

	function handlerActiveAll() {
		setActiveAll("active");
		setActiveUnread("");
		searchAllNotification();
	}
	function handlerActiveUnread() {
		setActiveAll("");
		setActiveUnread("active");
		searchUnreadNotification();
	}

	return (
		<Category>
			<Posts className={activeUnread} onClick={() => handlerActiveUnread()}>
				Unread
			</Posts>
			<Posts className={activeAll} onClick={() => handlerActiveAll()}>
				All
			</Posts>
		</Category>
	);
}
