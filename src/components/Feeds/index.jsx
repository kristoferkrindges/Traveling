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
import Kris from "../../assets/images/foto3.png";
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
			userPhoto: Kris,
			photo:
				"https://escolaeducacao.com.br/wp-content/uploads/2019/07/praias-Praia-de-Taipu-de-Fora-Pen%C3%ADnsula-de-Mara%C3%BA-Bahia-12.jpg",
			userName: "Kristofer Krindges",
		},
		{
			userPhoto:
				"https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2023/04/14/594335823-harry-potter.jpg",
			photo:
				"https://img.freepik.com/fotos-premium/panorama-da-ilha-de-phi-phi_104337-9599.jpg",
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
										"https://i.scdn.co/image/ab67706c0000da84c498e529d7a388a8c655eb33"
									}
									alt=""
								/>
							</Span>
							<Span>
								<img
									src={
										"https://i.pinimg.com/736x/2e/c2/28/2ec228e768083b48b308247288ad3b0e.jpg"
									}
									alt=""
								/>
							</Span>
							<Span>
								<img
									src={
										"https://upload.wikimedia.org/wikipedia/commons/3/3a/Ralph_Macchio_Photo_Op_GalaxyCon_Richmond_2019.jpg"
									}
									alt=""
								/>
							</Span>
							<P>
								Liked by <b>Samanta Larusso </b> and <b>1,147 others</b>
							</P>
						</LikedBy>
						<Caption>
							<Pharase>
								<b>Harry Potter</b> Do you speak English?
								<HarshTag> #English</HarshTag>
							</Pharase>
						</Caption>
						<TextMuted>View all 124 comments</TextMuted>
					</Feed>
				))}
		</FeedsContainer>
	);
}
