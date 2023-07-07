import React, { useState } from "react";
import Post from "../../components/Post";
import Kris from "../../assets/images/foto3.png";
import { Container } from "../../Layouts/LayoutOnlyPost/style";
export default function ControllerPost({ type }) {
	const [posts, setPosts] = useState([
		{
			userPhoto:
				"https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2023/04/14/594335823-harry-potter.jpg",
			photo:
				"https://img.freepik.com/fotos-premium/panorama-da-ilha-de-phi-phi_104337-9599.jpg",
			userName: "Harry Potter",
			time: 6,
			pharase: "Live your life to the fullest while you can.",
			hashtag: "English",
		},
		{
			userPhoto: Kris,
			photo:
				"https://escolaeducacao.com.br/wp-content/uploads/2019/07/praias-Praia-de-Taipu-de-Fora-Pen%C3%ADnsula-de-Mara%C3%BA-Bahia-12.jpg",
			userName: "Kristofer Krindges",
			time: 2,
			pharase:
				"I believed in the impossible, challenged limits, and conquered.",
			hashtag: "Impossible",
		},
		{
			userPhoto:
				"https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400",
			photo:
				"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
			userName: "Samanta Lok",
			time: 2,
			pharase: "Live your life to the fullest while you can.",
			hashtag: "English",
		},
		{
			userPhoto:
				"https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400",
			photo:
				"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
			userName: "Jessica Almeida",
			time: 2,
			pharase: "Live your life to the fullest while you can.",
			hashtag: "English",
		},
		{
			userPhoto:
				"https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400",
			photo:
				"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
			userName: "Carlos Teves",
			time: 2,
			pharase: "Live your life to the fullest while you can.",
			hashtag: "English",
		},
		{
			userPhoto:
				"https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400",
			photo:
				"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
			userName: "Kristofer RK",
			time: 2,
			pharase: "Live your life to the fullest while you can.",
			hashtag: "English",
		},
	]);
	return (
		<>
			{!type ? (
				posts.length > 0 &&
				posts.map((value, key) => (
					<Container>
						<Post
							type={type}
							key={key}
							userPhoto={value.userPhoto}
							photo={value.photo}
							userName={value.userName}
							time={value.time}
							likes={"13,7 thousand"}
							comments={"8,2 thousand"}
							pharase={value.pharase}
							hashtag={value.hashtag}
						/>
					</Container>
				))
			) : (
				<Post
					type={type}
					userPhoto={Kris}
					photo={
						"https://escolaeducacao.com.br/wp-content/uploads/2019/07/praias-Praia-de-Taipu-de-Fora-Pen%C3%ADnsula-de-Mara%C3%BA-Bahia-12.jpg"
					}
					userName={"Kristofer"}
					time={2}
					likes={"13,7 thousand"}
					comments={"8,2 thousand"}
					pharase={"Live your life to the fullest while you can."}
				/>
			)}
		</>
	);
}
