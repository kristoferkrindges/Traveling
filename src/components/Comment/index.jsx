import React, { useState } from "react";
import {
	Container,
	Left,
	Controller,
	Extends,
	ProfilePhoto,
	Ingo,
	NameContext,
	Name,
	Small,
	Edit,
	Ellips,
	ActionButtons,
	InteractionButtons,
	BookMark,
	Heart,
	IconComment,
	Share,
	Icon,
	Caption,
	Pharase,
	DropMenu,
	Item,
	NavLink,
	Space,
	Numbers,
	Border,
} from "./style";
import Kris from "../../assets/images/foto3.png";
export default function Comment({
	userPhoto,
	userName,
	time,
	likes,
	pharase,
	comments,
}) {
	const [dropdown, setDropdown] = useState(false);
	function HandlerOpen() {
		if (dropdown == false) {
			setDropdown(true);
		} else {
			setDropdown(false);
		}
	}
	return (
		<Container>
			<Controller>
				<Extends>
					<ProfilePhoto>
						<img src={userPhoto} alt="" />
					</ProfilePhoto>
					<Border></Border>
				</Extends>
				<Left>
					<Ingo>
						<NameContext>
							<Name>{userName}</Name>
							<Small>
								{time}
								<Space>h</Space>
							</Small>
						</NameContext>
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
					</Ingo>
					<Caption>
						<Pharase>{pharase}</Pharase>
					</Caption>
					<ActionButtons>
						<InteractionButtons>
							<Icon>
								<Heart />
								<Numbers>{likes}</Numbers>
							</Icon>
							<Icon>
								<IconComment />
								<Numbers>{comments}</Numbers>
							</Icon>
						</InteractionButtons>
						<BookMark>
							<Icon>
								<Share />
							</Icon>
						</BookMark>
					</ActionButtons>
				</Left>
			</Controller>
		</Container>
	);
	// return (
	// 	<Container>
	// 		<Head>
	// 			<User>
	// 				<ProfilePhoto>
	// 					<img src={userPhoto} alt="" />
	// 				</ProfilePhoto>
	// 				<Ingo>
	// 					<Name>{userName}</Name>
	// 					<Small>
	// 						{time}
	// 						<Space>h</Space>
	// 					</Small>
	// 					<Caption>
	// 						<Pharase>{pharase}</Pharase>
	// 					</Caption>
	// 				</Ingo>
	// 			</User>
	// 			<Edit>
	// 				<Ellips onClick={HandlerOpen} />
	// 				{dropdown ? (
	// 					<DropMenu>
	// 						<Item>
	// 							<NavLink>Report</NavLink>
	// 							<NavLink>Other</NavLink>
	// 						</Item>
	// 					</DropMenu>
	// 				) : (
	// 					<></>
	// 				)}
	// 			</Edit>
	// 		</Head>
	// 		<ActionButtons>
	// 			<InteractionButtons>
	// 				<Icon>
	// 					<Heart />
	// 					<Numbers>{likes}</Numbers>
	// 				</Icon>
	// 				<Icon>
	// 					<IconComment />
	// 					<Numbers>{comments}</Numbers>
	// 				</Icon>
	// 			</InteractionButtons>
	// 			<BookMark>
	// 				<Icon>
	// 					<Share />
	// 				</Icon>
	// 			</BookMark>
	// 		</ActionButtons>
	// 	</Container>
	// );
}
