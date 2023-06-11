import React, { useState } from "react";
import { MainContainer, Story, ProfilePhoto, UserName } from "./style";

export default function Stories() {
	const [sidebarOpen, setSidebarOpen] = useState();
	const [stories, setStories] = useState([
		{
			storie:
				"https://www.queroviajarmais.com/wp-content/uploads/2020/08/lago-louise.jpg",
			photo:
				"https://s2.glbimg.com/wB2k5I1ty4iVdwzurRl40rcoSqo=/e.glbimg.com/og/ed/f/original/2017/07/20/beach-1790049_960_720.jpg",
			name: "Your Story",
		},
		{
			storie:
				"https://i.pinimg.com/originals/7a/67/03/7a670363bbf825d15481ecb18e684400.jpg",
			photo:
				"https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2023/04/14/594335823-harry-potter.jpg",
			name: "Harry Potter",
		},
		{
			storie:
				"https://2.bp.blogspot.com/-jx-GDg6fLZ8/VZbYIl4m9JI/AAAAAAABHSo/QgiWW55E7b4/s1600/paisagens%252Bbonitas%2B%252817%2529.jpg",
			photo: "https://i.scdn.co/image/ab67706c0000da84c498e529d7a388a8c655eb33",
			name: "Samanta Larusso",
		},
		{
			storie:
				"https://qph.cf2.quoracdn.net/main-qimg-b1228822b01cb3990871176b4b45b160-lq",
			photo:
				"https://i.pinimg.com/736x/2e/c2/28/2ec228e768083b48b308247288ad3b0e.jpg",
			name: "Tom Riddle",
		},
		{
			storie:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5ljDegL02JZWRzR0ZfGAdFv-L0Ci__Z9Iw&usqp=CAU",
			photo:
				"https://upload.wikimedia.org/wikipedia/commons/3/3a/Ralph_Macchio_Photo_Op_GalaxyCon_Richmond_2019.jpg",
			name: "Daniel Larusso",
		},
		{
			storie:
				"https://cdn.maioresemelhores.com/imagens/paisagens-mais-bonitas-do-brasil-og.jpg",
			photo:
				"https://claudia.abril.com.br/wp-content/uploads/2021/08/EMBARGOED-Star-Big-Sky-Katheryn-Winnick-como-Jenny-Hoyt-1.jpg?quality=85&strip=info",
			name: "Kath Winnick",
		},
	]);
	return (
		<MainContainer>
			{stories.length > 0 &&
				stories.map((value, key) => (
					<Story
						style={{
							background: `url(${value.storie}) no-repeat center center/cover`,
						}}
					>
						<ProfilePhoto>
							<img src={value.photo} alt="" />
						</ProfilePhoto>
						<UserName>{value.name}</UserName>
					</Story>
				))}
		</MainContainer>
	);
}
