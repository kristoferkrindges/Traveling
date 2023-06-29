import React, { useState } from "react";
import {
	BoxMessage,
	Header,
	ProfilePhoto,
	BoxName,
	Name,
	Status,
	Dropdown,
	Ellipsis,
	DropMenu,
	Item,
	NavLink,
	Content,
	Sent,
	Text,
	Time,
	Received,
	NoMessage,
	Bottom,
	Form,
	TextArea,
	ButtonSend,
	IconSend,
	IoArrow,
	ContentOther,
	BoxChat,
	Wrapper,
} from "./style";
export default function Chat({ click, type, TestOpen }) {
	const [dropdown, setDropdown] = useState(false);
	const [array, setArray] = useState(["1", "2"]);
	function HandlerOpen() {
		if (dropdown == false) {
			setDropdown(true);
		} else {
			setDropdown(false);
		}
	}
	return (
		<>
			{type ? (
				<Wrapper>
					<BoxMessage>
						<Header>
							<ProfilePhoto>
								<img
									src={
										"https://vikingstotem.files.wordpress.com/2013/04/vikings_ragnar_3-p1.jpeg?w=584"
									}
									alt=""
								/>
								<BoxName>
									<Name>Ragnar Lothbroke</Name>
									<Status>online</Status>
								</BoxName>
							</ProfilePhoto>
							<Dropdown>
								<Ellipsis onClick={HandlerOpen} />
								{dropdown ? (
									<DropMenu>
										<Item>
											<NavLink onClick={TestOpen}>Close</NavLink>
											<NavLink>All</NavLink>
										</Item>
									</DropMenu>
								) : (
									<></>
								)}
							</Dropdown>
						</Header>
						<ContentOther>
							{array.length > 1 ? (
								<>
									<Sent>
										<Text>Lorem ipsum dolor sit amet consectetur</Text>
										<Time>08:30</Time>
									</Sent>
									<Received>
										<Text>Lorem ipsum dolor sit amet consectetur!</Text>
										<Time>08:30</Time>
									</Received>
									<Received>
										<Text>Lorem ipsum dolor sit amet consectetur!</Text>
										<Time>08:30</Time>
									</Received>
									<Sent>
										<Text>Lorem ipsum dolor sit amet consectetur</Text>
										<Time>08:30</Time>
									</Sent>
								</>
							) : (
								<>
									<NoMessage>You don't have message</NoMessage>
								</>
							)}
						</ContentOther>

						<Bottom>
							<Form>
								<TextArea rows="1" placeholder="Type message..."></TextArea>
								<ButtonSend type="submit">
									<IconSend />
								</ButtonSend>
							</Form>
						</Bottom>
					</BoxMessage>
				</Wrapper>
			) : (
				<BoxChat>
					<Header>
						<ProfilePhoto>
							<IoArrow onClick={click} />
							<img
								src={
									"https://vikingstotem.files.wordpress.com/2013/04/vikings_ragnar_3-p1.jpeg?w=584"
								}
								alt=""
							/>
							<BoxName>
								<Name>Ragnar Lothbroke</Name>
								<Status>online</Status>
							</BoxName>
						</ProfilePhoto>
						<Dropdown>
							<Ellipsis onClick={HandlerOpen} />
							{dropdown ? (
								<DropMenu>
									<Item>
										<NavLink>Report</NavLink>
										<NavLink>All</NavLink>
									</Item>
								</DropMenu>
							) : (
								<></>
							)}
						</Dropdown>
					</Header>
					<Content>
						{array.length > 1 ? (
							<>
								<Sent>
									<Text>Lorem ipsum dolor sit amet consectetur</Text>
									<Time>08:30</Time>
								</Sent>
								<Received>
									<Text>Lorem ipsum dolor sit amet consectetur!</Text>
									<Time>08:30</Time>
								</Received>
								<Received>
									<Text>Lorem ipsum dolor sit amet consectetur!</Text>
									<Time>08:30</Time>
								</Received>
								<Sent>
									<Text>Lorem ipsum dolor sit amet consectetur</Text>
									<Time>08:30</Time>
								</Sent>
							</>
						) : (
							<>
								<NoMessage>You don't have message</NoMessage>
							</>
						)}
					</Content>

					<Bottom>
						<Form>
							<TextArea rows="1" placeholder="Type message..."></TextArea>
							<ButtonSend type="submit">
								<IconSend />
							</ButtonSend>
						</Form>
					</Bottom>
				</BoxChat>
			)}
		</>
	);
}
