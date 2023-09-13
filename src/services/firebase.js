import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDwwOLV8LUIkthMovghYFRbzZfjWFA5rmc",
	authDomain: "traveling-85ee2.firebaseapp.com",
	projectId: "traveling-85ee2",
	storageBucket: "traveling-85ee2.appspot.com",
	messagingSenderId: "529810448772",
	appId: "1:529810448772:web:559c0221a0b129cc9b3dd1",
	measurementId: "G-EF4ZDZ4R5R",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
