import React, { useState } from "react";
import {
	Overlay,
	Modal,
	Content,
	Heading,
	Title,
	IoPerson,
	Ellips,
	DropMenu,
	Item,
	NavLink,
	Separator,
	UserCover,
	EditPhotoCover,
	FaCam,
	UserPhoto,
	Image,
	EditPhotoProfile,
	Inputs,
	Controller,
	ContainerInput,
	InputName,
	TextInput,
	RiAtt,
	DateBirth,
	TitleBirth,
	Birth,
	IoCalendar,
	EditCalendar,
	ContextBirth,
	ContextCalendar,
	Save,
} from "./style";
import Kris from "../../assets/images/foto3.png";
import ButtonPrimary from "../ButtonPrimary";

export default function ModalEditUser({ id = "overlay", clickClose }) {
	const [dropdown, setDropdown] = useState(false);
	function HandlerOpen() {
		if (dropdown == false) {
			setDropdown(true);
		} else {
			setDropdown(false);
		}
	}

	const handleOutsideClick = (e) => {
		if (e.target.id == id) clickClose();
	};

	return (
		<Overlay id={id} onClick={handleOutsideClick}>
			<Modal>
				<Content>
					<Heading>
						<IoPerson />
						<Title>Edit profile</Title>
						<Ellips onClick={HandlerOpen} />
						{dropdown ? (
							<DropMenu>
								<Item>
									<NavLink onClick={clickClose}>Close</NavLink>
									<NavLink>Other</NavLink>
								</Item>
							</DropMenu>
						) : (
							<></>
						)}
					</Heading>
					<Separator />
					<UserCover>
						<img
							src={
								"https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400"
							}
							alt=""
						/>
						<EditPhotoCover>
							<FaCam />
							Edit Cover Photo
						</EditPhotoCover>
					</UserCover>
					<UserPhoto>
						<Image>
							<img src={Kris} />
							<EditPhotoProfile>
								<FaCam />
							</EditPhotoProfile>
						</Image>
					</UserPhoto>
					<Inputs>
						<Controller>
							<span>Nome</span>
							<ContainerInput>
								<InputName
									type="text"
									placeholder="Nome do produto"
									value={"Kristofer Krindges"}
									minlength="3"
									maxlength="21"
								/>
								<TextInput>
									<IoPerson />
								</TextInput>
							</ContainerInput>
						</Controller>
						<Controller>
							<span>At</span>
							<ContainerInput>
								<InputName
									type="text"
									placeholder="Nome do produto"
									value={"@" + "KristoferRK"}
									minlength="3"
									maxlength="13"
								/>
								<TextInput>
									<RiAtt />
								</TextInput>
							</ContainerInput>
						</Controller>
					</Inputs>
					{/* <DateBirth>
						<ContextBirth>
							<TitleBirth>Date of birth</TitleBirth>
							<Birth>November 16, 1999 </Birth>
						</ContextBirth>
						<EditCalendar>
							<IoCalendar />
						</EditCalendar>
					</DateBirth> */}
					<Save>
						<ButtonPrimary label={"Save"} />
					</Save>
				</Content>
			</Modal>
		</Overlay>
	);
}
