import React from "react";
import { MainContainer, Container, Left, Middle, Right } from "./style";
import InfoUser from "../InfoUser";
import Stories from "../Stories";
import CreatePost from "../CreatePost";
import Feeds from "../Feeds";

export default function Layout() {
	return (
		<MainContainer>
			<Container>
				<Left>
					<InfoUser />
				</Left>
				<Middle>
					<Stories />
					<CreatePost />
					<Feeds />
				</Middle>
				<Right>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
					eum dicta recusandae impedit doloribus nemo officia, voluptatibus
					quaerat molestias libero rerum odio dolore, animi dolor illo aperiam.
					Labore, qui animi! Lorem ipsum, dolor sit amet consectetur adipisicing
					elit. Consequuntur eum dicta recusandae impedit doloribus nemo
					officia, voluptatibus quaerat molestias libero rerum odio dolore,
					animi dolor illo aperiam. Labore, qui animi!
				</Right>
			</Container>
		</MainContainer>
	);
}
