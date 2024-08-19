import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config"; // Ensure you have initialized Firestore

const getUserById = async (id) => {
  try {
    const userDocRef = doc(db, 'users', id);

    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
console.log(userDoc.data());
      return userDoc.data(); // Returns the user data
    } else {
      // No such document
      console.log("No user found with the given ID");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};

export default getUserById