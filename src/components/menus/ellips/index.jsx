import React from "react";
import { DropMenu, Item, NavLink } from "./style";
export default function EllipsMenu({ type, close }) {
	return (
		<DropMenu>
			<Item>
				{close && <NavLink onClick={close}>Close</NavLink>}
				<NavLink>Other</NavLink>
			</Item>
		</DropMenu>
	);
}
