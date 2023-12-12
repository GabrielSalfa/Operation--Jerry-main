const cors = require('cors');
const express = require("express");
const mongoose = require("mongoose");
const { createRoles } = require('./libs/initialSetup');
require("dotenv").config();

//Rutas 
const employRoutes = require("./routes/employsRoutes");
const insuredRoutes = require("./routes/insured");
const accidentRoutes = require("./routes/accidents");
const gruasRoutes = require("./routes/gruas");
const presupRepRoutes = require("./routes/presupuestoRep");
const reportsRoutes = require("./routes/report");
const rolRoutes = require("./routes/rolRoutes");
const liquidatorRoutes = require('./routes/liquidatorRoutes')
/* Ejecutamos express */
const app = express();
createRoles();
const port = process.env.PORT || 9000;
// Cors va a permitir solicitudes desde el FrontEnd
app.use(cors({
    origin: 'http://localhost:3000'
}));
/* midleware */
app.use(express.json());
app.use('/api', employRoutes);
app.use('/api', insuredRoutes);
app.use('/api', accidentRoutes);
app.use('/api', gruasRoutes);
app.use('/api', presupRepRoutes);
app.use('/api', reportsRoutes);
app.use('/api', rolRoutes);
app.use('/api', liquidatorRoutes);
/*Connection with mondongoDB */
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((error) => console.log(error));



/* Escucha en una puerta especifica */
app.listen(9000, () => console.log('server listening on port', port));