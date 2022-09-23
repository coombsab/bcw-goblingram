import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId
export const PostDownVoterSchema = new Schema({
  goblinId: { type: ObjectId, required: true, ref: 'Account' },
  postId: { type: ObjectId, required: true, ref: 'Post' },
},)


PostDownVoterSchema.virtual('downVoter', {
  localField: 'downVoterId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

PostDownVoterSchema.virtual('post', {
  localField: 'postId',
  foreignField: '_id',
  justOne: true,
  ref: 'Post'
})

PostDownVoterSchema.index({ downVoterId: 1, postId: 1 }, { unique: true })
