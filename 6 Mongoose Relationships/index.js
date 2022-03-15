const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json())


const booksDB  = () => {    
    return mongoose.connect("mongodb://127.0.0.1:27017/booklib");
}

// User Schema....//

const UserSchema = new mongoose.Schema(
    {
        first_name :{ type: String, required: true },
        last_name :{ type: String, required: true },  
        // role :{ type: String, required: true },              
    },
    {
        versionKey: false,
        timestamps: true, // createdAt, updatedAt
    }
);
const User = mongoose.model("user", UserSchema); 

// Section Schema....//

const SectionSchema = new mongoose.Schema(
    {
        name :{ type: String, required: true },
        BookAutherId : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "bookauther",
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true, // createdAt, updatedAt
    }
);

const Section  = mongoose.model("section", SectionSchema)

// book Schema ///

const BookSchema = new mongoose.Schema(
    {
        book_name :{ type: String, required: true },
        book_body :{ type: String, required: true },
        // sectionId : {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "section",
        //     required: true,
        // },
        autherId : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "auther",
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true, // createdAt, updatedAt
    }
);

const Book = mongoose.model("book", BookSchema); 

// Auther Schema ///

const AutherSchema = new mongoose.Schema(
    {
        UserId : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true, // createdAt, updatedAt
    }
);

 const Auther = mongoose.model("auther", AutherSchema); 


 // book Schema ///

 const BookAutherSchema = new mongoose.Schema(
    {
        BookId : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "book",
            required: true,
        },
        AutherId : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "auther",
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true, // createdAt, updatedAt
    }
);

const BookAuther = mongoose.model("bookauther", BookAutherSchema); 



// CRUD OPERATIONS
// get => getting data from the server
// post => adding data to the server
// put / patch => updating data in the server
// delete => deleting data from the server

// USERS CRUD

app.get("/user" , async (req,res) => {
    try {
        const users = await User.find().lean().exec();
    
        return res.status(200).send({ users: users }); // []
      } catch (err) {
        return res
          .status(500)
          .send({ message: "Something went wrong .. try again later" });
      }
})


