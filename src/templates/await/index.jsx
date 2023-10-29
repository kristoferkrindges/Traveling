import React from "react";
import Logo from "../../assets/images/infinite-removebg-preview.png";
import { FlexColumn } from "../../components/containers/flexColumn.styled";
import LogoPage from "../../components/images/logoPage";
import Loader from "../../components/loader";
import { ContainerPadding } from "../../components/containers/containerPadding.styled";
import TitleH1 from "../../components/titles/titleH1/titleH1";

export default function AwaitTemplate() {
	return (
		<FlexColumn>
			<ContainerPadding>
				<LogoPage logo={Logo} alt="Traveling" font={`250px`} />
				<TitleH1
					font={`2.5rem`}
					text={"TRAVELING"}
					marginBottom={`5rem`}
				></TitleH1>
				<Loader />
			</ContainerPadding>
		</FlexColumn>
	);
}
