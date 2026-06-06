import { Controller, Post, Body } from '@nestjs/common';

import { AiService } from './ai.service';

@Controller('ai')
export class AiController {
  constructor(private aiService: AiService) {}

  @Post('parse-event')
  sendText() {
    return this.aiService.parseEvent();
  }
}
