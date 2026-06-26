import { Controller, Get } from '@nestjs/common';
import { HealthModuleService } from './health-module.service';

@Controller('health')
export class HealthModuleController {
  constructor(private readonly healthService: HealthModuleService) {}
  @Get()
  check() {
    return this.healthService.check();
  }
}
