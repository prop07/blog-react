import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const blogs = [];
const JWT_SECRET = "secret123";

// Log every request
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  if (req.method !== "GET") {
    console.log("Body:", req.body);
  }
  next();
});

// Debug route
app.get("/", (req, res) => {
  console.log("===== DEBUG =====");
  console.log("Users:", users);
  console.log("Blogs:", blogs);
  console.log("=================");
  res.send({
    message: "Debug info",
    users,
    blogs,
  });
});

// Register
app.post("/api/user/register", async (req, res) => {
  const { username, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  users.push({ username, email, password: hashed });
  res.send({ message: "User registered" });
});

// Login
app.post("/api/user/login", async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).send({ error: "Invalid credentials" });
  }
  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1d" });
  res.send({ token });
});

// Create blog
app.post("/api/blog", (req, res) => {
  const blog = { id: Date.now().toString(), ...req.body };
  blogs.push(blog);
  res.send(blog);
});

// Read all blogs
app.get("/api/blog", (req, res) => {
  res.send(blogs);
});

// Read single blog
app.get("/api/blog/:id", (req, res) => {
  const blog = blogs.find(b => b.id === req.params.id);
  res.send(blog || {});
});

// Update blog
app.put("/api/blog/:id", (req, res) => {
  const index = blogs.findIndex(b => b.id === req.params.id);
  if (index === -1) return res.status(404).send({ error: "Not found" });
  blogs[index] = { ...blogs[index], ...req.body };
  res.send(blogs[index]);
});

// Delete blog
app.delete("/api/blog/:id", (req, res) => {
  const index = blogs.findIndex(b => b.id === req.params.id);
  if (index === -1) return res.status(404).send({ error: "Not found" });
  blogs.splice(index, 1);
  res.send({ message: "Deleted" });
});

app.listen(5000, () => {
  console.log("====================================");
  console.log("🚀 Server running at: http://localhost:5000");
  console.log("====================================");
});
