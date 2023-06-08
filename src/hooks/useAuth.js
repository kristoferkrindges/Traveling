import { useState, useEffect } from "react";
export default function useAuth() {
	const [authenticated, setAuthenticated] = useState(true);
	return { authenticated };
}
