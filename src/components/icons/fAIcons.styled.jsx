import styled from "styled-components";
import { FaUserEdit, FaCamera } from "react-icons/fa";

export const EditIcon = styled(FaUserEdit)``;
export const CamIcon = styled(FaCamera)`
	cursor: pointer;
	&:hover {
		opacity: 0.7;
	}
`;
