import UsersAPI from "../apis/users";

const users = {
  users: async (_: any, __: any, { dataSources }: any) => {
    const usersAPI = new UsersAPI();
    return usersAPI.users();
  },
};

export default users;
