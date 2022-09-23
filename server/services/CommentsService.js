import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";

class CommentsService {

  async getComments(query = {}) {
    const comment = await dbContext.Comments.find(query)
      .populate('post').populate('goblin', 'comment')
    return comment

  }

  //FIXME needs to connect to post ID 
  async createComment(formData) {
    // const post = await this.postsService.getPostById(formData.postId)
    const comment = await dbContext.Comments.create(formData)
    await comment.populate('post')
    await comment.populate('comments', 'poster')
    return comment

  }





}
export const commentsService = new CommentsService()