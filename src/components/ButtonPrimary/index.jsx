import React from "react";
import { Button } from "./style";

export default function ButtonPrimary({ label, color, click }) {
	function handler(evt) {
		if (click) {
			click(evt);
		}
	}
	if (color) {
		return (
			<Button onClick={handler} style={{ backgroundColor: color }}>
				{label}
			</Button>
		);
	} else {
		return (
			<Button
				onClick={(evt) => {
					handler(evt);
				}}
			>
				{label}
			</Button>
		);
	}
}
