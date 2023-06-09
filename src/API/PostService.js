import axios from "axios";

export default class PostService {
  static async getAll(limit= 10, page= 1) {//you have to show limit and pages
    const response = await axios.get("./posts.json", {
        params: {
            _limit: limit,
            _page:page
        }
    });
    return response.data;
  }
}
