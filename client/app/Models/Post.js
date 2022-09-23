export class Post {
  constructor(data) {
    this.title = data.title
    this.imgUrl = data.imgUrl
    this.id = data.id
    this.location = data.location
    this.goblinId = data.goblinId
    this.voterId = data.voterId
    this.tags = data.tags
    this.date = data.date
    this.time = data.time
    this.isFavorite = data.isFavorite
  }
  get PostTemplate() {
    return /*html*/ `
    
    `
  }
}
