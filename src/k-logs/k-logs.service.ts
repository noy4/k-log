import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { KLog, Prisma } from '@prisma/client'

@Injectable()
export class KLogsService {
  constructor(private prisma: PrismaService) {}

  async kLog(id: string): Promise<KLog | null> {
    return this.prisma.kLog.findUnique({ where: { id } })
  }

  async kLogs(): Promise<KLog[]> {
    return this.prisma.kLog.findMany()
  }

  async createKLog(data: Prisma.KLogCreateInput): Promise<KLog> {
    return this.prisma.kLog.create({ data })
  }

  async deleteKLog(id: string): Promise<KLog> {
    return this.prisma.kLog.delete({ where: { id } })
  }
}
