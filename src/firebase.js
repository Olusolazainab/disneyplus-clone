import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyA3dj7d0GITbyT8BZYH4UvSXlARIqcXvXE',
	authDomain: 'disneyplus-clone-5818d.firebaseapp.com',
	projectId: 'disneyplus-clone-5818d',
	storageBucket: 'disneyplus-clone-5818d.appspot.com',
	messagingSenderId: '168019801536',
	appId: '1:168019801536:web:68e04cffd29851113cc425',
	measurementId: 'G-E9M2RVG4GB',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;
