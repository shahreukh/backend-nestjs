import { prop, Typegoose } from 'typegoose';

export class User extends Typegoose {
  @prop({ required: true })
  id: string;

  @prop({ required: true })
  firstName: string;

  @prop({ required: true })
  lastName: string;

  @prop({ required: true, unique: true })
  email: string;
}

export const UserModel = new User().getModelForClass(User);
