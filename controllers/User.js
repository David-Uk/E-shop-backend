const path = require('path');
const fs = require('fs');
const User = require('../models/usermodel');
const ErrorHandler = require('../utils/ErrorHandler');

class UserController {
    static async Create(req, res, next) {
        const { name, email, password } = req.body;
        const userEmail = await User.findOne({ email });
        try {
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

            const filename = req.file.filename;
            const fileUrl = path.join(filename);

            const newUser = await User({
                name,
                email,
                password,
                avatar: fileUrl
            }).save();

            return res.status(201).json({ suceess: true, newUser });
        }
        catch (err) {
            return next(new ErrorHandler((error.message), 400));
        }
    }
}

module.exports = UserController;