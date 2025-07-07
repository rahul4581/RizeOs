import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/profile.css";
import {ethers} from "ethers";
import useWalletAddress from "../store/useWalletAddress";


function Profile() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    bio: "",
    linkedIn: "",
    collage:"",
    skills: "",
    walletAddress: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("https://rizeos.onrender.com/api/user/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setForm({
          name: res.data.name || "",
          email: res.data.email || "",
          bio: res.data.bio || "",
          linkedIn: res.data.linkedIn || "",
          collage: res.data.collage || "",
          skills: res.data.skills?.join(", ") || "",
          walletAddress: res.data.walletAddress || "",
        });
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    fetchUser();
  }, []);
  //used to set the wallet address gloabally using zustand
  const {  walletAddress,setWalletAddress } = useWalletAddress();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });


const connectWallet = async () => {
  if (!window.ethereum) {
    alert("Please install MetaMask");
    return;
  }

  try {
    // Show MetaMask popup
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    const address = accounts[0];
    setWalletAddress(address);
    setForm((prev) =>({
      ...prev,
      walletAddress:address,
    }))
    console.log("Address from MetaMask:", address);
    console.log("walletAddress:",walletAddress);

  } catch (err) {
    console.error("MetaMask connection failed:", err);
  }
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        "https://rizeos.onrender.com/api/user/me",
        {
          bio: form.bio,
          linkedIn: form.linkedIn,
          skills: form.skills.split(",").map((s) => s.trim()),
          walletAddress: form.walletAddress,
          collage: form.collage
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Profile updated successfully");
    } catch (err) {
      console.error("Update error:", err);
      alert("Failed to update profile");
    }
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <form onSubmit={handleSubmit} className="profile-form">
        <label>Name</label>
        <input value={form.name} disabled />

        <label>Email</label>
        <input value={form.email} disabled />

        <label>LinkedIn URL</label>
        <input
          name="linkedIn"
          value={form.linkedIn}
          onChange={handleChange}
        />
        <label>Collage</label>
        <input
          name="collage"
          value={form.collage}
          onChange={handleChange}
        />

        <label>Bio</label>
        <textarea
          name="bio"
          value={form.bio}
          onChange={handleChange}
          rows={3}
        />

        <label>Skills (comma-separated)</label>
        <input
          name="skills"
          value={form.skills}
          onChange={handleChange}
        />

        <label>Wallet Address</label>
        <div className="wallet-row">
          <input value={form.walletAddress} readOnly />
          <button type="button" onClick={connectWallet}>
            Connect Wallet
          </button>
        </div>

        <button type="submit" className="save-btn">
          Save Profile
        </button>
      </form>
    </div>
  );
}

export default Profile;
