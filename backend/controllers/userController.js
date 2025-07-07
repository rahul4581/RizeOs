import User from "../models/User.js";

// @desc Get logged in user
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

// @desc Update profile fields
export const updateProfile = async (req, res) => {
  const { bio, linkedIn, skills, walletAddress ,collage} = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      {
        bio,
        linkedIn,
        skills, // should be an array
        walletAddress,
        collage
      },
      { new: true }
    ).select("-password");

    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Profile update failed" });
  }
};
 
export const getAllUsers= async(req,res) =>{
  try{
    const users=await User.find().select("-password");
    res.json(users);
  }catch(error){
    console.log("error at getting users",error);
  }
}
