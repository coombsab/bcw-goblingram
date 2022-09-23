export class Comment {
  constructor(data) {
    this.goblinId = data.goblinId
    this.postId = data.postId
    this.description = data.description
    this.id = data.id
    this.voterId = data.id

    this.date = data.id
    this.time = data.id


  }

  get CommentTemplate() {
    return /*html*/ `
                  <div class="card">
                <div class="card-header d-flex justify-content-between">
                  <span id="comment-date">DATE/TIME POSTED</span>
                  <span id="comment-heart">💖</span>
                </div>
                <!-- <div class="card-body d-flex justify-content-between">
                <h4 class="text-center">POST NAME</h4>
              </div> -->
                <div class="card-body d-flex justify-content-between">
                  <p id="comment-content">hello this is a comment about how awesome goblins are. they are green and
                    little
                    and so cute!!!</p>
                </div>
                <div class="card-footer d-flex justify-content-between">
                  <span>⬆️<span id="comment-upvotes">200</span></span>
                  <span>⬇️<span id="comment-downvotes">200</span></span>
                </div>
              </div>
    `
  }
}