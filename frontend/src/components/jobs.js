import {useEffect,useState} from "react";
import axios from "axios"
import "../styles/jobs.css"
import { RiAddLargeFill } from "react-icons/ri";
import {useNavigate} from "react-router-dom";

function Jobs(){
    const [jobs,setJobs]=useState([]);
    const navigate=useNavigate();
    
    useEffect(() =>{
        const getJobs=async ()=>{
            const response=await axios.get("http://localhost:5000/api/job");
            setJobs(response.data);
        };
        getJobs();
    },[])
  return (
    <div className="jobs-container">
      <div className="addJob"><RiAddLargeFill onClick={() => navigate("/postJob")}/></div>
      <h1>Available Jobs</h1>
      <div className="jobs-grid">
        {jobs.map((job) => (
          <div className="job-card" key={job._id}>
            <h2>{job.title}</h2>
            <h4>{job.company}</h4>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <p><strong>Skills:</strong> {job.skills.join(", ")}</p>
            <p className="job-desc">{job.description}</p>
            <button className="apply-btn">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Jobs