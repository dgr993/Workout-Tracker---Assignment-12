const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    day: {
        type: Date,
        default: function () {
            return new Date()
        }
    },
    exercises: [
        {
            type: {
                type: String,
            },
            name: {
                type: String,
                required: "Enter an valid name"
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            }

        }

    ]
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;


