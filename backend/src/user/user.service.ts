import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.userModel.findOneAndUpdate(
      {
        email: createUserDto.email,
      },
      {
        ...createUserDto,
      },
      {
        upsert: true, // Create a new document if no match is found
        new: true, // Return the modified document
      },
    );
  }

  findByUserName(username: string) {
    return this.userModel
      .findOne({ name: { $regex: new RegExp(username, 'i') } })
      .select('_id name email avatar')
      .exec();
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return this.userModel.findById(id).select('_id name email avatar').exec();
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
