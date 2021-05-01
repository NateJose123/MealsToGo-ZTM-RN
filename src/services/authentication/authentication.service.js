// const [isAuthenticated, setIsAuthenticated] = useState(false);
// useEffect(() => {
//   setTimeout(() => {
//     firebase
//       .auth()
//       .signInWithEmailAndPassword("test@gmail.com", "test123")
//       .then((user) => {
//         setIsAuthenticated(true);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }, 2000);
// }, []);

import * as firebase from "firebase";

const loginRequest = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password);
};
