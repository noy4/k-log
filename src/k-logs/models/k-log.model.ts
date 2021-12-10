import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class KLog {
  @Field()
  id: string

  @Field()
  title: string
}
