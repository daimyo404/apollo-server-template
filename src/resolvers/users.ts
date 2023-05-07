import UsersAPI from "../apis/users";

const resolvers = {
  Query: {
    users: async (_: any, __: any, { dataSources }: any) => {
      const usersAPI = new UsersAPI();
      return usersAPI.users();
    },
  },
};

export default resolvers;
