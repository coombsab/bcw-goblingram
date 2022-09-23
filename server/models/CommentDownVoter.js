import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId
export const CommentDownVoterSchema = new Schema({
  goblinId: { type: ObjectId, required: true, ref: 'Account' },
  postId: { type: ObjectId, required: true, ref: 'Post' },
},)


CommentDownVoterSchema.virtual('downVoter', {
  localField: 'downVoterId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

CommentDownVoterSchema.virtual('post', {
  localField: 'postId',
  foreignField: '_id',
  justOne: true,
  ref: 'Post'
})

CommentDownVoterSchema.index({ downVoterId: 1, postId: 1 }, { unique: true })
