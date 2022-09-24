import { appState } from "../AppState.js"
import { commentsService } from "../Services/CommentsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function _drawComments() {
  let template = ""
  appState.comments.forEach(comment => template += comment.CommentTemplate)
  setHTML("comment-section", template)
}




export class CommentsController {
  constructor() {
    this.getComments()
    appState.on('comments', _drawComments)
  }

  async getComments() {
    try {
      await commentsService.getComments()
    } catch (error) {
      console.error('[getComments]', error)
      Pop.error(error.message)
    }
  }




  async addComment() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      let form = window.event.target
      let formData = getFormData(form)
      // @ts-ignore
      formData.postId = appState.activePost.id
      console.log('comment received', formData)
      await commentsService.addComment(formData)
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }






}