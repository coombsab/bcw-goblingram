import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentService } from "../services/CommentsService.js";
import BaseController from "../utils/BaseController.js";
import { BadRequest } from "../utils/Errors.js";
export class CommentsController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .get('', this.getComments)

  }
  create(arg0, create) {
    throw new Error("Method not implemented.");
  }
  async getComments(req, res, next) {
    try {
      if (!req.query.goblinId) {
        throw new BadRequest('Must be globlin to comment')
      }
      const goblins = await commentService.getComments(req.query)
      res.send()
    } catch (error) {
      next(error)
    }
  }

  // TODO add create for comments 















}