import { useState ,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/postJob.css";
import {ethers} from "ethers";


function PostJob() {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    skills: "",
    description: "",
  });

  const navigate = useNavigate();
  
  //admin wallet
  const ADMIN_WALLET="0x66b0F1C29c8c299352D5831cfd258ff8D9154992";

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };
  const [currentWallet,setCurrentWallet]  = useState(null);



  useEffect(() => {
  const fetchWalletFromProfile = async () => {
    try {
        const token=localStorage.getItem("token");
        const res=await axios.get("https://rizeos.onrender.com/api/user/me",{
            headers:{Authorization:`Bearer ${token}`}
        })
        if (res.data.walletAddress) {
          setCurrentWallet(res.data.walletAddress);
          console.log("Wallet address from profile:", res.data.walletAddress);
        }
      
    } catch (err) {
      console.error("Failed to fetch wallet from profile", err);
    }
  };

  fetchWalletFromProfile();
  }, []);




  const sendPayment = async ()=>{
    try{
      const provider=new ethers.BrowserProvider(window.ethereum);
      const signer=await provider.getSigner();

      const tx=await signer.sendTransaction({
        to :ADMIN_WALLET,
        value: ethers.parseEther("0.000")
      })
      console.log("tx hash:",tx.hash);
      await tx.wait();
      console.log("Payment Successful");
      alert("payment successful");
      return true;
    }
    catch(err){
      console.error("❌ Payment failed:", err);
      alert("Payment failed. Job not posted.");
      return false;
    }
  }
 
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!currentWallet){
      navigate("/profile");
      alert("Please connect wallet first");
    }
    else{
    const paid=await sendPayment();
    if(!paid) return;
    try {

      const formattedJob = {
        ...job,
        skills: job.skills.split(",").map((s) => s.trim()), // convert to array
      };
      await axios.post("https://rizeos.onrender.com/api/job/postJob", formattedJob);
      alert("Job posted successfully!");
      navigate("/home");
    } catch (err) {
      console.error("Job post failed:", err);
      alert("Error posting job.");
    }
  }
  };

  return (
    <div className="add-job-container">
      <h2>Post a New Job</h2>
      <form className="job-form" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Job Title" onChange={handleChange} required />
        <input type="text" name="company" placeholder="Company" onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
        <input type="text" name="salary" placeholder="Salary" onChange={handleChange} required />
        <input type="text" name="skills" placeholder="Skills (comma separated)" onChange={handleChange} required />
        <textarea name="description" placeholder="Job Description" onChange={handleChange} required />
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}

export default PostJob;
