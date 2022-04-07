const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");

const {
	apiKey,
	authDomain,
	projectId,
	storageBucket,
	messagingSenderId,
	appId,
} = process.env;

const firebaseConfig = {
	apiKey,
	authDomain,
	projectId,
	storageBucket,
	messagingSenderId,
	appId,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

module.exports = storage;
