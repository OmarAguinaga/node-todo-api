const { MongoClient, ObjectID } = require("mongodb");
const dotenv = require("dotenv");
dotenv.load();
MongoClient.connect(
  `mongodb://${process.env.MLAB_USER}:${
    process.env.MLAB_PSW
  }@ds013848.mlab.com:13848/node-todo`,
  (err, client) => {
    if (err) return console.log("Unable to connect to MongoDB server");

    console.log("Connected to MongoDB server");

    const db = client.db("node-todo");

    // deleteMany
    // db
    //   .collection("Users")
    //   .deleteMany({ name: "Martian" })
    //   .then(res => {
    //     console.log(res);
    //   });

    // deleteOne
    // db
    //   .collection("Todos")
    //   .deleteOne({ text: "Eat lunch" })
    //   .then(res => {
    //     console.log(res);
    //   });

    // findOneAndDelete;
    db
      .collection("Users")
      .findOneAndDelete({ _id: new ObjectID("5aad970519221e4b07dfd887") })
      .then(res => {
        console.log(res);
      });

    // client.close();
  }
);
