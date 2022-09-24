import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import { postsService } from "../services/PostsService.js"
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .post('/postupvote', this.createPostUpVote)
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }
  
    async createPostUpVote(req, res, next) {
    try {
      req.body.goblinId = req.userInfo.id
      const upVote = await postsService.createUpVote(req.body)
      res.send(upVote)
    } catch (error) {
      next(error)
    }
  }

  // async getPostUpVotes(req, res, next) {
  //   try {
  //     const creeps = await birdsService.getCreeps({
  //       creeperId: req.userInfo.id
  //     })
  //     res.send(creeps)
  //   } catch (error) {
  //     next(error)
  //   }
  // }
  
  
}