app.post("/user", async (req, res) => {
    try {
      const user = await User.create(req.body);  
      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  app.get("/user/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id).lean().exec();
      // db.users.findOne({_id: Object('622893471b0065f917d24a38')})
  
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  app.patch("/user/:id", async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
      // db.users.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})
  
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  app.delete("/user/:id", async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id).lean().exec();
      // db.users.deleteOne({_id: Object('622893471b0065f917d24a38')})
  
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });  


  //............... Section CRUD ............//.

  app.get("/section", async (req,res) => {
    try {
        const section = await Section.find()
        .populate({
          path : "BookAutherId",
          populate:[{path:"AutherId",
          populate:[{path:"UserId",select : { UserId:0,_id: 0 }}]}],
         
          })
        .populate({
          path : "BookAutherId",
          populate:[{path:"BookId",select : { autherId:0,_id: 0 } }] 
          }) 
        .lean().exec();
    
        return res.status(200).send( {sections : section});
      } catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })

  app.post("/section", async (req,res) => {
    try {
        const section = await Section.create(req.body);   
        return res.status(200).send(section);
      } 
    catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })

  app.get("/section/:id", async (req,res) => {
    try {
        const section = await Section.findById(req.params.id).lean().exec();   
        return res.status(201).send(section);
      } 
    catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })

  app.patch("/section/:id", async (req,res) => {
      try {
          const section = await Section.findByIdAndUpdate(req.params.id, req.body,{
              new : true,
          }).lean().exec();

         return res.status(200).send(section); 
      }
      catch(err) {
          return res.status(500).send({message : err.message});
      }
  });

  app.delete("/section/:id", async (req,res) => {
      try {
          const section = await Section.findByIdAndDelete(req.params.id).lean().exec();
          return res.status(500).send({message :err.message})     
        }
        catch(err){
            return err;
        }
  })


  //............... Books CRUD ............//.

  app.get("/book", async (req,res) => {
    try {
        const book = await Book.find().lean().exec();   
        return res.status(200).send( {books : book});        
      } 
    catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })

  app.post("/book", async (req,res) => {
    try {
        const book = await Book.create(req.body);   
        return res.status(200).send(book);
      } 
    catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })

  app.get("/book/:id", async (req,res) => {
    try {
        const book = await Book.findById(req.params.id).lean().exec();   
        return res.status(201).send(section);
      } 
    catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })

  app.patch("/book/:id", async (req,res) => {
      try {
          const book = await Book.findByIdAndUpdate(req.params.id, req.body,{
              new : true,
          }).lean().exec();

         return res.status(200).send(book); 
      }
      catch(err) {
          return res.status(500).send({message : err.message});
      }
  });

  app.delete("/book/:id", async (req,res) => {
      try {
          const book = await Book.findByIdAndDelete(req.params.id).lean().exec();
          return res.status(500).send({message :err.message})     
        }
        catch(err){
            return err;
        }
  })


   //............... Auther CRUD ............//.

   app.get("/auther", async (req,res) => {
    try {
        const auther = await Auther.find().populate({
            path : "UserId",
            select : { first_name :1, last_name:1, _id:0}
        }).lean().exec();   
        return res.status(200).send( {authers : auther});        
      } 
    catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })

  app.post("/auther", async (req,res) => {
    try {
        const auther = await Auther.create(req.body);   
        return res.status(200).send(auther);
      } 
    catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })

  app.get("/auther/:id", async (req,res) => {
    try {
        const auther = await Auther.findById(req.params.id).lean().exec();   
        return res.status(201).send(section);
      } 
    catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })

  app.patch("/auther/:id", async (req,res) => {
      try {
          const auther = await Auther.findByIdAndUpdate(req.params.id, req.body,{
              new : true,
          }).lean().exec();

         return res.status(200).send(auther); 
      }
      catch(err) {
          return res.status(500).send({message : err.message});
      }
  });

  app.delete("/auther/:id", async (req,res) => {
      try {
          const auther = await Auther.findByIdAndDelete(req.params.id).lean().exec();
          return res.status(500).send({message :err.message})     
        }
        catch(err){
            return err;
        }
  });


  //...............Book and Auther CRUD ............//.

  app.get("/Bookauther", async (req,res) => {
    try {
        const bookauther = await BookAuther.find().populate({
            path : "BookId",
            select : ["book_name","book_body"] 
        }).populate({
          path : "AutherId",
          populate:[{path:"UserId"}]
        }).lean().exec();   
// console.log(bookauther)
        return res.status(200).send( {bookauther : bookauther});        
      } 
    catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })

  app.post("/Bookauther", async (req,res) => {
    try {
        const bookauther = await BookAuther.create(req.body);   
        return res.status(200).send(bookauther);
      } 
    catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })

  app.get("/Bookauther/:id", async (req,res) => {
    try {
        const bookauther = await BookAuther.findById(req.params.id).lean().exec();   
        return res.status(201).send(bookauther);
      } 
    catch (err) {
        return res.status(500).send({ message: err.message });
      }
  })

  app.patch("/Bookauther/:id", async (req,res) => {
      try {
          const bookauther = await BookAuther.findByIdAndUpdate(req.params.id, req.body,{
              new : true,
          }).lean().exec();

         return res.status(200).send(bookauther); 
      }
      catch(err) {
          return res.status(500).send({message : err.message});
      }
  });

  app.delete("/Bookauther/:id", async (req,res) => {
      try {
          const bookauther = await BookAuther.findByIdAndDelete(req.params.id).lean().exec();
          return res.status(500).send({message :err.message})     
        }
        catch(err){
            return err;
        }
  });



app.listen(4561, async() => {
    try{
        await booksDB();
        console.log("listining to port 4561")
    }
    catch(err){
        console.log(err)
    }
})
