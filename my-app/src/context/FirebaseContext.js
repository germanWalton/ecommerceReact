// import { createContext, useContext, useState } from "react";
// import { getFirestore } from "../firebase";

// const FirebaseContext = createContext();

// export const FirebaseContextUse = () => {
//   return useContext(FirebaseContext);
// };

// export default function FirebaseContextProvider({ children }) {
//   const [db, setDb] = useState([]);


//   const getProducts = async () => {
//     const { docs } = await getFirestore().collection("serverData").get();
//    const newArray = docs.map((item) => ({ id: item.id, ...item.data() }));
//     setDb(newArray)
//   };
//   getProducts()
//   return (
//     <FirebaseContext.Provider value={{db}}>{children}</FirebaseContext.Provider>
//   );
// }
