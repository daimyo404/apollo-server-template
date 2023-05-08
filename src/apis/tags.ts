import { RESTDataSource } from "@apollo/datasource-rest";
import * as dotenv from "dotenv";
dotenv.config();

type Response = {
  followersCount: number;
  iconUrl: string;
  id: string;
  itemsCount: number;
};

class TagsAPI extends RESTDataSource {
  override baseURL = "https://qiita.com/";

  async tags(): Promise<Response[]> {
    const data = await this.get(`api/v2/tags`, {
      params: {
        page: "1",
        per_page: "20",
        sort: "count",
      },
      headers: {
        Authorization: `Bearer ${process.env.QIITA_TOKEN}`,
      },
    });
    return data;
  }
}

export default TagsAPI;
