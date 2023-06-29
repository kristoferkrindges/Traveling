import React from "react";
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
import Kris from "../../assets/images/foto3.png";
export default function InfoUser() {
	return (
		<Card>
			<BoxOne>
				<Modal>
					<img
						src={
							"https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400"
						}
						alt=""
					/>
				</Modal>
			</BoxOne>
			<BoxTwo>
				<Content>
					<Name>
						Kristofer R.K
						<br />
						<span>@KristoferRK</span>
					</Name>
					<Lists>
						<List>
							Posts<span>{40}</span>
						</List>
						<List>
							Followers<span>{50}</span>
						</List>
						<List>
							Following<span>{150}</span>
						</List>
					</Lists>
					<Link to="/profile">
						<Button>Profile</Button>
					</Link>
				</Content>
			</BoxTwo>
			<Circle>
				<Photo>
					<img src={Kris} alt="" />
				</Photo>
			</Circle>
		</Card>
	);
}
