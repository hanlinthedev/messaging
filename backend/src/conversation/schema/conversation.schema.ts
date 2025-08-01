import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Mongoose } from 'mongoose';

export type ConversationDocument = HydratedDocument<Conversation>;

@Schema()
export class Conversation {
  @Prop([
    {
      required: true,
      type: new Mongoose().Schema.Types.ObjectId,
      ref: 'User',
    },
  ])
  participants: string[];

  @Prop({ type: new Mongoose().Schema.Types.ObjectId, default: null })
  lastMessage: string;

  @Prop({ type: String, default: null })
  backgroundImage: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export default SchemaFactory.createForClass(Conversation);
