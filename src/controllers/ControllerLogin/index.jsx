import React, { useContext, useState } from "react";
import Login from "../../components/Auth/Login";
import Register from "../../components/Auth/Register";
import { Container, ShapeLeft, ShapeRight } from "./style";

export default function ControllerLogin() {
	const [controller, setController] = useState(true);
	function controllerOrder() {
		if (controller) {
			setController(false);
		} else {
			setController(true);
		}
	}
	return (
		<Container>
			<ShapeLeft /> <ShapeRight />
			{controller ? (
				<Login controllerOrder={controllerOrder} />
			) : (
				<Register controllerOrder={controllerOrder} />
			)}
		</Container>
	);
}
