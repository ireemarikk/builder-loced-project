const express = require("express");
const User = require("../model/user.model");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const response = require("../services/response.service")

const secretKey = "My Secret Key My Secret Key 1234.";
const options = {
    expiresIn: "1s"
};

router.post("/register", async (req, res) => {
    try {
        const user = new User(req.body);
        user.id = uuidv4();
        user.createdDate = new Date();
        user.isAdmin = false;

        const checkUserEmail = await User.findOne({
            email: user.email,
            tcNo: user.tcNo,
            name: user.name,
            surname: user.surname,
            phoneNumber: user.phoneNumber
        })

        if (checkUserEmail != null) {
            res.status(403).json({ message: "Bu mail adresi daha önce kullanıldı" });
        } else {
            // Şifreyi bcrypt ile kriptola
            const saltRounds = 10; // Kriptolama seviyesi

            const hashedPassword = await bcrypt.hash(user.password, saltRounds);
            user.password = hashedPassword;

            await user.save();

            const token = jwt.sign({}, secretKey, options);
            let model = { token: token, user: user };
            res.json(model);

        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        let user = await User.findOne({
            email: email
        })

        if (user == null) {
            res.status(403).json({ message: "Kullanıcı bulunamadı" })
        } else {
            // Şifreleri karşılaştırmak için bcrypt.compare kullan
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
                const token = jwt.sign({}, secretKey, options);
                // Tokeni HTTPOnly ve Secure olarak ayarla
                res.cookie("token", token, { httpOnly: true, secure: true });
                let model = { token: token, user: user };
                res.json(model);
            } else {
                res.status(403).json({ message: "Şifre yanlış!" });
            }
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})