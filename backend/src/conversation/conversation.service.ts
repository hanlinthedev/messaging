import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';
import {
  Conversation,
  ConversationDocument,
} from './schema/conversation.schema';

@Injectable()
export class ConversationService {
  constructor(
    @InjectModel(Conversation.name)
    private readonly conversationModel: Model<ConversationDocument>,
  ) {}

  create(createConversationDto: CreateConversationDto, userId: string) {
    return this.conversationModel.create({
      participants: [createConversationDto.participants, userId],
    });
  }

  findAllByUserId(userId: string) {
    return this.conversationModel
      .find({
        participants: { $in: [userId] },
      })
      .populate('participants', '_id name email avatar')
      .exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} conversation`;
  }

  update(id: number, updateConversationDto: UpdateConversationDto) {
    return `This action updates a #${id} conversation`;
  }

  remove(id: number) {
    return `This action removes a #${id} conversation`;
  }
}
