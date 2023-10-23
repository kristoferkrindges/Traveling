import React, { useState, useContext } from "react";
import { Context as userContext } from "../../context/userContext";
import { CommentContext } from "../../context/commentContext";
import {
	TopContainer,
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
	HeartPress,
	Right,
	ContainerParentComment,
} from "./style";
import ButtonPrimary from "../ButtonPrimary";
import ParentComment from "../ParentComment";

export default function Comment({
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
	const { findChildsComments } = useContext(CommentContext);
	const { userInfo, formatTimeDifference } = useContext(userContext);
	const [dropdown, setDropdown] = useState(false);
	const [edit, setEdit] = useState(false);
	const [statePhoto, setStatePhoto] = useState(user ? user.photo : "");
	const [stateName, setStateName] = useState(
		user ? user.firstname + " " + user.lastname : null
	);
	const [timeDate, setTimeDate] = useState(time);
	const [alreadyEditComment, setAlreadyEditComment] = useState(alreadyEdit);
	const [statePharase, setStatePharase] = useState(pharase);
	const [stateLike, setStateLike] = useState(pressLike);
	const [stateCountLike, setStateCountLike] = useState(likes);
	const [stateParentComment, setStateParentComment] = useState(false);
	const [parentsComments, setParentsComments] = useState([]);
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
		await editComment(id, statePharase);
		HandlerEdit();
		const currentTimeInMillis = new Date().getTime();
		const currentTimeAsString = currentTimeInMillis.toString();
		setTimeDate(currentTimeAsString);
		setAlreadyEditComment(true);
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
	async function searchParentsComments() {
		const parents = await findChildsComments(id);
	}
	return (
		<Controller>
			<Extends>
				<ProfilePhoto>
					<img src={statePhoto} alt="" />
				</ProfilePhoto>
				<Border></Border>
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
				</TopContainer>
				<ContainerParentComment>
					{!edit
						? stateParentComment
							? parentsComments.length > 0 &&
							  parentsComments.map((value, key) => (
									<ParentComment
										key={key}
										id={value.id}
										user={value.userAllResponse}
										time={value.datepublic}
										likes={value.likes}
										comments={value.comments}
										pharase={value.phrase}
										alreadyEdit={value.edit}
										postId={value.postId}
										editComment={editComment}
										pressLike={value.pressLike}
										likeComment={likeComment}
									/>
							  ))
							: null
						: null}
				</ContainerParentComment>
			</Right>
		</Controller>
	);
}
