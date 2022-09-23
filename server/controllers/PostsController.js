import { Auth0Provider } from "@bcwdev/auth0provider"
import { postsService } from "../services/PostsService.js"
import BaseController from "../utils/BaseController.js"

export class PostsController extends BaseController {
  constructor() {
    super("gg/api/posts")
    this.router
      .get("", this.getPosts)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("", this.createPost)
  }

  async getPosts(req, res, next) {
    try {
      const posts = await postsService.getPosts()
      res.send(posts)
    }
    catch(error) {
      next(error)
    }
  }

  async createPost(req, res, next) {
    try {
      req.body.goblinId = req.userInfo.id
      const post = await postsService.createPost(req.body)
      res.send(post)
    }
    catch(error) {
      next(error)
    }
  }
}