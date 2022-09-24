import { appState } from "../AppState.js"
import { Comment } from "../Models/Comment.js"
import { server } from './AxiosService.js'
class CommentsService {

  async addComment(formData) {
    const res = await server.post('gg/api/comments', formData)
    appState.comments = [...appState.comments, new Comment(res.data)]
  }
}

export const commentsService = new CommentsService()