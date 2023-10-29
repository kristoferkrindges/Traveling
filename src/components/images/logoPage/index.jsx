import React from "react";
import { Img } from "./style";

export default function LogoPage({ logo, font }) {
	return <Img src={logo} fontSize={font} />;
}
