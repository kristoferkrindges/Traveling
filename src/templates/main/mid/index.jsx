import React from "react";
import { MidContainer } from "./style";
import CreatePost from "../../../components/features/post/createPost";

export default function MidTemplate({ type }) {
	return (
		<MidContainer>
			{type === "Home" && (
				<>
					<CreatePost />
				</>
			)}
		</MidContainer>
	);
}
