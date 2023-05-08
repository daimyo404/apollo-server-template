import users from "./users";
import tags from "./tags";

const resolvers = {
  Query: { ...users, ...tags },
};

export default resolvers;
