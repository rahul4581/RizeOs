import mongoose from "mongoose";
import dotenv from "dotenv";
import Job from "./models/Jobs.js";

dotenv.config();

const jobs =[
  // ✅ Web Development Jobs
  {
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore",
    description: "Build high-performance web apps using React.",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    salary: "₹15 LPA"
  },
  {
    title: "Backend Developer",
    company: "Amazon",
    location: "Hyderabad",
    description: "Work on scalable Node.js services.",
    skills: ["Node.js", "Express", "MongoDB"],
    salary: "₹18 LPA"
  },
  {
    title: "Full Stack Developer",
    company: "Microsoft",
    location: "Remote",
    description: "Contribute to end-to-end web development.",
    skills: ["React", "Node.js", "PostgreSQL"],
    salary: "₹20 LPA"
  },
  {
    title: "Frontend Intern",
    company: "Swiggy",
    location: "Bangalore",
    description: "Assist frontend team in delivering UI.",
    skills: ["HTML", "CSS", "JavaScript"],
    salary: "₹20K/month"
  },
  {
    title: "Web Developer",
    company: "Infosys",
    location: "Chennai",
    description: "Build company internal portals.",
    skills: ["Angular", "TypeScript", "Bootstrap"],
    salary: "₹10 LPA"
  },
  {
    title: "React Native Developer",
    company: "PhonePe",
    location: "Remote",
    description: "Work on mobile web hybrid apps.",
    skills: ["React Native", "Redux"],
    salary: "₹14 LPA"
  },
  {
    title: "WordPress Developer",
    company: "Zoho",
    location: "Coimbatore",
    description: "Customize and develop WordPress sites.",
    skills: ["PHP", "WordPress", "MySQL"],
    salary: "₹8 LPA"
  },
  {
    title: "MEAN Stack Developer",
    company: "Tech Mahindra",
    location: "Noida",
    description: "Develop enterprise web apps.",
    skills: ["MongoDB", "Express", "Angular", "Node.js"],
    salary: "₹12 LPA"
  },
  {
    title: "Web Designer",
    company: "Adobe",
    location: "Pune",
    description: "Design responsive web UI layouts.",
    skills: ["Figma", "HTML", "CSS"],
    salary: "₹9 LPA"
  },
  {
    title: "UI Developer",
    company: "Paytm",
    location: "Gurgaon",
    description: "Implement beautiful UIs.",
    skills: ["React", "SASS", "JS"],
    salary: "₹13 LPA"
  },

  // ✅ AI / Machine Learning Jobs
  {
    title: "ML Engineer",
    company: "NVIDIA",
    location: "Bangalore",
    description: "Develop deep learning models.",
    skills: ["Python", "TensorFlow", "NLP"],
    salary: "₹22 LPA"
  },
  {
    title: "Data Scientist",
    company: "Flipkart",
    location: "Bangalore",
    description: "Analyze user behavior data.",
    skills: ["Python", "Pandas", "Machine Learning"],
    salary: "₹20 LPA"
  },
  {
    title: "AI Researcher",
    company: "OpenAI",
    location: "Remote",
    description: "Research and implement new AI algorithms.",
    skills: ["Deep Learning", "LLMs", "PyTorch"],
    salary: "₹30 LPA"
  },
  {
    title: "Computer Vision Intern",
    company: "TCS",
    location: "Pune",
    description: "Assist in object detection projects.",
    skills: ["OpenCV", "YOLO", "Python"],
    salary: "₹25K/month"
  },
  {
    title: "NLP Engineer",
    company: "CureAI",
    location: "Mumbai",
    description: "Build NLP-based chatbots.",
    skills: ["SpaCy", "Transformers", "Python"],
    salary: "₹18 LPA"
  },
  {
    title: "AI Product Analyst",
    company: "Walmart Labs",
    location: "Chennai",
    description: "Analyze AI product metrics.",
    skills: ["SQL", "Tableau", "ML"],
    salary: "₹12 LPA"
  },
  {
    title: "ML Ops Engineer",
    company: "Freshworks",
    location: "Chennai",
    description: "Deploy ML pipelines.",
    skills: ["Docker", "Kubernetes", "MLFlow"],
    salary: "₹17 LPA"
  },
  {
    title: "AI Intern",
    company: "IIT Madras",
    location: "Remote",
    description: "Assist on AI research projects.",
    skills: ["Python", "Jupyter", "Math"],
    salary: "₹15K/month"
  },
  {
    title: "Data Analyst",
    company: "Zoho",
    location: "Salem",
    description: "Clean and analyze customer data.",
    skills: ["Excel", "SQL", "Python"],
    salary: "₹10 LPA"
  },
  {
    title: "Robotics Engineer",
    company: "ABB",
    location: "Hyderabad",
    description: "Implement AI in robotics.",
    skills: ["ROS", "C++", "Python"],
    salary: "₹16 LPA"
  },

  // ✅ Business Management Jobs
  {
    title: "Product Manager",
    company: "Microsoft",
    location: "Hyderabad",
    description: "Manage SaaS product lifecycle.",
    skills: ["Agile", "Product Thinking", "Communication"],
    salary: "₹24 LPA"
  },
  {
    title: "HR Manager",
    company: "Tata Motors",
    location: "Mumbai",
    description: "Manage hiring and internal HR policies.",
    skills: ["Communication", "People Management", "Excel"],
    salary: "₹12 LPA"
  },
  {
    title: "Marketing Executive",
    company: "Unacademy",
    location: "Bangalore",
    description: "Run marketing campaigns for courses.",
    skills: ["Marketing", "Social Media", "Analytics"],
    salary: "₹10 LPA"
  },
  {
    title: "Operations Manager",
    company: "BigBasket",
    location: "Delhi",
    description: "Oversee delivery and logistics.",
    skills: ["Logistics", "Planning", "People Skills"],
    salary: "₹14 LPA"
  },
  {
    title: "Business Analyst",
    company: "Capgemini",
    location: "Chennai",
    description: "Analyze business workflows.",
    skills: ["Excel", "SQL", "Business Models"],
    salary: "₹13 LPA"
  },
  {
    title: "Management Trainee",
    company: "Reliance",
    location: "Mumbai",
    description: "Learn and assist across business units.",
    skills: ["Leadership", "Excel", "Strategy"],
    salary: "₹9 LPA"
  },
  {
    title: "Finance Executive",
    company: "ICICI",
    location: "Kolkata",
    description: "Manage reports and account books.",
    skills: ["Tally", "Accounts", "Finance"],
    salary: "₹11 LPA"
  },
  {
    title: "Customer Support Lead",
    company: "Byju's",
    location: "Bangalore",
    description: "Manage a team of 10+ support reps.",
    skills: ["CRM", "Communication", "Leadership"],
    salary: "₹8.5 LPA"
  },
  {
    title: "Sales Manager",
    company: "OYO",
    location: "Delhi",
    description: "Drive hotel partnership sales.",
    skills: ["Sales", "Negotiation", "Excel"],
    salary: "₹14 LPA"
  },
  {
    title: "Business Development Associate",
    company: "Vedantu",
    location: "Remote",
    description: "Generate leads and convert sales.",
    skills: ["Sales", "Communication", "CRM"],
    salary: "₹6.5 LPA"
  }
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await Job.insertMany(jobs);
    console.log("✅ 10 AI/ML Jobs inserted successfully");
    process.exit();
  })
  .catch((err) => console.error("❌ Mongo Error:", err));
