import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class NewKLogInput {
  @Field()
  title: string
}
