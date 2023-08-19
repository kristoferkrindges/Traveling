import React from "react";
import { Container, Img } from "./style";
import Loading from "../../assets/images/loading.svg";

function Loader() {
	return (
		<Container>
			<Img src={Loading} alt="Loading"></Img>
		</Container>
	);
}

export default Loader;
