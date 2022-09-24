import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";


export class CommentVotersController extends BaseController{

  constructor() {
    super('/gg/commentvoters')
    this.router
    .get("", this.getVotes)
    .use(Auth0Provider.getAuthorizedUserInfo)
    .post("", this.createVote)
}
  createVote(arg0, createVote) {
    throw new Error("Method not implemented.");
  }
  getVotes(arg0, getVotes) {
    throw new Error("Method not implemented.");
  }


}