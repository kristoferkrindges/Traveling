import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../services/firebase";

export default function useFirebase() {
	const [progress, setProgress] = useState(0);

	async function uploadImage(file) {
		try {
			const storageRef = ref(storage, `images/${file.name}`);
			const uploadTask = uploadBytesResumable(storageRef, file);

			return new Promise((resolve, reject) => {
				uploadTask.on(
					"state_changed",
					(snapshot) => {
						const progress =
							(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
						setProgress(progress);
					},
					(error) => {
						console.log(error);
						reject(error);
					},
					async () => {
						try {
							const url = await getDownloadURL(uploadTask.snapshot.ref);
							resolve(url);
						} catch (error) {
							console.log(error);
							reject(error);
						}
					}
				);
			});
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	return {
		uploadImage,
	};
}
