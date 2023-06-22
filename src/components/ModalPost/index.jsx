import React, { useState } from "react";
import {
	Overlay,
	Modal,
	Content,
	Heading,
	Title,
	IconPost,
	Ellips,
	DropMenu,
	Item,
	NavLink,
	User,
	ProfilePhoto,
	Ingo,
	Name,
	Small,
	Separator,
	Area,
	Form,
	TextArea,
	Send,
	Icons,
	Button,
	IoImages,
	IoVideocam,
	IoEmoji,
} from "./style";

export default function ModalPost({ click }) {
	const [dropdown, setDropdown] = useState(false);
	function HandlerOpen() {
		if (dropdown == false) {
			setDropdown(true);
		} else {
			setDropdown(false);
		}
	}
	return (
		<Overlay>
			<Modal>
				<Content>
					<Heading>
						<IconPost />
						<Title>Create Post</Title>
						<Ellips onClick={HandlerOpen} />
						{dropdown ? (
							<DropMenu>
								<Item>
									<NavLink onClick={click}>Close</NavLink>
									<NavLink>Other</NavLink>
								</Item>
							</DropMenu>
						) : (
							<></>
						)}
					</Heading>
					<Separator />
					<User>
						<ProfilePhoto>
							<img
								src={
									"https://s2.glbimg.com/wB2k5I1ty4iVdwzurRl40rcoSqo=/e.glbimg.com/og/ed/f/original/2017/07/20/beach-1790049_960_720.jpg"
								}
								alt=""
							/>
						</ProfilePhoto>
						<Ingo>
							<Name>Kristofer Krindges</Name>
							<Small>Publish for everyone</Small>
						</Ingo>
					</User>
					<Area>
						<Form>
							<TextArea
								rows="1"
								placeholder="What's on your mind, Kristofer?"
							></TextArea>
						</Form>
					</Area>
					<Send>
						<Icons>
							<IoImages />
							<IoVideocam />
							<IoEmoji />
						</Icons>
						<Button>Create</Button>
					</Send>
				</Content>
			</Modal>
		</Overlay>
	);
}
