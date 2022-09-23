import bootstrap from "bootstrap"
import { appState } from "../AppState.js"
import { postsService } from "../Services/PostsService.js"
import { getFormData } from "../Utils/FormHandler.js"
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
    catch (error) {
      console.error('[functionName]', error)
      Pop.error(error.message)
    }
  }

  async createPosts() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      const formData = getFormData(form)
      await postsService.createPosts(formData)
      // @ts-ignore
      form.reset()
      const modal = bootstrap.Modal.getOrCreateInstance('addPostModal')
      modal.hide()
    } catch (error) {
      Pop.error(error.message)
    }
  }

  //TODO edit and delete 
  async deletePost(id) {
    try {
      await postsService.deletePost(id)
    } catch (error) {
      console.error('[DeletingPost]', error)
      Pop.error(error)
    }


  }



}

