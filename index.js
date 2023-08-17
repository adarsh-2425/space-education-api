const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

//importing Galaxies Route
const galaxiesRouter = require('./modules/galaxies/galaxies.router');
app.use('/api', galaxiesRouter);

//importing Misions Route
const missionsRouter = require('./modules/missions/missions.router');
app.use('/api', missionsRouter);

//importing Phenomenas Route
const phenomenasRouter = require('./modules/phenomenas/phenomenas.router');
app.use('/api', phenomenasRouter);

//importing Plants Route
const planetsRouter = require('./modules/planets/planets.router');
app.use('/api', planetsRouter);

//importing Stars Route
const starsRouter = require('./modules/stars/stars.router');
app.use('/api', starsRouter);

//importing Terminologies Route
const terminologiesRouter = require('./modules/terminologies/terminologies.router');
app.use('/api', terminologiesRouter);

// Serve static files from the "public" folder
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Something went wrong' });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
});