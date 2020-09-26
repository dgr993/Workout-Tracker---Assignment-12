const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
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
    
},
{
    toJSON: {
        virtuals: true
    }
});

// code from Trevor Otterson for total duration
workoutSchema.virtual('totalDuration').get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;


