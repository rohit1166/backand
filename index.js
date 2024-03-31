import express from "express";

const app = express();
app.use(express.json());

app.get("/samosa", (req, res) => {
  res.json({
    name: "samosa",
    price: 15,
  });
});

app.get("/jalebi", (req, res) => {
  res.json({
    name: "jalebi",
    price: 20,
  });
});

app.get("/burger", (req, res) => {
  res.json({
    name: "Burger",
    price: 50,
  });
});

app.get("/food/order", (req, res) => {
  const { menu, quantity, price } = req.query;

  const totalPrice = parseInt(price) * parseInt(quantity);
  // const menu = req.query.menu;
  // const quantity= req.query.quantity;

  const { user, country } = req.headers;

  res.json({
    message: `You have ordered ${quantity} ${menu}`,
    bill: `Your total bill is ${totalPrice}`,
    details: `You are ${user} from ${country}`,
  });
});

app.get("/food/:type", (req, res) => {
  const { type } = req.params;

  if (type == "veg") {
    return res.json({
      message: `You have ordered veg food`,
    });
  } else {
    return res.json({
      message: `You have ordered non-veg food`,
    });
  }
});

app.post("/user", (req, res)=>{
  const {name, age} = req.body;

  res.json(
    {
      message: `Hey ${name}, you are ${age} years old !`
    }
  )
})

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
