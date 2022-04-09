import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB9w_EXg05NBTob3zbAiKjSdca0pun-xyE",
  authDomain: "react-ema-jhon-simple-63a29.firebaseapp.com",
  projectId: "react-ema-jhon-simple-63a29",
  storageBucket: "react-ema-jhon-simple-63a29.appspot.com",
  messagingSenderId: "689774270383",
  appId: "1:689774270383:web:7da86f5984dbcf30bd015a"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default app;