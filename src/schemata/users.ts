const users = `
  type Users {
    description: String
    facebookId: String
    followeesCount: Int
    followersCount: Int
    githubLoginName: String
    id: String
    itemsCount: Int
    linkedinId: String
    location: String
    name: String
    organization: String
    permanentId: Int
    profileImageUrl: String
    teamOnly: Boolean
    twitterScreenName: String
    websiteUrl: String
  }
  
  type Query {
    users: [Users]
  }
`;

export default users;
