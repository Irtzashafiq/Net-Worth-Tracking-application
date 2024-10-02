const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
    },
    itemPrice: {
      type: String,
      required: true,
    },
    itemQuantity: {
      type: String,
    },

    itemDescription: {
      type: String,
      default: 1,
    },
    itemImage: {
      type: String,
      default: "user",
    },
    itemLike: {
      type: Boolean,
    },
    username: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
