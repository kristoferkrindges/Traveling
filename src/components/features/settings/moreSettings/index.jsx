import React, { useState } from "react";
import { NotificationMenuContainer } from "../../../menus/notiticationsSearch/style";
import { SettingsContext, TextItem, Order } from "../accountSettings/style";
import { CircleContainer } from "../../../containers/circle.styled";
import { CreateIcon, DeletAccountIcon } from "../../../icons/iO5Icons.styled";
import DeletModal from "../modalDelet";

export default function MoreSettings() {
	const [modalDelet, setModalDelet] = useState(false);
	return (
		<SettingsContext>
			{modalDelet && <DeletModal setModalDelet={setModalDelet} />}
			<NotificationMenuContainer style={{ width: "90%" }}>
				<Order>
					<TextItem>Alter password</TextItem>
					<CircleContainer>
						<CreateIcon />
					</CircleContainer>
				</Order>
			</NotificationMenuContainer>
			<NotificationMenuContainer style={{ width: "90%" }}>
				<Order>
					<TextItem>Delet account</TextItem>
					<CircleContainer>
						<DeletAccountIcon onClick={() => setModalDelet(true)} />
					</CircleContainer>
				</Order>
			</NotificationMenuContainer>
		</SettingsContext>
	);
}
