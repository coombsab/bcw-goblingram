import { Server } from "socket.io"
import { appState } from "../AppState.js";
import { Post } from "../Models/Post.js";
import { server } from "./AxiosService.js"

class PostsService {
  async getPosts() {
    const res = await server.get('api/gg/posts')
    console.log(res.data);
    appState.posts = res.data.map(p => new Post(p))


  }
  async createPosts(formData) {
    const res = await server.post('api/gg/posts', formData)
    console.log(res.data)
    appState.posts = [...appState.posts, new Post(res.data)]

  }



}

export const postsService = new PostsService()