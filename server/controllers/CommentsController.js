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
  create(arg0, create) {
    throw new Error("Method not implemented.");
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
  async createComment(req, res, next) {
    try {
      const formData = {
        postId: req.body.postId,
        goblinId: res.userInfo.id
      }
      const comment = await commentsService.doComment(formData)
      res.send(comment)

    } catch (error) {
      next(error)
    }

  }














}