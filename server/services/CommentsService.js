import { dbContext } from "../db/DbContext.js";

class CommentsService {

  async getComments(query = {}) {
    const goblin = await dbContext.Comments.find(query)
      .populate('post').populate('goblin', 'comment')
    return Comment

  }

  async doComment(formData) {
    const post = await this.getPostById(formData.postId)
    const comment = await dbContext.Comments.create(formData)
    await comment.populate('post')
    await comment.populate('comments', 'poster')
    return comment

  }
  getPostById(postId) {
    throw new Error("Method not implemented.");
  }








}
export const commentsService = new CommentsService()