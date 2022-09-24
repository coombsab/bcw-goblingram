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
    this.goblin = data.goblin
  }
  get PostTemplate() {
    return /*html*/ `
          <div class="card col-md-4 col-12">
            <div class="card-header bg-dark text-light">
            <h4 class="text-center" id="post-title">${this.title}</h4>
            <div class="d-flex justify-content-between align-items-center">
              <span id="post-date">${this.location}</span>
              <span id="post-heart" class="fs-3"><img src="${this.goblin.picture}" alt="${this.goblin.name}"  title="${this.goblin.name}"  class="gob-pic"></span>
              <span id="post-upvotes" class="fs-3 selectable">⬆️</span><span>20</span>
              <span id="post-downvotes" class="fs-3 selectable">⬇️</span><span>500</span>
              </div>
            </div>
            <img
              src="${this.imgUrl}"
              alt="" class="img-fluid rounded-top" id="post-image">
            <div class="card-body text-center d-flex justify-content-between">
              <button class="btn btn-secondary text-light" data-bs-toggle="modal" data-bs-target="#addCommentModal" onclick="app.postsController.setActivePost('${this.id}')"
              >Add comment
              </button>
              <button class="btn btn-secondary text-light" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample" onclick="app.commentsController.getComments('${this.id}')">View comments
              </button>
              <button class="btn btn-secondary text-light">Edit</button>
              // <button class="btn btn-danger" onclick="app.postsController.deletePost('${this.id}')">Delete</button>
            </div>
          </div>
    `
  }
}
