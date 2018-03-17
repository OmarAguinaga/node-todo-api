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
    // db
    //   .collection("Todos")
    //   .find()
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log("Todos");
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log("Unable to fetch todos");
    //     }
    //   );
    // async function fetch() {
    //   try {
    //     const docs = await db
    //       .collection("Todos")
    //       .find({ _id: new ObjectID("5aacba7e6738e19043e13789") })
    //       .toArray();
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    //   } catch (error) {
    //     console.log("Unable to fetch todos");
    //   }
    // }
    async function fetch() {
      try {
        const docs = await db
          .collection("Users")
          .find({ name: "Martian" })
          .toArray();
        console.log("Users");
        console.log(JSON.stringify(docs, undefined, 2));
      } catch (error) {
        console.log("Unable to fetch todos");
      }
    }
    fetch();
    // client.close();
  }
);
