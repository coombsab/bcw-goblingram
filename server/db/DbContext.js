import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { GoblinSchema } from '../models/Goblin.js';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Goblins = mongoose.model('Goblin', GoblinSchema)
}

export const dbContext = new DbContext()
