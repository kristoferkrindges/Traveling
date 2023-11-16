import React, { useState } from "react";
import { Category, Posts } from "./style";

export default function SelectOptions({ type }) {
	const [activePrimary, setActivePrimary] = useState("active");
	const [activeGeneral, setActiveGeneral] = useState("");
	const [activeRequests, setActiveRequests] = useState("");

	const handlerActivePrimary = () => {
		setActivePrimary("active");
		setActiveGeneral("");
		setActiveRequests("");
	};
	const handlerActiveGeneral = () => {
		setActivePrimary("");
		setActiveGeneral("active");
		setActiveRequests("");
	};
	const handlerActiveRequests = () => {
		setActivePrimary("");
		setActiveGeneral("");
		setActiveRequests("active");
	};

	return (
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
	);
}
