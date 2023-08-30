const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require('./Table/Tablecontents')
const HotelModel = require('./Table/hotelcontent')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const { v4: uuidv4 } = require('uuid');

const app = express()
app.use(express.json())

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}))


app.use(cookieParser())

mongoose.connect("mongodb://127.0.0.1:27017/Restaurant", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("db connected");
    })
    .catch((e) => console.log(e));

const jwtsecretkey = process.env.JWT_SECRET_KEY || 'secretkey';

app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await EmployeeModel.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await EmployeeModel.create({ user_id: uuidv4(), name, email, password: hashedPassword });

        const token = jwt.sign({ user_id: newUser.user_id }, jwtsecretkey);
        res.cookie('token', token, { httpOnly: true, sameSite: 'strict' });

        res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.post("/login", (req, res) => {
    const { email, password } = req.body;

    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        const token = jwt.sign({ user_id: user.user_id }, jwtsecretkey);
                        // res.cookie('token', token, { httpOnly: true, sameSite: 'strict' });

                        return res.json({ token, status: "Success" });
                    } else {
                        return res.status(401).json("The password is incorrect");
                    }
                });
            } else {
                return res.status(404).json("User doesn't exist");
            }
        })
        .catch(err => {
            console.error("Error during login:", err);
            res.status(500).json("Internal server error");
        });
});


app.get('/Restaurants', async (req, res) => {
    try {
        const fulldata = await HotelModel.find()
        return res.json(fulldata)
    }
    catch (err) {
        console.log(err.message)
    }
})

app.get('/Restaurants/:Restaurant_name', async (req, res) => {
    try {
        const restaurant_name = req.params.Restaurant_name;
        const fulldata = await HotelModel.findOne({ name: restaurant_name })

        return res.json(fulldata.menu)
    }
    catch (err) {
        console.log(err.message)
    }
});

app.post('/logout', async (req, res) => {
    try {
        const token = req.cookies.token;
        const decodedToken = jwt.verify(token, jwtsecretkey);
        const userId = decodedToken.user_id;

        await EmployeeModel.updateOne({ user_id: userId }, { cartItems: [] });
        res.clearCookie('token');
        res.status(200).json('Logged out successfully');
    }
    catch (error) {
        console.error('Error logging out:', error);
        res.status(500).json('Error logging out');
    }
});

app.post('/add-to-cart', async (req, res) => {
    const { restaurant, itemDetails } = req.body;

    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json('Unauthorized');

        }
        const decodedToken = jwt.verify(token, jwtsecretkey);
        const userId = decodedToken.user_id;

        const user = await EmployeeModel.findOne({ user_id: userId });

        if (!user) {
            return res.status(400).json('User not found');
        }

        user.cartItems.push({
            restaurant: restaurant,
            itemDetails: itemDetails,
        });

        await user.save();

        res.status(200).json('Item added to cart');
    } catch (error) {
        console.error('Error adding item to cart:', error);
        res.status(500).json('Error adding item to cart');
    }
});


app.get('/get-user-cart', async (req, res) => {
    try {
        const token = req.cookies.token;
        const decodedToken = jwt.verify(token, jwtsecretkey);
        const userId = decodedToken.user_id;

        const user = await EmployeeModel.findOne({ user_id: userId });
        const cartDetails = [];

        for (const cartItem of user.cartItems) {
            const restaurantDetails = await HotelModel.findOne({ name: cartItem.restaurant });

            const itemDetailsArray = [];

            for (const itemDetail of cartItem.itemDetails) {
                const item = restaurantDetails.menu.find(menuItem => menuItem.ID === itemDetail.ID);
                itemDetailsArray.push(item);
            }

            cartDetails.push({
                restaurant: restaurantDetails,
                itemDetails: itemDetailsArray
            });

        }
        res.json(cartDetails);
    }
    catch (error) {
        console.error("Error Fetching user cart Items:", error);
        res.status(500).json("Error fetching user cart items");
    }
})


app.listen(3001, () => {
    console.log("server is running")
})