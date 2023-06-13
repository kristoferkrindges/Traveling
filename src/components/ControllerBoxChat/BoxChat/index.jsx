import React, { useState } from "react";
import {
	Wrapper,
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
	Content,
	Sent,
	Text,
	Time,
	Received,
	Bottom,
	Form,
	TextArea,
	ButtonSend,
	IconSend,
	NoMessage,
} from "./style";
import { Link } from "react-router-dom";

export default function BoxChat({ array }) {
	const [dropdown, setDropdown] = useState(false);
	function HandlerOpen() {
		if (dropdown == false) {
			setDropdown(true);
		} else {
			setDropdown(false);
		}
	}
	return (
		<Wrapper>
			<BoxMessage>
				<Header>
					<ProfilePhoto>
						<img
							src={
								"https://s2.glbimg.com/wB2k5I1ty4iVdwzurRl40rcoSqo=/e.glbimg.com/og/ed/f/original/2017/07/20/beach-1790049_960_720.jpg"
							}
							alt=""
						/>
						<BoxName>
							<Name>Kristofer Krindges</Name>
							<Status>online</Status>
						</BoxName>
					</ProfilePhoto>
					<Dropdown>
						<Ellipsis onClick={HandlerOpen} />
						{dropdown ? (
							<DropMenu>
								<Item>
									<Link>Close</Link>
									<Link>Report</Link>
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
			</BoxMessage>
		</Wrapper>
	);
}
