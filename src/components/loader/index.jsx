import React from "react";
import Loading from "../../assets/images/loading.svg";
import { FlexColumnContainer } from "../containers/flexColumn.styled";
import { LogoTraveling } from "../images/logo.styled";

export default function Loader() {
	return (
		<FlexColumnContainer>
			<LogoTraveling src={Loading} alt="Loading" fontSize={`150px`} />
		</FlexColumnContainer>
	);
}
