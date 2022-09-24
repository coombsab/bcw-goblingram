import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import { postsService } from "../services/PostsService.js"
import BaseController from '../utils/BaseController'
import { logger } from "../utils/Logger.js"

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .post('/postupvotes', this.createPostUpVote)
      .get('/postupvotes', this.getPostUpVotes)
      .post('/postdownvotes', this.createPostDownVote)
      .get('/postdownvotes', this.getPostDownVotes)
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

  async getPostUpVotes(req, res, next) {
    try {
      const upVotes = await postsService.getUpVotes({
        goblinId: req.userInfo.id
      })
      res.send(upVotes)
    } catch (error) {
      next(error)
    }
  }
  
  async createPostDownVote(req, res, next) {
    try {
      req.body.goblinId = req.userInfo.id
      const downVote = await postsService.createDownVote(req.body)
      res.send(downVote)
    } catch (error) {
      next(error)
    }
  }

  async getPostDownVotes(req, res, next) {
    try {
      const downVotes = await postsService.getDownVotes({
        goblinId: req.userInfo.id
      })
      res.send(downVotes)
    } catch (error) {
      next(error)
    }
  }
  
}
