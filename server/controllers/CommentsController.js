import { Auth0Provider } from "@bcwdev/auth0provider";
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
  async getComments(req, res, next) {
    try {
      if (!req.query.goblinId) {
        throw new BadRequest('Must be globlin to comment')
      }
      const goblins = await CommentService.getGobs(req.query)
      res.send()
    } catch (error) {
      next(error)
    }
  }

  // TODO add create for comments 















}