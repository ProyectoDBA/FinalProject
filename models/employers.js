import mongoose from "mongoose";

const employersSchema = new mongoose.Schema({
    EmployerID: { type: Number, required: true, unique: true },
    CompanyName: { type: String, required: true },
    ContactName: { type: String },
    ContactTitle: { type: String },
    Industry: { type: String, required: true },
    Country: { type: String, required: true },
    City: { type: String, required: true },
    Address: { type: String, required: true },
    JobPostings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'JobPosting' }],
    Type: { type: String, required: true }
});

mongoose.model('Employers', employersSchema);
