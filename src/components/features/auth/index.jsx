import React, { useState, useContext } from "react";
import Infinite from "../../../assets/images/infinite-removebg-preview.png";
import { UserContext } from "../../../contexts/userContext";
import {
	ContainerAuth,
	Fields,
	Form,
	FormIcon,
	FormInput,
	Input,
	Label,
	OrderController,
	Button,
	Logo,
} from "./style";
import { H1Title } from "../../titles/h1Title.styled";
import {
	At,
	Lock,
	Mail,
	TwoPeople,
	UserCircle,
} from "../../icons/iO5Icons.styled";
import { InputDate } from "../user/editProfileModal/style";
import { AssistantContext } from "../../../contexts/assistantContext";

export default function Auth() {
	const { signUp, signIn } = useContext(UserContext);

	const { formatEventDate } = useContext(AssistantContext);

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

	const [controllerAuth, setControllerAuth] = useState(true);

	const [birthDate, setBirthDate] = useState("");

	const getCurrentDateTimeString = () => {
		const currentDate = new Date();

		const year = currentDate.getFullYear();
		const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Adiciona zero à esquerda, se necessário
		const day = String(currentDate.getDate()).padStart(2, "0");
		const hours = String(currentDate.getHours()).padStart(2, "0");
		const minutes = String(currentDate.getMinutes()).padStart(2, "0");

		const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;

		return formattedDateTime;
	};

	const controllerOrder = () => {
		if (controllerAuth) {
			setControllerAuth(false);
		} else {
			setControllerAuth(true);
		}
	};

	const handlerButtonSignUp = (evt) => {
		evt.preventDefault();
		getCurrentDateTimeString();
		const user = {
			firstname: firstnameChange,
			lastname: lastnameChange,
			at: atChange,
			email: emailChange,
			photo: "",
			banner: "",
			birthdate: formatEventDate(getCurrentDateTimeString()),
			password: passwordChange,
		};
		signUp(user);
	};
	const handlerButtonSignIn = (evt) => {
		evt.preventDefault();
		const user = {
			email: emailChange,
			password: passwordChange,
		};
		signIn(user);
	};
	return (
		<ContainerAuth gridColumns={controllerAuth ? `1.5fr 1fr` : `1fr 1.5fr`}>
			{controllerAuth && <Logo src={Infinite} />}
			<Form action="" justinfySelf={controllerAuth ? null : `center`}>
				<H1Title fontSize={`2rem`} marginBottom={`2rem`}>
					{controllerAuth ? "Sign In" : "Sign Up"}
				</H1Title>
				{!controllerAuth && (
					<>
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
					</>
				)}
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
					{/* <InputDate
						type="datetime-local"
						value={birthDate}
						onChange={(e) => {
							const formattedDate = e.target.value
								.split("T")
								.join(" ")
								.substring(0, 16);
							setBirthDate(formattedDate);
						}}
					/> */}
				</Fields>
				<OrderController onClick={controllerOrder}>
					{controllerAuth
						? "Don't have an account?"
						: "Already have an account?"}
				</OrderController>
				<Button
					type="submit"
					value="Sign up"
					onClick={
						controllerAuth
							? (evt) => {
									handlerButtonSignIn(evt);
							  }
							: (evt) => {
									handlerButtonSignUp(evt);
							  }
					}
				></Button>
			</Form>
			{!controllerAuth && <Logo src={Infinite} />}
		</ContainerAuth>
	);
}
