const shoppingmodel = require("../Models/shoppingmodel");

const getItems = async (req, res) => {
  try {
    const result = await shoppingmodel.find({});
    if (!result) {
      return res.status(500).send({ message: "Error fetching from database", status: false });
    }
    console.log(result);
    res.render("shopping", { shoppingArray: result });
  } catch (error) {
    return res.status(500).send({ message: "Internal server error", status: false });
  }
};

const postItems = async (req, res) => {
  const { items, price, quantity, total } = req.body;
  try {
    const result = await shoppingmodel.create({ items, price, quantity, total });
    if (!result) {
      return res.status(500).send({ message: "Error saving to database", status: false });
    }
    res.redirect("/shop/getItems");
  } catch (error) {
    return res.status(500).send({ message: "Internal server error", status: false });
  }
};

const editShopItems = async (req, res) => {
  try {
    const id = req.params.id;
    const shopping = await shoppingmodel.findOne({ _id: id });

    if (!shopping) {
      return res.status(404).send("Todo not found");
    }

    const { items, quantity, price, total, _id } = shopping;
    res.render("EditShopping", { items, quantity, price, total, _id });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

const postEdittedItems = async (req, res) => {
  try {
    const _id = req.body._id;
    const newItems = req.body.items;
    const newQuantity = req.body.quantity;
    const newPrice = req.body.price;
    const newTotal = req.body.total

    const updatedShopping = await shoppingmodel.findByIdAndUpdate(
      { _id }, { items: newItems, quantity: newQuantity, price: newPrice, total: newTotal }
    );

    if (!updatedShopping) {
      return res.status(404).send("Todo not found");
    }

    res.redirect("/shop/getItems");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

const deleteItems = async (req, res) => {
  try {
    console.log(req.body)
    let index = req.body.index;
    console.log(index)
    const deleteitem = await shoppingmodel.findByIdAndDelete({ _id: index })
    console.log(deleteitem)
    res.redirect("/shop/getItems")
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getItems, postItems, editShopItems, postEdittedItems, deleteItems };
