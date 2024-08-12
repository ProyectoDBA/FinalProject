export const typeDefs = `#graphql
  type Professional {
      ProfessionalID: ID!,
      FirstName: String!,
      LastName: String!,
      Sex: String,
      DateOfBirth: String!,
      Professions: [String]!,
      Experience: [Experience],
      Titles: [Title],
      Resume: String!,
      Applications: [Application],
      PostulacionesMensuales: Int
  }

  type Employer {
      EmployerID: ID!,
      CompanyName: String!,
      ContactName: String,
      ContactTitle: String,
      Industry: String!,
      Country: String!,
      City: String!,
      Address: String!,
      JobPostings: [JobPosting],
      Type: String!
  }

  type JobPosting {
      JobPostingID: ID!,
      Employer: Employer!,
      Title: String!,
      Description: String!,
      Requirements: [String]!,
      Location: String!,
      PostedDate: String!,
      ExpiryDate: String!,
      ApplicationsReceived: [Application]
  }

  type Application {
      ApplicationID: ID!,
      Professional: Professional!,
      JobPosting: JobPosting!,
      ApplicationDate: String!,
      Status: String!,
      Comments: String
  }

  type Experience {
      Company: String,
      Position: String,
      Years: Int,
      Description: String
  }

  type Title {
      Institution: String,
      Title: String,
      DateObtained: String
  }

  type Query {
      professionals: [Professional]!,
      professional(ProfessionalID: ID!): Professional,

      employers: [Employer]!,
      employer(EmployerID: ID!): Employer,

      jobPostings: [JobPosting]!,
      jobPosting(JobPostingID: ID!): JobPosting,

      applications: [Application]!,
      application(ApplicationID: ID!): Application
  }

  type Mutation {
      addProfessional(FirstName: String!, LastName: String!, Sex: String, DateOfBirth: String!, Professions: [String]!, Resume: String!): Professional,
      addEmployer(CompanyName: String!, Industry: String!, Country: String!, City: String!, Address: String!, Type: String!): Employer,
      addJobPosting(EmployerID: ID!, Title: String!, Description: String!, Requirements: [String]!, Location: String!, PostedDate: String!, ExpiryDate: String!): JobPosting,
      addApplication(ProfessionalID: ID!, JobPostingID: ID!, ApplicationDate: String!, Status: String!, Comments: String): Application,

      updateProfessional(ProfessionalID: ID!, FirstName: String, LastName: String, Sex: String, DateOfBirth: String, Professions: [String], Resume: String): Professional,
      updateEmployer(EmployerID: ID!, CompanyName: String, ContactName: String, ContactTitle: String, Industry: String, Country: String, City: String, Address: String, Type: String): Employer,
      updateJobPosting(JobPostingID: ID!, Title: String, Description: String, Requirements: [String], Location: String, PostedDate: String, ExpiryDate: String): JobPosting,
      updateApplication(ApplicationID: ID!, Status: String, Comments: String): Application,

      deleteProfessional(ProfessionalID: ID!): Professional,
      deleteEmployer(EmployerID: ID!): Employer,
      deleteJobPosting(JobPostingID: ID!): JobPosting,
      deleteApplication(ApplicationID: ID!): Application
  }
`;
