import React, { useState, useContext } from "react";
import { Context as userContext } from "../../context/userContext";
import {
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
	Form,
	TextArea,
	SaveContainer,
} from "./style";
import ButtonPrimary from "../ButtonPrimary";

export default function Comment({
	user,
	time,
	likes,
	pharase,
	comments,
	editComment,
	deleteComment,
	alreadyEdit,
}) {
	const { userInfo, formatTimeDifference } = useContext(userContext);
	const [dropdown, setDropdown] = useState(false);
	const [edit, setEdit] = useState(false);
	const [alreadyEditComment, setAlreadyEditComment] = useState(alreadyEdit);
	const [statePharase, setStatePharase] = useState(pharase);
	function HandlerOpen() {
		if (dropdown === false) {
			setDropdown(true);
		} else {
			setDropdown(false);
		}
	}
	function HandlerEdit() {
		if (edit === false) {
			setEdit(true);
		} else {
			setEdit(false);
		}
	}
	function clickEdit() {
		HandlerEdit();
		HandlerOpen();
	}
	return (
		<Controller>
			<Extends>
				<ProfilePhoto>
					<img src={user ? user.photo : ""} alt="" />
				</ProfilePhoto>
				<Border></Border>
			</Extends>
			<Left>
				<Ingo>
					<NameContext>
						<Name>{user ? user.firstname + " " + user.lastname : null}</Name>
						<Small>
							{formatTimeDifference(time)}
							{alreadyEditComment ? <Space>Edit</Space> : null}
						</Small>
					</NameContext>
					<Edit>
						<Ellips onClick={HandlerOpen} />
						{dropdown ? (
							<DropMenu>
								<Item>
									<NavLink>Report</NavLink>
									{userInfo.at === user.at ? (
										<>
											<NavLink onClick={clickEdit}>Edit</NavLink>
											<NavLink>Delete</NavLink>
										</>
									) : null}
								</Item>
							</DropMenu>
						) : (
							<></>
						)}
					</Edit>
				</Ingo>

				<Caption>
					{edit ? (
						<Form>
							<TextArea
								rows="1"
								value={statePharase}
								onChange={(e) => {
									setStatePharase(e.target.value);
								}}
								maxLength={140}
							></TextArea>
						</Form>
					) : (
						<Pharase>{statePharase}</Pharase>
					)}
				</Caption>

				{edit ? (
					<SaveContainer>
						<ButtonPrimary label="Save" />
					</SaveContainer>
				) : (
					<>
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
					</>
				)}
			</Left>
		</Controller>
	);
}
