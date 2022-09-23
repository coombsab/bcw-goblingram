import { Schema } from 'mongoose';
const ObjectId = Schema.Types.ObjectId


export const CommentSchema = new Schema({

  goblinId: { type: ObjectId, required: true, ref: 'Account' },
  postId: { type: ObjectId, required: true, ref: 'Post' },
  description: { type: String, required: true },
  voterId: { type: ObjectId, required: true, ref: 'Account' }
}, {
  timestamps: true, toJSON: { virtuals: true }
})

CommentSchema.virtual('goblin', {
  localField: 'goblinId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

//FIXME this is causing problems 
// CommentSchema.virtual('postId', {
//   localField: 'postId',
//   foreignField: '_id',
//   justOne: true,
//   ref: 'Post'
// })

CommentSchema.virtual('voter', {
  localField: 'voterId',
  foreignField: '_id',
  justOne: true,
  ref: 'Voter'
})



