import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class PostsService {
  async removePost(id, userInfo) {
    const post = await this.getPostById(id)
    if (post.goblinId != userInfo.id) {
      throw new Forbidden('Not your post!')
    }
    await post.remove()
    return post
  }
  async getPostById(postId) {
    const post = await dbContext.Posts.findById(postId)
      .populate('goblin', "name picture")
    // .populate("upVoter", "name picture")
    // .populate("downVoter", "name picture")
    if (!post) {
      throw new BadRequest('Bad Post Id')
    }
    return post
  }
  async createPost(postData) {
    const post = await dbContext.Posts.create(postData)
    post.populate("goblin", "name picture")
    // post.populate("upVoter", "name picture")
    // post.populate("downVoter", "name picture")
    return post
  }
  async getPosts() {
    const posts = dbContext.Posts.find()
      .populate("goblin", "name picture")
    // .populate("upVoter", "name picture")
    // .populate("downVoter", "name picture")
    return posts
  }
  async editPost(postData, userInfo) {
    const post = await this.getPostById(postData.id)

    if (userInfo.id != post.goblinId) {
      throw new Forbidden('Not your post!')
    }
    post.title = postData.title || post.title
    post.imgUrl = postData.imgUrl || post.imgUrl
    post.location = postData.location || post.location
    post.saucyTag = postData.saucyTag || post.saucyTag
    post.richTag = postData.richTag || post.richTag
    post.nastyTag = postData.nastyTag || post.nastyTag

    await post.save()
    return post
  }

  async getUpVotes(query = {}) {
    const upVotes = await dbContext.PostUpVoters.find(query)
      .populate('post')
      .populate('goblin', 'name picture')
    return upVotes
  }
  async createUpVote(upVoteData) {
    const post = await this.getPostById(upVoteData.postId)
    const upVote = await dbContext.PostUpVoters.create(upVoteData)
    await upVote.populate('post')
    await upVote.populate('goblin', 'name picture')

    return upVote
  }
  async getDownVotes(query = {}) {
    const downVotes = await dbContext.PostDownVoters.find(query)
      .populate('downVoter', 'name picture')
    return downVotes
  }
  async createDownVote(downVoteData) {
    const post = await this.getPostById(downVoteData.postId)
    const downVote = await dbContext.PostDownVoters.create(downVoteData)
    await downVote.populate('post')
    await downVote.populate('goblin', 'name picture')

    return downVote
  }
}
export const postsService = new PostsService()