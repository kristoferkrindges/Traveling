import { format } from "date-fns-tz";
export default function useAssistant() {
	function formatTimeDifference(timestamp) {
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
	}

	function formatTime() {
		const brasiliaTimeZone = "America/Sao_Paulo";
		const brasiliaCurrentDateTime = new Date();
		const formattedDateTime = format(
			brasiliaCurrentDateTime,
			"yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
			{ timeZone: brasiliaTimeZone }
		);
		return formattedDateTime;
	}

	function dateToSeconds(dateString) {
		const date = new Date(dateString);
		if (isNaN(date)) {
			return "Invalid date";
		}

		const timestamp = Math.floor(date.getTime() / 1000);
		return timestamp;
	}

	return {
		formatTimeDifference,
		formatTime,
		dateToSeconds,
	};
}