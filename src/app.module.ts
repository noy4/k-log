import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { KLogsModule } from './k-logs/k-logs.module'
import { PrismaModule } from './prisma/prisma.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      // autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    PrismaModule,
    KLogsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
