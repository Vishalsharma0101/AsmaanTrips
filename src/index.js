const express = require('express');  
const { ServerConfig  } = require("./config");
const apiRoutes = require("./api/routes");

const app = express();


app.use("/api" , apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started server on port: ${ServerConfig.PORT}`);
});
