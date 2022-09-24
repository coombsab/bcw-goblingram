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
          <div class="card col-md-4 col-12">
          
            <div class="card-header ">
            <h4 class="text-center" id="post-title">${this.title}</h4>
            <div class="d-flex justify-content-between">
              <span id="post-date">${this.location}</span>
              <span id="post-heart" class="fs-3">💖</span>
              <span id="post-upvotes" class="fs-3">⬆️</span><span>20</span>
              <span id="post-downvotes" class="fs-3">⬇️</span><span>500</span>
              </div>
            </div>
            <img
              src="${this.imgUrl}"
              alt="" class="img-fluid rounded-top" id="post-image">
            <div class="card-body text-center d-flex justify-content-between">
              <button class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#addCommentModal" onclick="app.postsController.setActivePost('${this.id}')"
              >Add comment
              </button>
              <button class="btn btn-dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample">View comments
              </button>
              <button class="btn btn-dark">Edit</button>
              // <button class="btn btn-danger" onclick="app.postsController.deletePost('${this.id}')">Delete</button>
            </div>
          </div>
    `
  }
}
