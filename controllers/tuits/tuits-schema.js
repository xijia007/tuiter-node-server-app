import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    tuit: String,
    likes: Number,
    liked: Boolean,
    dislikes: Number,
    disliked: Boolean,
    handle: String,
    time: String,
    username: String,
    topic: String,
    image: String,
  },
  { collection: "tuits" }
);
export default schema;
