// REVIEW May not need this service delete if deprecated


import { dbContext } from "../db/DbContext.js"
import { Forbidden } from "../utils/Errors.js"


class GoblinsService {
  async getGobs(query = {}) {
    const gobs = await dbContext.Goblins.find().populate('goblin', 'name picture').populate('replaceme')
    return gobs
  }
  async createGob(formData) {
    const gob = await dbContext.Goblins.create(formData)
    await gob.populate('goblin', 'name picture')
    return gob
  }
  // NOTE Line 18 replace goblinId with whatever is declared on the client side 
  async deleteGob(id, userInfo) {
    const gob = await this.getGobById(id)
    if (gob.goblinId != userInfo.id) {
      throw new Forbidden('Nice try, thats not your gob bubba!')
    }
  }

  // FIXME Implement this after lunch - Sam
  getGobById(id) {
    throw new Error("Method not implemented.")
  }

}

export const goblinsService = new GoblinsService()