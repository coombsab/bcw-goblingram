
import { appState } from "../AppState.js";
import { Post } from "../Models/Post.js";
import { Pop } from "../Utils/Pop.js";
import { server } from "./AxiosService.js"

class PostsService {
  // TODO Add up vote and add down vote currently give a bad request error, needs worked on
  async addUpVote(postId) {
    const res = await server.post("account/postupvotes")
  }
  async addDownVote(postId) {
    const res = await server.post("account/postdownvotes")
    
  }
  async setActivePost(postId) {
    // @ts-ignore
    appState.activePost = appState.posts.find(p => p.id = postId)

  }
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