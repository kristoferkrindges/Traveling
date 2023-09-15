import React from "react";

import ControllerProfile from "../../controllers/ControllerProfile";
import { Container } from "./style";
import Feeds from "../../components/Feeds";
import { Link } from "react-router-dom";

export default function LayoutProfile() {
	return (
		// <>
		// 	<Container>
		// 		<Feeds />
		// 	</Container>
		// </>
		<>
			<ControllerProfile />
			<Container>
				{/* <Feeds /> */}
				<Link to="/profile/Amandinha">Oi</Link>
			</Container>
		</>
	);
}
