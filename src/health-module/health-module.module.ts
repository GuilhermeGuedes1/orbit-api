import { Module } from '@nestjs/common';
import { HealthModuleController } from './health-module.controller';
import { HealthModuleService } from './health-module.service';

@Module({
  controllers: [HealthModuleController],
  providers: [HealthModuleService],
})
export class HealthModuleModule {}
