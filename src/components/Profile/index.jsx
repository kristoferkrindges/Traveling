import React, { useState, useContext } from "react";
import { Container } from "./style";
import CardProfile from "../CardProfile";
import OptionsProfile from "../OptionsProfile";
import Feeds from "../Feeds";
export default function Profile() {
	return (
		<>
			<CardProfile />
			<OptionsProfile />
			<Container>
				<Feeds />
			</Container>
		</>
	);
}
