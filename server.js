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
const postRouter = require("./routes/postRoute");
const categoryRouter = require("./routes/categoryRoute");
const contactRouter = require("./routes/contactRoute");
const adminRouter = require("./routes/adminRoute");

app.use("/service", serviceRouter);
app.use("/admin", adminRouter);
app.use("/post", postRouter);
app.use("/category", categoryRouter);
app.use("/contact", contactRouter);

const connectToDb = async () => {
  const res = await mongoose.connect(process.env.MONGODB_URI);
  if (res) console.log("db connected");
};
connectToDb();

app.listen(PORT, console.log(`running on ${PORT}`));
