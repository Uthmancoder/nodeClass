const express = require("express");
const shoppingRoutes = express.Router();
const { getItems, postItems,editShopItems, postEdittedItems, deleteItems } = require("../Controllers/shoppingcontroller");

shoppingRoutes.get("/getItems", getItems);
shoppingRoutes.post("/postItems", postItems);
shoppingRoutes.get("/editItems/:id", editShopItems)
shoppingRoutes.post("/editItems", postEdittedItems)
shoppingRoutes.post("/deleteItems", deleteItems) 



module.exports = shoppingRoutes;
