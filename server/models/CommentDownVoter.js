import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId
export const CommentDownVoterSchema = new Schema({
  goblinId: { type: ObjectId, required: true, ref: 'Account' },
  postId: { type: ObjectId, required: true, ref: 'Post' },
},)


CommentDownVoterSchema.virtual('goblin', {
  localField: 'goblinId',
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

CommentDownVoterSchema.index({ goblinId: 1, postId: 1 }, { unique: true })
