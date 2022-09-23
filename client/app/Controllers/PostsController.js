import { appState } from "../AppState.js"
import { postsService } from "../Services/PostsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function _drawPosts() {
  let template = ""
  appState.posts.forEach(post => template += post.PostTemplate)
  setHTML("posts", template)
}

export class PostsController {
  constructor() {
    
  }

  async getPosts() {
    try {
      await postsService.getPosts()
    }
    catch(error) {
      console.error('[functionName]', error)
      Pop.error(error.message)
    }
  }
}