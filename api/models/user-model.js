import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://yandex.uz/images/search?pos=5&from=tabbar&img_url=https%3A%2F%2Fsh-tarutinskaya-r04.gosweb.gosuslugi.ru%2Fnetcat_files%2F108%2F690%2Fspeaker_azzurro_1.png&text=avatar+profile+img&rpt=simage&lr=10335",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
