import React, { useState, useContext } from "react";
import { Container, ProfilePhoto } from "./style";
import Kris from "../../assets/images/foto3.png";
export default function CreateComment({ userPhoto, userName, time }) {
	return (
		<Container>
			<User>
				<ProfilePhoto>
					<img src={userPhoto} alt="" />
				</ProfilePhoto>
				<Ingo>
					<Name>{userName}</Name>
					<Small>
						{time}
						<Space>h</Space>
					</Small>
				</Ingo>
				<Edit>
					<Ellips onClick={HandlerOpen} />
					{dropdown ? (
						<DropMenu>
							<Item>
								<NavLink>Report</NavLink>
								<NavLink>Other</NavLink>
							</Item>
						</DropMenu>
					) : (
						<></>
					)}
				</Edit>
			</User>
		</Container>
	);
}
