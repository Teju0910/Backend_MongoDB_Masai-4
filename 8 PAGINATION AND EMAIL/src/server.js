const app = require("./index");

const connect = require("./configs/db");

app.listen(8888, async function() {
 
    await connect();
    console.log("listening on port 8888");
});
