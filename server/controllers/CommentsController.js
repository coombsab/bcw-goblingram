import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService.js";
import BaseController from "../utils/BaseController.js";
import { BadRequest } from "../utils/Errors.js";
export class CommentsController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createComment)
      .get('', this.getComments)

  }

  async getComments(req, res, next) {
    try {
      if (!req.query.goblinId) {
        throw new BadRequest('Must be globlin to comment')
      }
      const goblins = await commentsService.getComments(req.query)
      res.send()
    } catch (error) {
      next(error)
    }
  }

  // TODO add create for comments 
  async createComment(req, res, next) {
    try {
      const formData = {
        postId: req.body.postId,
        goblinId: res.userInfo.id
      }
      const comment = await commentsService.createComment(formData)
      res.send(comment)

    } catch (error) {
      next(error)
    }

  }














}