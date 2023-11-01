import React from "react";
import { DropMenu, Item, NavLink } from "./style";
export default function EllipsMenu({ type, optionsMenu }) {
	return (
		<DropMenu top={type === "Avatar" ? `calc(100% + 20px)` : `0%`}>
			<Item>
				{optionsMenu.map((value, key) => (
					<NavLink key={key} onClick={value.handler} to={value.route}>
						{value.icon} {value.label}
					</NavLink>
				))}
			</Item>
		</DropMenu>
	);
}
