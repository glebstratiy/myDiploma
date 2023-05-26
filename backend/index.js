const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const Doctor = require("./schemas/doctor.schema");
const Service = require("./schemas/service.schema");
const User = require("./schemas/user.schema");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Подключение к базе данных
mongoose
  .connect(
    "mongodb+srv://nevermore7331:5pkx8fts@cluster0.dpdoy1a.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("З'єднано з базою даних");
  })
  .catch((error) => {
    console.error("Помилка при підключенні до БД", error);
  });

// Настройка маршрутов
//Доктора
app.get("/", async (req, res) => {
  Doctor.find()
    .then((doctors) => {
      res.json(doctors);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to retrieve doctors" });
    });
});

//Услуги
app.get("/services", async (req, res) => {
  Service.find()
    .then((services) => {
      res.json(services);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to retrieve services" });
    });
});

//Пользователи
app.get("/users", async (req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to retrieve users" });
    });
});

app.post("/users", async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const candidate = await User.findOne({ username });
    if (candidate) {
      return res
        .status(400)
        .send("Пользователь с таким именем уже существует!");
    }
    const hashPassword = bcrypt.hashSync(password, 6);
    const fetchuser = new User({ username, password: hashPassword, email });
    await fetchuser.save();
    const token = jwt.sign({ userId: fetchuser._id }, "secret-key", {
      expiresIn: "24h",
    });

    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    console.log(req.body);
    res.status(500).send("Server Error");
  }
});

//Пользователь
app.get("/user", async (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Токен відсутній" });
  }

  try {
    const decoded = jwt.verify(token, "secret-key");

    const userId = decoded.userId;

    const user = await User.findById(userId);

    console.log(user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.put("/user/appointments/:appointmentId", async (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Токен відсутній" });
  }

  try {
    const decoded = jwt.verify(token, "secret-key");

    const userId = decoded.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find the appointment by ID in the user's appointments array
    const appointmentId = req.params.appointmentId;
    const appointmentIndex = user.appointments.findIndex(
      (appointment) => appointment._id === appointmentId
    );

    if (appointmentIndex === -1) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    // Remove the appointment from the user's appointments array
    user.appointments.splice(appointmentIndex, 1);

    // Save the updated user object to the database
    await user.save();

    res.json({ message: "Appointment removed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});


//Логин
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    console.log(user);

    if (!user) {
      return res.status(404).json({ message: "Користувача не знайдено" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Невірний пароль" });
    }

    const token = jwt.sign({ userId: user._id }, "secret-key", {
      expiresIn: "24h",
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Помилка сервера" });
  }
});

//Запис
app.post("/appointment", async (req, res) => {
  const { token } = req.body;

  const decoded = jwt.verify(token, "secret-key");
  const userId = decoded.userId;
  try {
    const user = await User.findById(userId);
    user.appointments.push(req.body);
    const updatedUser = await user.save();
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
  }

  console.log(req.body);
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
