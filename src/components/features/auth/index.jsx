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
	ContainerGoogle,
	ContainerIcon,
	Text,
} from "./style";
import TitleH1 from "../../titles/titleH1/titleH1";
import {
	At,
	IconGoogle,
	Lock,
	Mail,
	TwoPeople,
	UserCircle,
} from "../../icons/iconsI05.styled";

export default function Auth() {
	const { signUp, signIn } = useContext(UserContext);

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

	function controllerOrder() {
		if (controllerAuth) {
			setControllerAuth(false);
		} else {
			setControllerAuth(true);
		}
	}

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
		signUp(user);
	}

	function handlerButtonSignIn(evt) {
		evt.preventDefault();
		const user = {
			email: emailChange,
			password: passwordChange,
		};
		signIn(user);
	}
	return (
		<ContainerAuth gridColumns={controllerAuth ? `1.5fr 1fr` : `1fr 1.5fr`}>
			{controllerAuth && <Logo src={Infinite} />}
			<Form action="" justinfySelf={controllerAuth ? null : `center`}>
				<TitleH1
					fontSize={`2rem`}
					marginBottom={`2rem`}
					text={controllerAuth ? "Sign In" : "Sign Up"}
				/>
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
				{/* <ContainerGoogle>
					<Text>{controllerAuth ? "Our login with" : "Our register with"}</Text>
					<ContainerIcon>
						<IconGoogle />
					</ContainerIcon>
				</ContainerGoogle> */}
			</Form>
			{!controllerAuth && <Logo src={Infinite} />}
		</ContainerAuth>
	);
}
