import { Schema } from "mongoose"
const OjbectId = Schema.Types.ObjectId

export const PostSchema = new Schema({
  title: { type: String, required: true, maxlength: 50 },
  imgUrl: { type: String, required: true },
  location: { type: String, default: "unknown", maxlength: 100},
  goblinId: { type: OjbectId, required: true },
  upVoterId: { type: OjbectId },
  downVoterId: { type: OjbectId },
  saucyTag: { type: String, default: "" },
  richTag: { type: String, default: "" },
  nastyTag: { type: String, default: "" }
},
{ timestamps: true, toJSON: {virtuals: true }})


PostSchema.virtual("goblin", {
  localField: "goblinId",
  foreignField: "_id",
  justOne: true,
  ref: "Account"
})

PostSchema.virtual("upVotes", {
  localField: "_id",
  foreignField: "postId",
  count: true,
  ref: "PostUpVoter"
})

PostSchema.virtual("downVotes", {
  localField: "_id",
  foreignField: "postId",
  count: true,
  ref: "PostDownVoter"
})

