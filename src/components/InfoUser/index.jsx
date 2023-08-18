import React, { useContext } from "react";
import {
	Card,
	BoxOne,
	BoxTwo,
	Circle,
	Photo,
	Modal,
	Content,
	Name,
	Lists,
	List,
	Button,
} from "./style";
import { Link } from "react-router-dom";
import { Context } from "../../context/userContext";
export default function InfoUser() {
	const { userInfo } = useContext(Context);
	return (
		<Card>
			<BoxOne>
				<Modal>
					<img src={userInfo.banner} alt="" />
				</Modal>
			</BoxOne>
			<BoxTwo>
				<Content>
					<Name>
						{userInfo.firstname}
						<br />
						<span>@{userInfo.at}</span>
					</Name>
					<Lists>
						<List>
							Posts<span>{userInfo.posts}</span>
						</List>
						<List>
							Followers<span>{userInfo.followers}</span>
						</List>
						<List>
							Following<span>{userInfo.followings}</span>
						</List>
					</Lists>
					<Link to="/profile">
						<Button>Profile</Button>
					</Link>
				</Content>
			</BoxTwo>
			<Circle>
				<Photo>
					<img src={userInfo.photo} alt="" />
				</Photo>
			</Circle>
		</Card>
	);
}
