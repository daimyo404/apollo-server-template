import { RESTDataSource } from "@apollo/datasource-rest";
import * as dotenv from "dotenv";
dotenv.config();

type Response = {
  description: string;
  facebookId: string;
  followeesCount: number;
  followersCount: number;
  githubLoginName: string;
  id: string;
  itemsCount: number;
  linkedinId: string;
  location: string;
  name: string;
  organization: string;
  permanentId: number;
  profileImageUrl: string;
  teamOnly: boolean;
  twitterScreenName: string;
  websiteUrl: string;
};

class UsersAPI extends RESTDataSource {
  override baseURL = "https://qiita.com/";

  async users(): Promise<Response[]> {
    const data = await this.get(`api/v2/users`, {
      params: {
        page: "1",
        per_page: "20",
      },
      headers: {
        Authorization: `Bearer ${process.env.QIITA_TOKEN}`,
      },
    });
    return data;
  }
}

export default UsersAPI;
