import React from "react";
import Loading from "../../assets/images/loading.svg";
import { FlexColumn } from "../containers/flexColumn.styled";
import LogoPage from "../images/logoPage";

function Loader() {
	return (
		<FlexColumn>
			<LogoPage logo={Loading} alt="Loading" font={`150px`} />
		</FlexColumn>
	);
}

export default Loader;
