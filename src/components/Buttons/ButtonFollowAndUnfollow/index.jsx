import React from "react";
import { Button } from "./style";
export default function ButtonFollowAndUnfollow({ label, click }) {
	return <Button onClick={(evt) => click(evt)}>{label}</Button>;
}
