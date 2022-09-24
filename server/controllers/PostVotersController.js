import { Auth0Provider } from "@bcwdev/auth0provider";
import { postsService } from "../services/PostsService.js";
import BaseController from "../utils/BaseController.js";


export class PostVotersController extends BaseController{

  constructor() {
    super('/gg/postvoters')
    this.router
    .get('', this.getUpVotes)
    .use(Auth0Provider.getAuthorizedUserInfo)
    .post('', this.createUpVote)
  }
  async getUpVotes(req, res, next) {
    try {
      
    }catch (error) {
    next(error)
    }
  }

  async createUpVote(req, res, next) {
    try {
      const upVoteData = {
        goblinId: req.userInfo.id,
        postId: req.body.postId
      }
      const upVote = await postsService.createUpVote(upVoteData)
      res.send(upVote)
      } catch (error) {
      next(error)
    }
  }



}