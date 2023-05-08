import TagsAPI from "../apis/tags";

const tags = {
  tags: async (_: any, __: any, { dataSources }: any) => {
    const tagsAPI = new TagsAPI();
    return tagsAPI.tags();
  },
};

export default tags;
