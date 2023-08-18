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

export default function ModalPost({ id = "modal", click, userInfo }) {
	const [dropdown, setDropdown] = useState(false);
	function HandlerOpen() {
		if (dropdown == false) {
			setDropdown(true);
		} else {
			setDropdown(false);
		}
	}
	const handleOutsideClick = (e) => {
		if (e.target.id == id) click();
	};
	return (
		<Overlay id={id} onClick={handleOutsideClick}>
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
							<img src={userInfo.photo} alt="" />
						</ProfilePhoto>
						<Ingo>
							<Name>{userInfo.firstname + " " + userInfo.lastname}</Name>
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
						<Button>Post</Button>
					</Send>
				</Content>
			</Modal>
		</Overlay>
	);
}
