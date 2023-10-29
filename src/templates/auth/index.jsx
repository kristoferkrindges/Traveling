import React from "react";
import { Container, ShapeLeft, ShapeRight } from "./style";
import Auth from "../../components/features/auth";

export default function AuthTemplate() {
	return (
		<Container>
			<ShapeLeft /> <ShapeRight />
			<Auth />
		</Container>
	);
}
