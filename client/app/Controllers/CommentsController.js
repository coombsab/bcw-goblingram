import { appState } from "../AppState.js"
import { commentsService } from "../Services/CommentsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"

export class CommentsController {
  constructor() {

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
      await commentsService.addComment(formData)
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }
}