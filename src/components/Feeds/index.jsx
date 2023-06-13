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
	DropMenu,
	Item,
	NavLink,
} from "./style";
import { Link } from "react-router-dom";
export default function Feeds() {
	const [dropdown, setDropdown] = useState(false);
	function HandlerOpen() {
		if (dropdown == false) {
			setDropdown(true);
		} else {
			setDropdown(false);
		}
	}
	const [posts, setPosts] = useState([
		{
			userPhoto:
				"https://s2.glbimg.com/wB2k5I1ty4iVdwzurRl40rcoSqo=/e.glbimg.com/og/ed/f/original/2017/07/20/beach-1790049_960_720.jpg",
			photo:
				"https://escolaeducacao.com.br/wp-content/uploads/2019/07/praias-Praia-de-Taipu-de-Fora-Pen%C3%ADnsula-de-Mara%C3%BA-Bahia-12.jpg",
			userName: "Your Story",
		},
		{
			userPhoto:
				"https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2023/04/14/594335823-harry-potter.jpg",
			photo:
				"https://akns-images.eonline.com/eol_images/Entire_Site/20211120/rs_1200x1200-211220085429-1200.2Harry-Potter-20th-Anniversary_-Return-to-Hogwarts.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top",
			userName: "Harry Potter",
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
								<Ellips onClick={HandlerOpen} />
								{dropdown ? (
									<DropMenu>
										<Item>
											<NavLink>Report</NavLink>
											<NavLink>Other</NavLink>
										</Item>
									</DropMenu>
								) : (
									<></>
								)}
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
