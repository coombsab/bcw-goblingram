import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";

class CommentsService {
  async getComments() {
    const comments = await dbContext.Comments.find()
    return comments
  }

  async getCommentsByPostId(postId) {
    const comment = await dbContext.Comments.find({ postId })
      .populate('post')
      .populate('goblin', 'name picture')
    return comment

  }

  async createComment(formData) {
    const comment = await dbContext.Comments.create(formData)
    await comment.populate('post')
    await comment.populate('goblin', 'name picture')
    return comment
  }





}
export const commentsService = new CommentsService()