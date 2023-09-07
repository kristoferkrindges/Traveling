import React from "react";
import { Container, Img, Title } from "./style";
import Logo from "../../assets/images/infinite-removebg-preview.png";
import Loader from "../../components/Loader";

function LoaderPage() {
	return (
		<Container>
			<Img src={Logo} />
			<Title>TRAVELING</Title>
			<Loader />
		</Container>
	);
}

export default LoaderPage;
