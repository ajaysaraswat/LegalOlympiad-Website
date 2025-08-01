const express = require("express");
const cors = require("cors");
const fs = require("fs").promises;
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Data file path
const DATA_FILE = path.join(__dirname, "registrations.json");

// Ensure data file exists
async function ensureDataFile() {
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2));
  }
}

// Read registrations from file
async function readRegistrations() {
  try {
    const data = await fs.readFile(DATA_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading registrations:", error);
    return [];
  }
}

// Write registrations to file
async function writeRegistrations(registrations) {
  try {
    await fs.writeFile(DATA_FILE, JSON.stringify(registrations, null, 2));
  } catch (error) {
    console.error("Error writing registrations:", error);
    throw error;
  }
}

// Routes
app.get("/api/registrations", async (req, res) => {
  try {
    await ensureDataFile();
    const registrations = await readRegistrations();
    res.json(registrations);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch registrations" });
  }
});

app.post("/api/register", async (req, res) => {
  try {
    const registrationData = req.body;

    // Validate required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "dateOfBirth",
      "address",
      "city",
      "state",
      "pincode",
      "education",
      "institution",
      "graduationYear",
      "courseInterest",
      "motivation",
    ];

    const missingFields = requiredFields.filter(
      (field) => !registrationData[field]
    );

    if (missingFields.length > 0) {
      return res.status(400).json({
        error: "Missing required fields",
        missingFields,
      });
    }

    // Add timestamp and ID
    const newRegistration = {
      ...registrationData,
      id: Date.now().toString(),
      registrationDate: new Date().toISOString(),
    };

    // Read existing registrations
    await ensureDataFile();
    const registrations = await readRegistrations();

    // Check for duplicate email
    const existingEmail = registrations.find(
      (reg) => reg.email === registrationData.email
    );
    if (existingEmail) {
      return res.status(400).json({
        error: "Email already registered",
      });
    }

    // Add new registration
    registrations.push(newRegistration);

    // Write back to file
    await writeRegistrations(registrations);

    // Log registration
    console.log(
      `New registration: ${registrationData.firstName} ${registrationData.lastName} (${registrationData.email})`
    );

    res.status(201).json({
      message: "Registration successful",
      registrationId: newRegistration.id,
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Failed to register student" });
  }
});

app.get("/api/registrations/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const registrations = await readRegistrations();
    const registration = registrations.find((reg) => reg.id === id);

    if (!registration) {
      return res.status(404).json({ error: "Registration not found" });
    }

    res.json(registration);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch registration" });
  }
});

app.delete("/api/registrations/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const registrations = await readRegistrations();
    const filteredRegistrations = registrations.filter((reg) => reg.id !== id);

    if (filteredRegistrations.length === registrations.length) {
      return res.status(404).json({ error: "Registration not found" });
    }

    await writeRegistrations(filteredRegistrations);
    res.json({ message: "Registration deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete registration" });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Data file: ${DATA_FILE}`);
});

module.exports = app;
