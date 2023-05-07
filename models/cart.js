import mongoose from "mongoose";

//definir el esquema
export const cartSchema = new mongoose.Schema({
    carritoTimestamP:{
        type: Date,
        required: true
    },
    producto: [
        {
          id: {
            type: String,
            required: true
          },
        }
      ]
})

