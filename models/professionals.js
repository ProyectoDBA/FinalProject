import mongoose from "mongoose";

const professionalsSchema = new mongoose.Schema({
    ProfessionalID: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true },
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Sex: { type: String },
    DateOfBirth: { type: Date, required: true },
    Professions: [{ type: String, required: true }],
    Experience: [{
        Company: String,
        Position: String,
        Years: Number,
        Description: String
    }],
    Titles: [{
        Institution: String,
        Title: String,
        DateObtained: Date
    }],
    Resume: { type: String, required: true }, // Ruta al archivo del currículum
    Applications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Application' }],
    PostulacionesMensuales: {
        type: Number,
        default: 0,
        max: [3, 'No se puede postular a más de tres puestos por mes']
    }
});

mongoose.model('Professionals', professionalsSchema);
