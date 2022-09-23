import { Schema } from "mongoose";

export const GoblinSchema = new Schema({
  name: { type: String, default: '', maxLength: 20, required: true },
  img: { type: String, required: true },
  location: { type: String, required: true, default: 'World of Warcraft' },
  goblinId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
}, {
  timestamps: true, toJSON: { virtuals: true }
})


// FIXME Line 15 replace this with what we're actually using don't think were at that point yet - Sam
GoblinSchema.virtual('goblin', {
  localField: 'goblinId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})


// FIXME Line 25 replace placeholder with commenter ref I think? - Sam
GoblinSchema.virtual('gobGoblin', {
  localField: '_id',
  foreignField: 'goblinId',
  count: true,
  ref: 'placeholder'
})