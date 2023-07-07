import React, { useState, useContext } from "react";
import {
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
	Space,
	Numbers,
	EditPhoto,
	InputFile,
	DeletIcon,
	LabelFile,
	IoCloudUpload,
	SaveContainer,
} from "./style";

import ButtonPrimary from "../ButtonPrimary";

import { PostContext } from "../../context/postContext";

export default function Feeds({
	type,
	userPhoto,
	photo,
	userName,
	time,
	likes,
	comments,
	pharase,
	hashtag,
}) {
	const [dropdown, setDropdown] = useState(false);
	const { edit, HandlerEdit } = useContext(PostContext);
	function HandlerOpen() {
		if (dropdown == false) {
			setDropdown(true);
		} else {
			setDropdown(false);
		}
	}

	return (
		<>
			<Head>
				<User>
					<ProfilePhoto>
						<img src={userPhoto} alt="" />
					</ProfilePhoto>
					<Ingo>
						<Name>{userName}</Name>
						<Small>
							{time}
							<Space>h</Space>
						</Small>
					</Ingo>
				</User>
				<Edit>
					<Ellips onClick={HandlerOpen} />
					{dropdown ? (
						<DropMenu>
							<Item>
								<NavLink>Report</NavLink>
								<NavLink onClick={HandlerEdit}>Edit</NavLink>
							</Item>
						</DropMenu>
					) : (
						<></>
					)}
				</Edit>
			</Head>
			<Caption>
				<Pharase>
					{pharase}
					<HarshTag> #{hashtag}</HarshTag>
				</Pharase>
			</Caption>
			<Photo>
				<img
					src={photo}
					style={edit ? { filter: `brightness(0.25) opacity(0.75)` } : {}}
					alt=""
				/>
				{edit ? (
					<EditPhoto>
						<InputFile id="uploadBtn" type="file" />
						<LabelFile for="uploadBtn">
							<IoCloudUpload />
						</LabelFile>
						<DeletIcon />
					</EditPhoto>
				) : (
					<></>
				)}
			</Photo>
			{!edit ? (
				<ActionButtons>
					<InteractionButtons>
						<Icon>
							<Heart />
							<Numbers>{likes}</Numbers>
						</Icon>
						<Icon>
							<Comment />
							<Numbers>{comments}</Numbers>
						</Icon>
					</InteractionButtons>
					<BookMark>
						<Icon>
							<Share />
						</Icon>
						<Icon>
							<Book />
						</Icon>
					</BookMark>
				</ActionButtons>
			) : (
				<></>
			)}
			{!edit ? (
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
						Liked by <b>Samanta Larusso </b> and <b>{comments} others</b>
					</P>
				</LikedBy>
			) : (
				<></>
			)}
			{!edit ? (
				!type ? (
					<TextMuted>View all 124 comments</TextMuted>
				) : (
					<></>
				)
			) : (
				<></>
			)}

			{edit ? (
				<SaveContainer>
					<ButtonPrimary label="Save" click={HandlerEdit} />
				</SaveContainer>
			) : (
				<></>
			)}
		</>
	);
}
