import Register from "./components/register.js"
import Login from "./components/login.js"
import {BrowserRouter,Router,Route,createRoutesFromElements,createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from "./components/home.js";
import Profile from "./components/profile.js";
import Jobs from "./components/jobs.js";
import PostJob from "./components/postJob.js";
import Connect from "./components/connect.js";
function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}>
          <Route index element={<Jobs/>}/>
          <Route path="connect" element={<Connect/>}/>
        </Route>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/postJob" element={<PostJob/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
