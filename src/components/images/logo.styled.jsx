import styled from "styled-components";
import { assets } from "../../styles/variables";

export const LogoTraveling = styled.img`
	/* width: ${assets.max}; */
	width: ${(prop) => prop.fontSize};
	cursor: pointer;
`;
