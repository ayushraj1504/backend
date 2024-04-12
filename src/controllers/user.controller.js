import { asyncHandler } from "../utils/asyncHandler.js";


const registerUser = asyncHandler( async (req, res) => {
  // get user details from frontend
  // validation- not empty
  // check fi user already exists: username, email, password
  // check for images, check for avatar
  // upload them to cloudinary, avatar
  // create user object - create entry in db
  // remove password and refresh token field from response
  // check for user creation
  // return response


  const {fullName, email, username, password} = req.body
  console.log("email: ", email)
  console.log("fullName: ", fullName)


})

export {registerUser}