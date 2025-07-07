import UserCard from "./userCard.js";
import axios from "axios";
import {useEffect,useState} from "react";
import "../styles/userCard.css"
function Connect(){
    const [userData,setUserData]= useState([]);
useEffect(() => {
  console.log("hi bro");

  const loadUserCards = async () => {
    console.log("Fetching users..."); // ✅ Check if function is even called

    try {
      const token = localStorage.getItem("token");
      console.log("Token found:", token); // ✅ Check if token exists

      const response = await axios.get("https://rizeos.onrender.com/api/user/getAllUsers", {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("Fetched users:", response.data);
      setUserData(response.data);
    } catch (err) {
      console.error("❌ Error fetching users:", err);
    }
  };

  loadUserCards();
}, []);


    return(
        <div className="connect-container">
            {
                userData.map((user)=>(<UserCard user={user}/>))
            }
        </div>
    )
}
export default Connect;