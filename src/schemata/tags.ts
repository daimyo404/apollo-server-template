const tags = `
  type Tags {
  followersCount: Int
  iconUrl: String
  id: String
  itemsCount: Int
  }
  
  type Query {
    tags: [Tags]
  }
`;

export default tags;
