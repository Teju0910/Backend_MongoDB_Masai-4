
const app = require("./index");

const connect = require("./configs/db");

app.listen(1000, async() => {
    try{
        await connect();
        console.log("listing to port 1000")
    }
    catch(err){
        console.log(err.message);
    }
});

