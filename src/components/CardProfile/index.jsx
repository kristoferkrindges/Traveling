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
} from "./style";
import { Link } from "react-router-dom";
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
			</Head>
			<Bottom>
				<Image>
					<img
						src={
							"https://s2.glbimg.com/wB2k5I1ty4iVdwzurRl40rcoSqo=/e.glbimg.com/og/ed/f/original/2017/07/20/beach-1790049_960_720.jpg"
						}
					/>
				</Image>
				<EditPhotoProfile>
					<FaCam />
				</EditPhotoProfile>
				<Info>
					<Name>Kristofer Rossoni Krindges</Name>
					<Sign>@KristoferRK</Sign>
				</Info>
				<Lists>
					<List>
						Posts<span>{50}</span>
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
