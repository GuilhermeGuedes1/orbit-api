import { Injectable } from '@nestjs/common';

@Injectable()
export class AiService {
  parseEvent() {
    return {
      title: 'Evento beneficiente',
      eventDate: '14/02/1996',
      startTime: '14:00',
      endTime: '02:00',
    };
  }
}
