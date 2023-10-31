import React from "react";
import { DropMenu, Item, NavLink } from "./style";
export default function EllipsMenu({ type, optionsMenu }) {
	return (
		<DropMenu>
			<Item>
				{optionsMenu.map((value, key) => (
					<NavLink key={key} onClick={value.handler}>
						{value.label}
					</NavLink>
				))}
			</Item>
		</DropMenu>
	);
}
