import { Schema } from 'mongoose';
const ObjectId = Schema.Types.ObjectId


export const CommentSchema = new Schema({

  goblinId: { type: ObjectId, required: true, ref: 'Account' },
  postId: { type: ObjectId, required: true, ref: 'Post' },
  description: { type: String, required: true },
  // voterId: { type: ObjectId, ref: 'Account' }
}, {
  timestamps: true, toJSON: { virtuals: true }
})

CommentSchema.virtual('goblin', {
  localField: 'goblinId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

// CommentSchema.virtual('voter', {
//   localField: 'voterId',
//   foreignField: '_id',
//   justOne: true,
//   ref: 'Voter'
// })

CommentSchema.virtual("post", {
  localField: "postId",
  foreignField: "_id",
  justOne: true,
  ref: "Post"
})

