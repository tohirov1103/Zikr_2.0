import { Module } from '@nestjs/common';
import { FinishedPoralarCountService } from './finished-poralar-count.service';
import { FinishedPoralarCountController } from './finished-poralar-count.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [FinishedPoralarCountService,JwtService],
  controllers: [FinishedPoralarCountController],
})
export class FinishedPoralarCountModule {}
