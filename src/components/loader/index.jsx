import React from "react";
import Loading from "../../assets/images/loading.svg";
import { FlexColumnContainer } from "../containers/flexColumnContainer.styled";
import LogoPage from "../images/logoPage";

export default function Loader() {
	return (
		<FlexColumnContainer>
			<LogoPage logo={Loading} alt="Loading" font={`150px`} />
		</FlexColumnContainer>
	);
}
