import React from "react";
import { Button } from "./style";

export default function ButtonPrimary({ label, color }) {
	if (color) {
		return <Button style={{ backgroundColor: color }}>{label}</Button>;
	} else {
		return <Button>{label}</Button>;
	}
}
