import React, { useState } from "react";
import { Link } from "react-router-dom";
import BoxChat from "./BoxChat";

// Gerenciar contexto
export default function ControllerBoxChat({ label }) {
	const [chat, setChat] = useState(true);
	function HandlerOpen(e) {
		e.preventDefault();
		if (chat == false) {
			setChat(true);
		} else {
			setChat(false);
		}
	}
	return <>{chat ? <BoxChat array={["2", "2"]} /> : <></>}</>;
}
