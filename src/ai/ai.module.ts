import { Module } from '@nestjs/common';
import { AiController } from './ai.controller';
import { AiService } from './ai.service';
import OpenAI from 'openai';

@Module({
  controllers: [AiController],
  providers: [
    AiService,
    {
      provide: OpenAI,
      useFactory: () => {
        return new OpenAI({
          apiKey: process.env.OPEN_API_KEY,
        });
      },
    },
  ],
})
export class AiModule {}
