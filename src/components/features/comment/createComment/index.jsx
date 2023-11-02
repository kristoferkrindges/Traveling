import React, { useState, useContext } from "react";
import {
	CreateCommentContainer,
	ProfilePhoto,
	Border,
	ContextText,
	Area,
	TextArea,
	ButtonSend,
} from "./style";
import { UserContext } from "../../../../contexts/userContext";
import { toast } from "react-toastify";
import { SendIcon } from "../../../icons/iO5Icons.styled";
import { AvatarPhoto } from "../../../images/avatar.styled";
import { AssistantContext } from "../../../../contexts/assistantContext";
import { CommentContext } from "../../../../contexts/commentContext";
import LoaderModal from "../../../modals/loader";
export default function CreateComment({ type, idComment, postId }) {
	const { userInfo } = useContext(UserContext);
	const { insertComment } = useContext(CommentContext);
	const { formatTime } = useContext(AssistantContext);

	const [text, setText] = useState();
	const [isFocused, setIsFocused] = useState(false);
	const [progress, setProgress] = useState(false);

	const create = async (evt) => {
		evt.preventDefault();
		if (text) {
			await createComment(text, type, idComment);
			setText("");
		} else {
			toast.error("There is nothing to be comment");
		}
	};

	async function createComment() {
		setProgress(true);
		let comment;
		if (type) {
			comment = {
				phrase: text,
				img: "",
				datePublic: formatTime(),
				parentComment: idComment,
			};
		} else {
			comment = {
				phrase: text,
				img: "",
				datePublic: formatTime(),
				postId: postId,
			};
		}
		// const newComment = await insertComment(comment);
		// setComments((prevComments) => [newComment, ...prevComments]);
		await insertComment(comment);
		// await searchComments();
		setProgress(false);
	}
	return (
		<>
			{!progress || <LoaderModal />}
			<CreateCommentContainer>
				<ProfilePhoto>
					<AvatarPhoto src={userInfo.photo} />
					{type ? <Border /> : null}
				</ProfilePhoto>
				<ContextText>
					<Area>
						<TextArea
							rows="1"
							placeholder={isFocused ? "" : "Type comment..."}
							maxLength={140}
							onChange={(e) => {
								setText(e.target.value);
							}}
							value={text}
							onFocus={() => setIsFocused(true)}
							onBlur={() => setIsFocused(false)}
						></TextArea>
					</Area>
					<ButtonSend onClick={create}>
						<SendIcon />
					</ButtonSend>
				</ContextText>
			</CreateCommentContainer>
		</>
	);
}
