import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/prisma/prisma.module'
import { KLogsResolver } from './k-logs.resolver'
import { KLogsService } from './k-logs.service'

@Module({
  imports: [PrismaModule],
  providers: [KLogsResolver, KLogsService],
})
export class KLogsModule {}
