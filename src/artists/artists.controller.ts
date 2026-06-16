import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guards';
import { CurrentUserDto } from '../auth/dtos/user.dto';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

import { ArtistsService } from './artists.service';

@ApiTags('Artists')
@ApiBearerAuth()
@Controller('artists')
@UseGuards(AuthGuard)
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Get()
  findAll(@CurrentUser() user: CurrentUserDto) {
    return this.artistsService.findAll(user);
  }

  @Get('/me/events')
  getEvents(@CurrentUser() user: CurrentUserDto) {
    return this.artistsService.getEvents(user);
  }

  @Get('me')
  me(@CurrentUser() user: CurrentUserDto) {
    return this.artistsService.getMe(user);
  }
}
