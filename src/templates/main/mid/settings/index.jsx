import React, { useState } from "react";
import { NotificationContainer } from "../notification/style";
import SettingsMenu from "../../../../components/features/settings/settingsMenu";
import AccountSettings from "../../../../components/features/settings/accountSettings";
import PrivacySettings from "../../../../components/features/settings/privacySettings";
import MoreSettings from "../../../../components/features/settings/moreSettings";

export default function SettingsMidTemplate() {
	const [search, setSearch] = useState("Account");
	return (
		<NotificationContainer>
			<SettingsMenu search={search} setSearch={setSearch} />
			{search === "Account" ? (
				<AccountSettings />
			) : search === "Privacy" ? (
				<PrivacySettings />
			) : (
				<MoreSettings />
			)}
		</NotificationContainer>
	);
}
