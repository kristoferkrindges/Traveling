import { useState } from "react";
import { format } from "date-fns-tz";
export default function useAssistant() {
	const [filteredData, setFilteredData] = useState([]);
	const [wordEntered, setWordEntered] = useState("");

	const formatTimeDifference = (timestamp) => {
		const now = new Date().getTime();
		const difference = now - timestamp;

		if (difference < 60000) {
			const secondsAgo = Math.floor(difference / 1000);
			if (secondsAgo === 0) {
				return "0 seconds ago";
			}
			return `${secondsAgo} ${secondsAgo === 1 ? "second" : "seconds"} ago`;
		} else if (difference < 3600000) {
			const minutesAgo = Math.floor(difference / 60000);
			return `${minutesAgo} ${minutesAgo === 1 ? "minute" : "minutes"} ago`;
		} else if (difference < 86400000) {
			const hoursAgo = Math.floor(difference / 3600000);
			return `${hoursAgo} ${hoursAgo === 1 ? "hour" : "hours"} ago`;
		} else {
			const daysAgo = Math.floor(difference / 86400000);
			return `${daysAgo} ${daysAgo === 1 ? "day" : "days"} ago`;
		}
	};

	const formatTime = () => {
		const brasiliaTimeZone = "America/Sao_Paulo";
		const brasiliaCurrentDateTime = new Date();
		const formattedDateTime = format(
			brasiliaCurrentDateTime,
			"yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
			{ timeZone: brasiliaTimeZone }
		);
		return formattedDateTime;
	};

	const dateToSeconds = (dateString) => {
		const date = new Date(dateString);
		if (isNaN(date)) {
			return "Invalid date";
		}

		const timestamp = Math.floor(date.getTime() / 1000);
		return timestamp;
	};

	const DateTimeConverter = (inputDateTime) => {
		const inputDate = new Date(inputDateTime);

		if (!isNaN(inputDate.getTime())) {
			const convertedDate = inputDate.toISOString();
			return convertedDate;
		} else {
			return "2023-03-23T00:00:00.000+00:00";
		}
	};

	const handleFilter = (evt, data) => {
		const searchWord = evt.target.value;
		setWordEntered(searchWord);
		const newFilter = data.filter((value) => {
			return (value.firstname + " " + value.lastname)
				.toLowerCase()
				.includes(searchWord.toLowerCase());
		});

		if (searchWord === "") {
			setFilteredData([]);
		} else {
			setFilteredData(newFilter);
		}
		return filteredData;
	};

	const convertToDateISOString = (dateArray) => {
		const [year, month, day, hour, minute] = dateArray;
		const isoString = `${year}-${String(month).padStart(2, "0")}-${String(
			day
		).padStart(2, "0")}T${String(hour).padStart(2, "0")}:${String(
			minute
		).padStart(2, "0")}`;
		return isoString;
	};

	const formatEventDate = (dateString) => {
		const date = new Date(dateString);
		date.setUTCHours(date.getUTCHours() - 3);
		const formattedDate = date.toISOString().slice(0, 16);
		return formattedDate;
	};

	const formatDateString = (dateArray) => {
		const rawDateString = convertToDateISOString(dateArray);
		const date = new Date(rawDateString);

		const formattedDate = date.toLocaleDateString("en-US", {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		});

		const formattedTime = date.toLocaleTimeString("en-US", {
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		});

		return `${formattedDate} - ${formattedTime}`;
	};

	const formatDateViewEvent = (dateArray) => {
		const months = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];

		const [year, month, day, hours, minutes] = dateArray;

		const formattedDate = new Date(year, month - 1, day, hours, minutes);

		const result = `${formattedDate.getDate()} ${
			months[formattedDate.getMonth()]
		} ${formattedDate.getFullYear()}`;

		return result;
	};

	return {
		formatTimeDifference,
		formatTime,
		dateToSeconds,
		handleFilter,
		wordEntered,
		DateTimeConverter,
		convertToDateISOString,
		formatEventDate,
		formatDateString,
		formatDateViewEvent,
	};
}
