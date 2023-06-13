import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import BoxChat from "./BoxChat";
import { MessageContext } from "../../context/messageContext";

// Gerenciar contexto
export default function ControllerBoxChat({ label }) {
	const { openMessage, TestOpen } = useContext(MessageContext);
	return (
		<>
			{openMessage ? <BoxChat array={["2", "2"]} TestOpen={TestOpen} /> : <></>}
		</>
	);
}
