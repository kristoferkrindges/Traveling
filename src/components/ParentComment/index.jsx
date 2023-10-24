import React, { useState, useContext } from "react";
import { Context as userContext } from "../../context/userContext";
import { Controller, Extends, Border, ProfilePhoto } from "./style";
import {
	Right,
	TopContainer,
	Ingo,
	NameContext,
	Name,
	Small,
	Space,
	Edit,
	Ellips,
	DropMenu,
	Item,
	NavLink,
	Caption,
	Form,
	TextArea,
	Pharase,
	SaveContainer,
	ActionButtons,
	InteractionButtons,
	Icon,
	HeartPress,
	Heart,
	Numbers,
} from "../Comment/style";
import ButtonPrimary from "../ButtonPrimary";
import { toast } from "react-toastify";
export default function ParentComment({
	user,
	id,
	time,
	likes,
	pharase,
	comments,
	editComment,
	deleteComment,
	alreadyEdit,
	postId,
	pressLike,
	likeComment,
}) {
	const { userInfo, formatTimeDifference } = useContext(userContext);
	const [dropdown, setDropdown] = useState(false);
	const [edit, setEdit] = useState(false);
	const [statePhoto, setStatePhoto] = useState(user ? user.photo : "");
	const [stateName, setStateName] = useState(
		user ? user.firstname + " " + user.lastname : null
	);
	const [timeDate, setTimeDate] = useState(time);
	const [alreadyEditComment, setAlreadyEditComment] = useState(alreadyEdit);
	const [stateText, setStateText] = useState(pharase);
	const [stateLike, setStateLike] = useState(pressLike);
	const [stateCountLike, setStateCountLike] = useState(likes);
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
	async function saveEdit(evt) {
		evt.preventDefault();
		if (stateText) {
			await editComment(id, stateText);
			HandlerEdit();
			const currentTimeInMillis = new Date().getTime();
			const currentTimeAsString = currentTimeInMillis.toString();
			setTimeDate(currentTimeAsString);
		} else {
			toast.error("There is nothing to be comment");
			HandlerEdit();
			setStateText(pharase);
		}
	}
	async function deleteYourComment(evt) {
		evt.preventDefault();
		await deleteComment(id);
		HandlerOpen();
	}
	async function onPressLike() {
		if (stateLike) {
			await likeComment(id);
			setStateLike(false);
			if (stateCountLike > 0) {
				setStateCountLike(stateCountLike - 1);
			}
		} else {
			await likeComment(id);
			setStateLike(true);
			setStateCountLike(stateCountLike + 1);
		}
	}
	return (
		<Controller>
			<Border></Border>
			<Extends>
				<ProfilePhoto>
					<img src={statePhoto} alt="" />
				</ProfilePhoto>
			</Extends>
			<Right>
				<TopContainer>
					<Ingo>
						<NameContext>
							<Name>{stateName}</Name>
							<Small>
								{formatTimeDifference(timeDate)}
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
												<NavLink onClick={deleteYourComment}>Delete</NavLink>
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
									value={stateText}
									onChange={(e) => {
										setStateText(e.target.value);
									}}
									maxLength={140}
								></TextArea>
							</Form>
						) : (
							<Pharase>{stateText}</Pharase>
						)}
					</Caption>
					{edit ? (
						<SaveContainer>
							<ButtonPrimary label="Save" click={(evt) => saveEdit(evt)} />
						</SaveContainer>
					) : (
						<>
							<ActionButtons>
								<InteractionButtons>
									<Icon>
										{stateLike ? (
											<HeartPress onClick={onPressLike} />
										) : (
											<Heart onClick={onPressLike} />
										)}
										<Numbers>{stateCountLike}</Numbers>
									</Icon>
								</InteractionButtons>
							</ActionButtons>
						</>
					)}
				</TopContainer>
			</Right>
		</Controller>
	);
}
