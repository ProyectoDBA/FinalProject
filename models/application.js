import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    ApplicationID: { type: Number, required: true, unique: true },
    ProfessionalID: { type: mongoose.Schema.Types.ObjectId, ref: 'Professionals', required: true },
    JobPostingID: { type: mongoose.Schema.Types.ObjectId, ref: 'JobPosting', required: true },
    ApplicationDate: { type: Date, required: true },
    Status: { type: String, required: true, default: 'Applied' },
    Comments: { type: String }
});

mongoose.model('Application', applicationSchema);
