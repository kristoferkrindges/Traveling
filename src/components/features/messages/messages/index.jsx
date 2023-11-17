import React, { useContext, useEffect, useState } from "react";
import { MessagesContainer } from "./style";
import HeadingContainer from "../../../containers/heading";
import SearchBar from "../../../inputs/searchBar";
import { UserContext } from "../../../../contexts/userContext";
import SelectOptions from "../selectOptions";
import UserMessages from "../../user/userMessage";
import { NotContentYet } from "../../../../templates/main/mid/profile/style";
import Loader from "../../../loader";

export default function Messages() {
	const { userInfo, getFollowings } = useContext(UserContext);

	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);

	useEffect(() => {
		if (data.length === 0) {
			searchFollowings();
		}
	}, []);

	useEffect(() => {
		setFilteredData(data);
	}, [data]);

	const searchFollowings = async () => {
		const data = await getFollowings(userInfo.id);
		setData(data);
	};
	return (
		<MessagesContainer>
			<HeadingContainer type={"Messages"} text={"Messages"} />
			<SearchBar data={data} setFilteredData={setFilteredData} />
			<SelectOptions />
			{data ? (
				filteredData.length > 0 ? (
					filteredData.map((value, key) => (
						<UserMessages
							key={key}
							photo={value.photo}
							name={value.firstname + " " + value.lastname}
							message={"@" + value.at}
							online={false}
							type={false}
							at={value.at}
						/>
					))
				) : (
					<NotContentYet>This user has no Messages yet</NotContentYet>
				)
			) : (
				<Loader />
			)}
		</MessagesContainer>
	);
}
