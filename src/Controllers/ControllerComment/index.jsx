import React, { useState } from "react";
import Kris from "../../assets/images/foto3.png";
import Comment from "../../components/Comment";
export default function ControllerComment({ id }) {
	// Buscar por id
	const [comments, setComments] = useState([
		{
			userPhoto:
				"https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2023/04/14/594335823-harry-potter.jpg",
			userName: "Harry Potter",
			time: 6,
			pharase: "Live your life to the fullest while you can.",
		},
		{
			userPhoto: Kris,

			userName: "Kristofer Krindges",
			time: 2,
			pharase:
				"I believed in the impossible, challenged limits, and conquered.",
		},
		{
			userPhoto:
				"https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400",

			userName: "Samanta Lok",
			time: 2,
			pharase: "Live your life to the fullest while you can.",
		},
		{
			userPhoto:
				"https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400",
			userName: "Jessica Almeida",
			time: 2,
			pharase: "Live your life to the fullest while you can.",
		},
		{
			userPhoto:
				"https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400",
			userName: "Carlos Teves",
			time: 2,
			pharase: "Live your life to the fullest while you can.",
		},
		{
			userPhoto:
				"https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400",
			userName: "Kristofer RK",
			time: 2,
			pharase: "Live your life to the fullest while you can.",
		},
	]);
	return (
		<>
			{comments.length > 0 &&
				comments.map((value, key) => (
					<Comment
						key={key}
						userPhoto={value.userPhoto}
						userName={value.userName}
						time={value.time}
						likes={"2,7 thousand"}
						comments={"1,2 thousand"}
						pharase={value.pharase}
					/>
				))}
		</>
	);
}
