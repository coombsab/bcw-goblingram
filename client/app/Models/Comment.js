export class Comment {
  constructor(data) {
    this.goblinId = data.goblinId
    this.postId = data.postId
    this.description = data.description
    this.id = data.id
    this.date = new Date(data.createdAt)
    this.goblin = data.goblin
  }

  get CommentTemplate() {
    return /*html*/ `
                  <div class="card">
                <div class="card-header d-flex justify-content-between">
                  <span id="comment-date">Created: ${this.date.toLocaleDateString() + " " + this.date.toLocaleTimeString()}</span>
                  <span id="comment-heart" ><img src="${this.goblin.picture}" alt="${this.goblin.name}"  title="${this.goblin.name}"  class="gob-pic"></span>
                </div>
                <!-- <div class="card-body d-flex justify-content-between">
                <h4 class="text-center">POST NAME</h4>
              </div> -->
                <div class="card-body d-flex justify-content-between">
                  <p id="comment-content">${this.description}</p>
                </div>
                <div class="card-footer d-flex justify-content-between">
                  <span>⬆️<span id="comment-upvotes">200</span></span>
                  <span>⬇️<span id="comment-downvotes">200</span></span>
                </div>
              </div>
    `
  }
}