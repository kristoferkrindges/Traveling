import styled from "styled-components";
import { assets } from "../../../styles/variables";

export const Img = styled.img`
	/* width: ${assets.max}; */
	width: ${(prop) => prop.fontSize};
`;
