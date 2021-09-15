import { ObjectType, Field, InputType } from '@nestjs/graphql';

@ObjectType('HairStyleType')
@InputType('HairStyleInputType')
class HairStyle {
  @Field()
  length: 'short' | 'medium' | 'long';

  @Field()
  texture: 'spiky' | 'flat' | 'curly';

  @Field()
  color: string;
}

@ObjectType('UserType')
@InputType('UserInputType')
export class UserType {
  @Field()
  name: string;

  @Field()
  age: number;

  @Field()
  hairstyle: HairStyle;
}
