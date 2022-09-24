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
      .get('/:postId', this.getCommentsByPostId)
      .put("/:commentId", this.editComment)
      .delete("/:commentId", this.removeComment)
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
      const comments = await commentsService.getCommentsByPostId(req.params.postId)
      res.send(comments)
    } catch (error) {
      next(error)
    }
  }

  async createComment(req, res, next) {
    try {
      const formData = req.body
      formData.goblinId = req.userInfo.id
      const comment = await commentsService.createComment(formData)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async editComment(req, res, next) {
    try {
      const commentData = req.body
      commentData.id = req.params.commentId
      const comment = await commentsService.editComment(commentData, req.userInfo)
      res.send(comment)
    }
    catch(error) {
      next(error)
    }
  }

  async removeComment(req, res, next) {
    try {
      const comment = await commentsService.removeComment(req.params.commentId, req.userInfo)
      res.send(comment)
    }
    catch(error) {
      next(error)
    }
  }
}