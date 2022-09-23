import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CommentSchema } from "../models/Comment.js";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Comment = mongoose.model('Comment', CommentSchema);
}
export const dbContext = new DbContext()
