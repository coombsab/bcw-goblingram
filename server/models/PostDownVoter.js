import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId
export const PostDownVoterSchema = new Schema({
  goblinId: { type: ObjectId, required: true, ref: 'Account' },
  postId: { type: ObjectId, required: true, ref: 'Post' },
},{ timestamps: true, toJSON: { virtuals: true }})


PostDownVoterSchema.virtual('goblin', {
  localField: 'goblinId',
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

PostDownVoterSchema.index({ goblinId: 1, postId: 1 }, { unique: true })
