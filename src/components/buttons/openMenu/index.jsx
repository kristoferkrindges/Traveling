import React from "react";
import { OpenContainer, ContextOpen } from "./style";

export default function OpenMenuButton({ open, click }) {
	return (
		<ContextOpen>
			<OpenContainer
				onClick={click}
				className={open && "active"}
			></OpenContainer>
		</ContextOpen>
	);
}
