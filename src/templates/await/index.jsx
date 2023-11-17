import React from "react";
import Logo from "../../assets/images/infinite-removebg-preview.png";
import { FlexColumnContainer } from "../../components/containers/flexColumn.styled";
import Loader from "../../components/loader";
import { PaddingContainer } from "../../components/containers/padding.styled";
import { H1Title } from "../../components/titles/h1Title.styled";
import { LogoTraveling } from "../../components/images/logo.styled";

export default function AwaitTemplate() {
	return (
		<FlexColumnContainer>
			<PaddingContainer>
				<LogoTraveling src={Logo} alt="Traveling" fontSize={`250px`} />
				<H1Title fontSize={`2.5rem`} marginBottom={`5rem`}>
					TRAVELING
				</H1Title>
				<Loader />
			</PaddingContainer>
		</FlexColumnContainer>
	);
}
