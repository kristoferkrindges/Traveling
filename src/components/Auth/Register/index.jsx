import React, { useState, useContext } from "react";
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
import { Context } from "../../../context/userContext";

export default function Register({ controllerOrder }) {
	const { register } = useContext(Context);

	const [emailFocused, setEmailFocused] = useState(false);
	const [passwordFocused, setPasswordFocused] = useState(false);
	const [firstnameFocused, setFirstnameFocused] = useState(false);
	const [lastnameFocused, setLastnameFocused] = useState(false);
	const [atFocused, setAtFocused] = useState(false);

	const [firstnameChange, setFirstnameChange] = useState();
	const [lastnameChange, setLastnameChange] = useState();
	const [atChange, setAtChange] = useState();
	const [emailChange, setEmailChange] = useState();
	const [passwordChange, setPasswordChange] = useState();

	function handlerButtonSignUp(evt) {
		evt.preventDefault();
		const user = {
			firstname: firstnameChange,
			lastname: lastnameChange,
			at: atChange,
			email: emailChange,
			photo: "",
			banner: "",
			birthdate: "2023-03-21T00:00:00.000+00:00",
			password: passwordChange,
		};
		register(user);
	}

	return (
		<ContainerRegister>
			<Form action="">
				<Title>Register</Title>
				<Fields id="marg">
					<FormIcon>
						<UserCircle />
					</FormIcon>
					<FormInput>
						{!firstnameFocused && !firstnameChange ? (
							<Label>Firstname</Label>
						) : (
							<></>
						)}
						<Input
							type="text"
							onFocus={() => setFirstnameFocused(true)}
							onBlur={() => setFirstnameFocused(false)}
							onChange={(e) => {
								setFirstnameChange(e.target.value);
							}}
						/>
					</FormInput>
				</Fields>
				<Fields id="marg">
					<FormIcon>
						<TwoPeople />
					</FormIcon>
					<FormInput>
						{!lastnameFocused && !lastnameChange ? (
							<Label>Lastname</Label>
						) : (
							<></>
						)}
						<Input
							type="text"
							onFocus={() => setLastnameFocused(true)}
							onBlur={() => setLastnameFocused(false)}
							onChange={(e) => {
								setLastnameChange(e.target.value);
							}}
						/>
					</FormInput>
				</Fields>
				<Fields id="marg">
					<FormIcon>
						<Mail />
					</FormIcon>
					<FormInput>
						{!emailFocused && !emailChange ? <Label>Email</Label> : null}
						<Input
							type="text"
							onFocus={() => setEmailFocused(true)}
							onBlur={() => setEmailFocused(false)}
							onChange={(e) => {
								setEmailChange(e.target.value);
							}}
						/>
					</FormInput>
				</Fields>
				<Fields id="marg">
					<FormIcon>
						<At />
					</FormIcon>
					<FormInput>
						{!atFocused && !atChange ? <Label>At</Label> : <></>}
						<Input
							type="text"
							onFocus={() => setAtFocused(true)}
							onBlur={() => setAtFocused(false)}
							onChange={(e) => {
								setAtChange(e.target.value);
							}}
						/>
					</FormInput>
				</Fields>
				<Fields>
					<FormIcon>
						<Lock />
					</FormIcon>
					<FormInput>
						{!passwordFocused && !passwordChange ? (
							<Label>Password</Label>
						) : (
							<></>
						)}
						<Input
							type="password"
							onFocus={() => setPasswordFocused(true)}
							onBlur={() => setPasswordFocused(false)}
							onChange={(e) => {
								setPasswordChange(e.target.value);
							}}
						/>
					</FormInput>
				</Fields>
				<OrderController onClick={controllerOrder}>
					Already have an account?
				</OrderController>
				<Button
					type="submit"
					value="Sign up"
					onClick={(evt) => {
						handlerButtonSignUp(evt);
					}}
				></Button>
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
