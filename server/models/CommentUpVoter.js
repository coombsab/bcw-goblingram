import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId
export const CommentUpVoterSchema = new Schema({
  goblinId: { type: ObjectId, required: true, ref: 'Account' },
  postId: { type: ObjectId, required: true, ref: 'Post' },
},{ timestamps: true, toJSON: { virtuals: true }})


CommentUpVoterSchema.virtual('goblin', {
  localField: 'goblinId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

CommentUpVoterSchema.virtual('post', {
  localField: 'postId',
  foreignField: '_id',
  justOne: true,
  ref: 'Post'
})

CommentUpVoterSchema.index({ goblinId: 1, postId: 1 }, { unique: true })
