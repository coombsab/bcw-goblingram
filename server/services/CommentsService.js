import { dbContext } from "../db/DbContext.js";

class CommentsService {

  async getComments(query = {}) {
    const goblin = await dbContext.Goblins.find(query)
      .populate('post').populate('goblin', 'comment')
    return Comment

  }

  async doComment(formData) {
    // need to change goblins to post 
    const post = await this.getPostById(formData.postId)
    const comment = await dbContext.Comments.create(formData)
    await comment.populate('post')
    await comment.populate('comments', 'poster')
    return Comment

  }








}
export const commentsService = new CommentsService()