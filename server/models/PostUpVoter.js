import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId
export const PostUpVoterSchema = new Schema({
  goblinId: { type: ObjectId, required: true, ref: 'Account' },
  postId: { type: ObjectId, required: true, ref: 'Post' },
}, { timestamps: true, toJSON: { virtuals: true }})

PostUpVoterSchema.virtual('goblin', {
  localField: 'goblinId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

PostUpVoterSchema.virtual('post', {
  localField: 'postId',
  foreignField: '_id',
  justOne: true,
  ref: 'Post'
})

PostUpVoterSchema.index({ goblinId: 1, postId: 1 }, { unique: true })
