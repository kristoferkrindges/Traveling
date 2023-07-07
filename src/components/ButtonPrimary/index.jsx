import React from "react";
import { Button } from "./style";

export default function ButtonPrimary({ label, color, click }) {
	function handler() {
		if (click) {
			click();
		}
	}
	if (color) {
		return (
			<Button onClick={handler} style={{ backgroundColor: color }}>
				{label}
			</Button>
		);
	} else {
		return <Button onClick={handler}>{label}</Button>;
	}
}
