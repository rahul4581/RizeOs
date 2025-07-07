import Jobs from "../models/Jobs.js";

export const getJobs =async (req,res) =>{
    try{
        const jobs=await Jobs.find().sort({createdAt:-1});
        res.status(200).json(jobs);
    }catch{
        console.log("error at getting jobs",error);
        res.status(500).json({msg:"error at getting jobs"});
    }

}
export const postJob = async (req, res) => {
  try {
    const newJob = new Jobs(req.body);
    await newJob.save();
    res.status(201).json({ message: "Job created successfully" });
  } catch (error) {
    console.error("Error posting job:", error);
    res.status(500).json({ message: "Job creation failed" });
  }
};
