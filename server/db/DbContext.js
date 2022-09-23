import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CommentSchema } from "../models/Comment.js";
import { CommentDownVoterSchema } from "../models/CommentDownVoter.js";
import { CommentUpVoterSchema } from "../models/CommentUpVoter.js";
import { PostSchema } from "../models/Post.js";
import { PostDownVoterSchema } from "../models/PostDownVoter.js";
import { PostUpVoterSchema } from "../models/PostUpVoter.js";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Comments = mongoose.model('Comment', CommentSchema);
  Posts = mongoose.model('Post', PostSchema);
  CommentDownVoters = mongoose.model('CommentDownVoter', CommentDownVoterSchema);
  CommentUpVoters = mongoose.model('CommentUpVoer', CommentUpVoterSchema);
  PostDownVoters = mongoose.model('PostDownVoter', PostDownVoterSchema);
  PostUpVoters = mongoose.model('PostUpVoter', PostUpVoterSchema);
  

}
export const dbContext = new DbContext()
