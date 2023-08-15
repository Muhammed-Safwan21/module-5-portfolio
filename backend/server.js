const express = require('express');
const cookieParser = require('cookie-parser');
const authRouter = require('./authRouter');
const app = express();
const cors = require('cors')

const corsOptions = {
  origin: 'http://localhost:3000', // 
  credentials: true, // Allow cookies to be sent
};

app.use(cors(corsOptions));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRouter);

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on port ${process.env.PORT || 4000}`);
});