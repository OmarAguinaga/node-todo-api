const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.load();

MongoClient.connect(
  `mongodb://${process.env.MLAB_USER}:${
    process.env.MLAB_PSW
  }@ds013848.mlab.com:13848/node-todo`,
  (err, client) => {
    if (err) return console.log(err);
    console.log("Connected to MongoDB server");

    const db = client.db("node-todo");
    db.collection("Todos").insertOne(
      {
        text: "Eat lunch",
        completed: false
      },
      (err, result) => {
        if (err) return console.log("Unable to insert todo");

        console.log(JSON.stringify(result.ops, undefined, 2));
      }
    );

    // db.collection("Users").insertOne(
    //   {
    //     name: "Martian",
    //     age: 22,
    //     location: "Mars"
    //   },
    //   (err, result) => {
    //     if (err) return console.log(err);

    //     console.log(
    //       JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2)
    //     );
    //   }
    // );

    // mongo ds013848.mlab.com:13848/node-todo -u admin -p admin
    client.close();
  }
);
