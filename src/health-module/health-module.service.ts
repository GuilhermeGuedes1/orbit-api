import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthModuleService {
  check() {
    return {
      status: 'ok',
      service: 'rewindj-api',
      environment: process.env.NODE_ENV ?? 'development',
      timestamp: new Date().toISOString(),
    };
  }
}
