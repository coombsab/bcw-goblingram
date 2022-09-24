import { appState } from "../AppState.js"
import { Comment } from "../Models/Comment.js"
import { server } from './AxiosService.js'
class CommentsService {

  async addComment(formData) {
    console.log(formData)
    const res = server.post('gg/api/comments', formData)
    console.log('res', res.data)
    appState.comments = [...appState.comments, new Comment(res.data)]


  }


}

export const commentsService = new CommentsService()