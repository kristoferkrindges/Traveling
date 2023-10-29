import React from "react";
import { Photo } from "./style";
export default function AvatarPhoto({ photo, click }) {
	return <Photo src={photo} onClick={click} />;
}
