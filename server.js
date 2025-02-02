const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const mongoose = require("mongoose");
const PORT = 8080;
dotenv.config();

const serviceRouter = require("./routes/serviceRoute");
const adminRouter = require("./routes/adminRoute");
const postRouter = require("./routes/postRoute");

app.use("/service", serviceRouter);
app.use("/admin", adminRouter);
app.use("/post", postRouter);

const connectToDb = async () => {
  const res = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,
  });
  if (res) console.log("db connected");
};
connectToDb();

app.listen(PORT, console.log(`running on ${PORT}`));
