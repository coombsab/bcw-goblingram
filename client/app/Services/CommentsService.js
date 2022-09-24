import { appState } from "../AppState.js"
import { Comment } from "../Models/Comment.js"
import { server } from './AxiosService.js'
class CommentsService {

  async addComment(formData) {
    const res = await server.post('gg/api/comments', formData)
    appState.comments = [...appState.comments, new Comment(res.data)]
  }


  async getComments() {
    const res = await server.get('gg/api/comments')
    console.log(res.data);
    appState.comments = res.data.map(c => new Comment(c))
  }
}

export const commentsService = new CommentsService()