import React from "react";
import { SThemeToggler, SToggleThumb } from "./style";

export default function SliderButton({ active, click }) {
	return (
		<SThemeToggler isActive={active} onClick={click}>
			<SToggleThumb style={active ? { right: "1px" } : {}} />
		</SThemeToggler>
	);
}
