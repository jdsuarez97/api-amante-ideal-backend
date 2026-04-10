import mongoose from "mongoose";

const amanteSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    edad: {
      type: Number,
      required: true,
      min: 18
    },
    intereses: {
      type: [String],
      required: true,
      validate: {
        validator: (value) => Array.isArray(value) && value.length > 0,
        message: "intereses must contain at least one value"
      }
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

const Amante = mongoose.model("Amante", amanteSchema);

export default Amante;
