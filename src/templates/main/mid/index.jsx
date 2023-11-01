import React from "react";
import { MidContainer } from "./style";
import CreatePost from "../../../components/features/post/createPost";
import HomeMidTemplate from "./home";

export default function MidTemplate({ type }) {
	return <MidContainer>{type === "Home" && <HomeMidTemplate />}</MidContainer>;
}
