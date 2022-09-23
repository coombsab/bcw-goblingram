import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
<<<<<<< HEAD
=======
import { CommentSchema } from "../models/Comment.js";
import { GoblinSchema } from '../models/Goblin.js';
>>>>>>> d9fbacd9a1ea5231b59f99aba3d81c988a5bdbaf
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
<<<<<<< HEAD
=======
  Goblins = mongoose.model('Goblin', GoblinSchema);
  Comment = mongoose.model('Comment', CommentSchema)
>>>>>>> d9fbacd9a1ea5231b59f99aba3d81c988a5bdbaf
}
export const dbContext = new DbContext()
