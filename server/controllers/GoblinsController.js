import { Auth0Provider } from '@bcwdev/auth0provider'
import BaseController from "../utils/BaseController.js";
import { goblinsService } from "../services/GoblinsService.js";


export class GoblinsController extends BaseController {
  constructor() {
    super('api/goblins')
    this.router
      .get('', this.get)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .delete('/:id', this.delete)
  }


  async get(req, res, next) {
    try {
      const goblins = await goblinsService.getGobs()
      res.send(goblins)
    } catch (error) {
      next(error)
    }
  }


  async create(req, res, next) {
    try {
      const goblin = await goblinsService.createGob(req.body)
      res.send(goblin)
    } catch (error) {
      next(error)
    }
  }



  // NOTE Line 41 req.userInfo might be the wrong convention idk lol - Sam
  async delete(req, res, next) {
    try {
      const deletedGob = await goblinsService.deleteGob(req.params.id, req.userInfo)
      res.send(deletedGob)
    } catch (error) {
      next(error)
    }
  }
}