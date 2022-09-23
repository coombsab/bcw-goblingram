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
              <div class="card">
            <div class="card-body d-flex justify-content-between">
              <h4 class="text-center" id="post-title">POST NAME</h4>
              <span id="post-date">DATE/TIME POSTED</span>
              <span id="post-heart" class="fs-3">💖</span>
              <span id="post-upvotes" class="fs-3">⬆️</span><span>20</span>
              <span id="post-downvotes" class="fs-3">⬇️</span><span>500</span>
            </div>
            <img
              src="https://cdn.dribbble.com/users/528238/screenshots/16410846/media/7e5e6c526d24fafcdb96246196846f6d.png?compress=1&resize=400x300&vertical=top"
              alt="" class="img-fluid rounded-top" id="post-image">
            <div class="card-body text-center d-flex justify-content-between">
              <button class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#addCommentModal">Add comment
              </button>
              <button class="btn btn-dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample">View comments
              </button>
            </div>
          </div>
    `
  }
}
