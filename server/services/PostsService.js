import { dbContext } from "../db/DbContext.js"

class PostsService {
  async createPost(postData) {
    const post = await dbContext.Posts.create(postData)
    post.populate("goblin", "name picture")
    post.populate("upVoter", "name picture")
    post.populate("downVoter", "name picture")
    return post
  }
  async getPosts() {
    const posts = dbContext.Posts.find().populate("goblin", "name picture").populate("upVoter", "name picture").populate("downVoter", "name picture")
    return posts
  }
}

export const postsService = new PostsService()