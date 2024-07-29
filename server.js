import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import './db.js';
import authRoutes from './routes/authRoutes.js';
import taskRouter from './routes/taskRoutes.js';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Define routes
app.use('/auth', authRoutes);
app.use('/task', taskRouter);

// Define the root route
app.get('/', (req, res) => {
  res.send('Welcome to the Task Manager API');
});

// Fallback route for undefined paths
app.use((req, res, next) => {
  res.status(404).send('Route not found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
