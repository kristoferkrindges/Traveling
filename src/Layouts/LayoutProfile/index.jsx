import React, { useState, useContext } from "react";

import {
	Container,
	ContainerOptions,
	ContextContainer,
	CardContent,
} from "./style";

import CardProfile from "../../components/CardProfile";
import Feeds from "../../components/Feeds";
import SelectOptions from "../../components/SelectOptions";

export default function LayoutProfile() {
	return (
		<>
			<CardProfile />
			<ContainerOptions>
				<ContextContainer>
					<CardContent>
						<SelectOptions type="Profile" />
					</CardContent>
				</ContextContainer>
			</ContainerOptions>
			<Container>
				<Feeds />
			</Container>
		</>
	);
}
