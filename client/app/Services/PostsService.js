
import { appState } from "../AppState.js";
import { Post } from "../Models/Post.js";
import { Pop } from "../Utils/Pop.js";
import { server } from "./AxiosService.js"

class PostsService {
  async getPosts() {
    const res = await server.get('gg/api/posts')
    console.log(res.data);
    appState.posts = res.data.map(p => new Post(p))


  }
  async createPost(formData) {
    const res = await server.post('gg/api/posts', formData)
    console.log(res.data)
    appState.posts = [...appState.posts, new Post(res.data)]

  }
  async deletePost(id) {
    const yes = await Pop.confirm('Delete the post?')
    if (!yes) { return }
    await server.delete(`gg/api/posts/${id}`)
    appState.posts = appState.posts.filter(p => p.id != id)
  }


}

export const postsService = new PostsService()