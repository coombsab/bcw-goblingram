import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";

class CommentsService {
  async getComments() {
    const comments = await dbContext.Comments.find()
    return comments
  }

  async getCommentsByPostId(query = {}) {
    const comment = await dbContext.Comments.find(query)
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

 async createUpVote() {
    
  }

  async createDownVote() {
    
  }



}
export const commentsService = new CommentsService()