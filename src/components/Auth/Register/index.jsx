import React, { useState } from "react";
import {
	ContainerRegister,
	Logo,
	Form,
	Title,
	Fields,
	FormIcon,
	UserCircle,
	FormInput,
	Label,
	Input,
	Lock,
	OrderController,
	Button,
	ContainerGoogle,
	Text,
	IconGoogle,
	ContainerIcon,
	Mail,
	TwoPeople,
	At,
} from "./style";
import Infinite from "../../../assets/images/infinite-removebg-preview.png";
export default function Register({ controllerOrder }) {
	const [emailFocused, setEmailFocused] = useState(false);
	const [passwordFocused, setPasswordFocused] = useState(false);
	const [firstnameFocused, setFirstnameFocused] = useState(false);
	const [lastnameFocused, setLastnameFocused] = useState(false);
	const [atFocused, setAtFocused] = useState(false);
	return (
		<ContainerRegister>
			<Form action="">
				<Title>Register</Title>
				<Fields id="marg">
					<FormIcon>
						<UserCircle />
					</FormIcon>
					<FormInput>
						{!firstnameFocused ? <Label>Firstname</Label> : <></>}
						<Input
							type="text"
							onFocus={() => setFirstnameFocused(true)}
							onBlur={() => setFirstnameFocused(false)}
						/>
					</FormInput>
				</Fields>
				<Fields id="marg">
					<FormIcon>
						<TwoPeople />
					</FormIcon>
					<FormInput>
						{!lastnameFocused ? <Label>Lastname</Label> : <></>}
						<Input
							type="text"
							onFocus={() => setLastnameFocused(true)}
							onBlur={() => setLastnameFocused(false)}
						/>
					</FormInput>
				</Fields>
				<Fields id="marg">
					<FormIcon>
						<Mail />
					</FormIcon>
					<FormInput>
						{!emailFocused ? <Label>Email</Label> : <></>}
						<Input
							type="text"
							onFocus={() => setEmailFocused(true)}
							onBlur={() => setEmailFocused(false)}
						/>
					</FormInput>
				</Fields>
				<Fields id="marg">
					<FormIcon>
						<At />
					</FormIcon>
					<FormInput>
						{!atFocused ? <Label>At</Label> : <></>}
						<Input
							type="text"
							onFocus={() => setAtFocused(true)}
							onBlur={() => setAtFocused(false)}
						/>
					</FormInput>
				</Fields>
				<Fields>
					<FormIcon>
						<Lock />
					</FormIcon>
					<FormInput>
						{!passwordFocused ? <Label>Password</Label> : <></>}
						<Input
							type="password"
							onFocus={() => setPasswordFocused(true)}
							onBlur={() => setPasswordFocused(false)}
						/>
					</FormInput>
				</Fields>
				<OrderController onClick={controllerOrder}>
					Already have an account?
				</OrderController>
				<Button type="submit" value="Sign up"></Button>
				<ContainerGoogle>
					<Text>Our register with</Text>
					<ContainerIcon>
						<IconGoogle />
					</ContainerIcon>
				</ContainerGoogle>
			</Form>
			<Logo src={Infinite} />
		</ContainerRegister>
	);
}
