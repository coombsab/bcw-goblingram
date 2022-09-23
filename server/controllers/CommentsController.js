import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService.js";
import BaseController from "../utils/BaseController.js";
import { BadRequest } from "../utils/Errors.js";
export class CommentsController extends BaseController {
  constructor() {
    super('gg/api/comments')
    this.router
      .get("", this.getComments)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createComment)
      .get('', this.getCommentsByPostId)

  }

  async getComments(req, res, next) {
    try {
      const comments = await commentsService.getComments()
      res.send(comments)
    }
    catch(error) {
      next(error)
    }
  }

  async getCommentsByPostId(req, res, next) {
    try {
      if (!req.query.goblinId) {
        throw new BadRequest('Must be a goblin to comment')
      }
      const goblins = await commentsService.getCommentsByPostId(req.query)
      res.send(goblins)
    } catch (error) {
      next(error)
    }
  }

  async createComment(req, res, next) {
    try {
      const formData = req.body
      req.body.id = req.params.id
      const comment = await commentsService.createComment(formData)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }
}