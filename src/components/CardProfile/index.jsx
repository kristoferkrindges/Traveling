import React, { useState, useContext } from "react";
import {
	Container,
	Head,
	Bottom,
	Image,
	Info,
	Name,
	Sign,
	Lists,
	List,
	Button,
	FaEdit,
	EditPhotoProfile,
	FaCam,
	EditPhotoCover,
} from "./style";
import Kris from "../../assets/images/foto3.png";
export default function CardProfile() {
	return (
		<Container>
			<Head>
				<img
					src={
						"https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400"
					}
					alt=""
				/>
				<EditPhotoCover>
					<FaCam />
					Edit Cover Photo
				</EditPhotoCover>
			</Head>
			<Bottom>
				<Image>
					<img src={Kris} />
					<EditPhotoProfile>
						<FaCam />
					</EditPhotoProfile>
				</Image>
				<Info>
					<Name>Kristofer Rossoni Krindges</Name>
					<Sign>@KristoferRK</Sign>
				</Info>
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
				<Button>
					<FaEdit />
				</Button>
			</Bottom>
		</Container>
	);
}
