import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";

class CommentsService {

  // TODO ask about why toString() on comment.goblinId isn't working as expected
  async editComment(commentData, userInfo) {
    const comment = await this.getCommentById(commentData.id)

    if (userInfo.id != comment.goblinId) {
      throw new Forbidden("Begone, goblin!  This is not your comment.")
    }

    comment.goblinId = commentData.goblinid || comment.goblinId
    comment.postId = commentData.postId || comment.postId
    comment.description = commentData.description || comment.description

    await comment.save()
    return comment
  }

  async removeComment(commentId, userInfo) {
    const comment = await this.getCommentById(commentId)
    if (userInfo.id != comment.goblinId) {
      throw new Forbidden("Begone, goblin!  This is not your comment.")
    }
    await comment.remove()
    return comment
  }

  async getCommentById(commentId) {
    const comment = await dbContext.Comments.findById(commentId)

    if (!comment) {
      throw new BadRequest("Cannot get Comment, Invalid ID")
    }

    return comment
  }
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

  async createUpVote(upVoteData) {
  const post = await this.getCommentById(upVoteData.postId)
    const upVote = await dbContext.PostUpVoters.create(upVoteData)
    await upVote.populate('comment')
    await upVote.populate('goblin', 'name picture')

    return upVote
  }

  async getUpVote(query = {}) {
    const upVotes = await dbContext.CommentUpVoters.find(query)
      .populate('comment')
      .populate('goblin', 'name picture')
    return upVotes
  }

  async createDownVote(downVoteData) {
const post = await this.getCommentById(downVoteData.postId)
    const downVote = await dbContext.CommentDownVoters.create(downVoteData)
    await downVote.populate('comment')
    await downVote.populate('goblin', 'name picture')

    return downVote
  }

  async getDownVote(query = {}) {
  const downVotes = await dbContext.CommentDownVoters.find(query)
      .populate('goblin', 'name picture')
    return downVotes
  }

}
export const commentsService = new CommentsService()