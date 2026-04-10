import "dotenv/config";
import app from "./app.js";
import { connectDB } from "./config/db.js";
import { loadSeed } from "./seed/amante.seed.js";

const PORT = process.env.PORT || 3001;

async function startServer() {
  try {
    await connectDB();
    await loadSeed();

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Application startup failed:", error.message);
    process.exit(1);
  }
}

startServer();
