import React, { useState } from "react";
import {
	FeedsContainer,
	Feed,
	Head,
	User,
	ProfilePhoto,
	Ingo,
	Name,
	Small,
	Edit,
	Ellips,
	Photo,
	ActionButtons,
	InteractionButtons,
	BookMark,
	Heart,
	Comment,
	Share,
	Icon,
	Book,
	LikedBy,
	Span,
	P,
	Caption,
	Pharase,
	HarshTag,
	TextMuted,
} from "./style";

export default function Feeds() {
	const [posts, setPosts] = useState([
		{
			userPhoto:
				"https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400",
			photo:
				"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
			userName: "Your Story",
		},
		{
			userPhoto:
				"https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400",
			photo:
				"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
			userName: "Jack Dells",
		},
		{
			userPhoto:
				"https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400",
			photo:
				"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
			userName: "Samanta Lok",
		},
		{
			userPhoto:
				"https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400",
			photo:
				"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
			userName: "Jessica Almeida",
		},
		{
			userPhoto:
				"https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400",
			photo:
				"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
			userName: "Carlos Teves",
		},
		{
			userPhoto:
				"https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400",
			photo:
				"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
			userName: "Kristofer RK",
		},
	]);
	return (
		<FeedsContainer>
			{posts.length > 0 &&
				posts.map((value, key) => (
					<Feed>
						<Head>
							<User>
								<ProfilePhoto>
									<img src={value.userPhoto} alt="" />
								</ProfilePhoto>
								<Ingo>
									<Name>{value.userName}</Name>
									<Small>Poa, 15 MINUTES AGO</Small>
								</Ingo>
							</User>
							<Edit>
								<Ellips />
							</Edit>
						</Head>
						<Photo>
							<img src={value.photo} alt="" />
						</Photo>
						<ActionButtons>
							<InteractionButtons>
								<Icon>
									<Heart />
								</Icon>
								<Icon>
									<Comment />
								</Icon>
								<Icon>
									<Share />
								</Icon>
							</InteractionButtons>
							<BookMark>
								<Icon>
									<Book></Book>
								</Icon>
							</BookMark>
						</ActionButtons>
						<LikedBy>
							<Span>
								<img
									src={
										"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
									}
									alt=""
								/>
							</Span>
							<Span>
								<img
									src={
										"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
									}
									alt=""
								/>
							</Span>
							<Span>
								<img
									src={
										"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
									}
									alt=""
								/>
							</Span>
							<P>
								Liked by <b>Ernest Achiever</b> and <b>2,323 others</b>
							</P>
						</LikedBy>
						<Caption>
							<Pharase>
								<b>Kristofer RK</b>Do you speak English?
								<HarshTag>#english</HarshTag>
							</Pharase>
						</Caption>
						<TextMuted>View all 277 comments</TextMuted>
					</Feed>
				))}
		</FeedsContainer>
	);
}
