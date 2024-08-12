import mongoose from 'mongoose';

// Import models
const Employers = mongoose.model('Employers');
const Professionals = mongoose.model('Professionals');
const JobPostings = mongoose.model('JobPosting');
const Applications = mongoose.model('Application');

export const resolvers = {
    Query: {
        // Fetch all employers or a specific employer
        employers: async () => await Employers.find({}),
        employer: async (parent, { EmployerID }) => await Employers.findById(EmployerID),

        // Fetch all professionals or a specific professional
        professionals: async () => await Professionals.find({}),
        professional: async (parent, { ProfessionalID }) => await Professionals.findById(ProfessionalID),

        // Fetch all job postings or a specific job posting
        jobPostings: async () => await JobPostings.find({}),
        jobPosting: async (parent, { JobPostingID }) => await JobPostings.findById(JobPostingID),

        // Fetch all applications or a specific application
        applications: async () => await Applications.find({}),
        application: async (parent, { ApplicationID }) => await Applications.findById(ApplicationID),
    },
    Employer: {
        // Resolve the job postings for each employer
        JobPostings: async (employer) => await JobPostings.find({ EmployerID: employer._id })
    },
    Professional: {
        // Resolve the applications for each professional
        Applications: async (professional) => await Applications.find({ ProfessionalID: professional._id })
    },
    JobPosting: {
        // Resolve the employer details for each job posting
        Employer: async (jobPosting) => await Employers.findById(jobPosting.EmployerID)
    },
    Application: {
        // Resolve the professional and job posting for each application
        Professional: async (application) => await Professionals.findById(application.ProfessionalID),
        JobPosting: async (application) => await JobPostings.findById(application.JobPostingID)
    },
    Mutation: {
        addEmployer: async (parent, args) => {
            const newEmployer = new Employers(args);
            return newEmployer.save();
        },
        addProfessional: async (parent, args) => {
            const newProfessional = new Professionals(args);
            return newProfessional.save();
        },
        addJobPosting: async (parent, args) => {
            const newJobPosting = new JobPostings(args);
            return newJobPosting.save();
        },
        addApplication: async (parent, args) => {
            const newApplication = new Applications(args);
            return newApplication.save();
        },

        updateEmployer: async (parent, args) => {
            const { EmployerID, ...rest } = args;
            return Employers.findByIdAndUpdate(EmployerID, rest, { new: true });
        },
        updateProfessional: async (parent, args) => {
            const { ProfessionalID, ...rest } = args;
            return Professionals.findByIdAndUpdate(ProfessionalID, rest, { new: true });
        },
        updateJobPosting: async (parent, args) => {
            const { JobPostingID, ...rest } = args;
            return JobPostings.findByIdAndUpdate(JobPostingID, rest, { new: true });
        },
        updateApplication: async (parent, args) => {
            const { ApplicationID, ...rest } = args;
            return Applications.findByIdAndUpdate(ApplicationID, rest, { new: true });
        },

        deleteEmployer: async (parent, { EmployerID }) => {
            return Employers.findByIdAndDelete(EmployerID);
        },
        deleteProfessional: async (parent, { ProfessionalID }) => {
            return Professionals.findByIdAndDelete(ProfessionalID);
        },
        deleteJobPosting: async (parent, { JobPostingID }) => {
            return JobPostings.findByIdAndDelete(JobPostingID);
        },
        deleteApplication: async (parent, { ApplicationID }) => {
            return Applications.findByIdAndDelete(ApplicationID);
        }
    }
};
