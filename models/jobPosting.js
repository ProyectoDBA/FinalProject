import mongoose from "mongoose";

const jobPostingSchema = new mongoose.Schema({
    JobPostingID: { type: String, required: true, unique: true },
    EmployerID: { type: mongoose.Schema.Types.ObjectId, ref: 'Employers', required: true },
    Title: { type: String, required: true },
    Description: { type: String, required: true },
    Requirements: [{ type: String, required: true }],
    Location: { type: String, required: true },
    PostedDate: { type: Date, required: true },
    ExpiryDate: { type: Date, required: true },
    ApplicationsReceived: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Application' }]
});

mongoose.model('JobPosting', jobPostingSchema);
