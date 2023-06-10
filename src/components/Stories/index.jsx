import React, { useState } from "react";
import { MainContainer, Story, ProfilePhoto, UserName } from "./style";

export default function Stories() {
	const [sidebarOpen, setSidebarOpen] = useState();
	const [stories, setStories] = useState([
		{
			storie:
				"https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400",
			photo:
				"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
			name: "Your Story",
		},
		{
			storie:
				"https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400",
			photo:
				"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
			name: "Jack Dells",
		},
		{
			storie:
				"https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400",
			photo:
				"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
			name: "Samanta Lok",
		},
		{
			storie:
				"https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400",
			photo:
				"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
			name: "Jessica Almeida",
		},
		{
			storie:
				"https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400",
			photo:
				"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
			name: "Carlos Teves",
		},
		{
			storie:
				"https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400",
			photo:
				"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
			name: "Kristofer RK",
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
