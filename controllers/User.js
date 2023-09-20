const path = require('path');
const fs = require('fs');
const User = require('../models/usermodel');
const ErrorHandler = require('../utils/ErrorHandler');
const createActivationToken = require('../utils/createToken');
const sendMail = require('../utils/sendMail');

class UserController {
    static async Create(req, res, next) {
        const { name, email, password } = req.body;
        const userEmail = await User.findOne({ email });

        if (userEmail) {
            const filename = req.file.filename;
            const filePath = `uploads/${filename}`;
            fs.unlink(filePath, err => {
                if (err) {
                    console.log(err);
                    res.status(500).json({ message: 'Error deleting file' });
                }
                res.json({ message: 'File deleted successfully' });
            });
            return next(new ErrorHandler('User already exists', 400));
        }
        try {
            const filename = req.file.filename;
            const fileUrl = path.join(filename);

            const user = {
                name,
                email,
                password,
                avatar: fileUrl
            };

            const activateToken = createActivationToken(user);

            const activateUrl = `http://localhost:5174/activation/${activateToken}`;

            // const newUser = await User(user).save();
            // return res.status(201).json({ suceess: true, newUser });
            try {
                await sendMail({
                    email: email,
                    subject: 'Activate your account',
                    message: `Hello ${user.name}. Please click on the link to activate your account: ${activateUrl}`,

                });
                res.status(201).json({
                    success: true,
                    message: `Please check your email:- ${user.email} to activate account`
                });
            }
            catch (err) {
                return next(new ErrorHandler((err.message), 500));
            }
        }
        catch (err) {
            return next(new ErrorHandler((err.message), 400));
        }
    }
}

module.exports = UserController;