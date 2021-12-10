import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { NewKLogInput } from './dto/k-logs.input'
import { KLogsService } from './k-logs.service'
import { KLog } from './models/k-log.model'

@Resolver(() => KLog)
export class KLogsResolver {
  constructor(private readonly kLogsService: KLogsService) {}

  @Query(() => [KLog])
  async kLogs() {
    return this.kLogsService.kLogs()
  }

  @Query(() => KLog)
  async kLog(@Args('id') id: string): Promise<KLog> {
    return this.kLogsService.kLog(id)
  }

  @Mutation(() => KLog)
  async create(@Args('newKLogData') newKLogData: NewKLogInput) {
    return this.kLogsService.createKLog(newKLogData)
  }

  @Mutation(() => KLog)
  async delete(@Args('id') id: string) {
    return this.kLogsService.deleteKLog(id)
  }
}
