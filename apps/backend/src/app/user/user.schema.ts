import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class HairStyle {
  length: 'short' | 'medium' | 'long';
  texture: 'spiky' | 'flat' | 'curly';
  color: string;
}

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  hairstyle: HairStyle;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
