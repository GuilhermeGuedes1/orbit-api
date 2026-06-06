import { Controller, Post, Get, UseGuards, Body, Param } from '@nestjs/common';
import { InvitesService } from './invites.service';
import { AuthGuard } from '../auth/auth.guards';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { CurrentUserDto } from '../auth/dtos/user.dto';
import { CreateInviteDto } from './dtos/create-invite.dto';
import { AcceptInviteDto } from './dtos/accept-invite.dto';

@Controller('invites')
export class InvitesController {
  constructor(private readonly invitesService: InvitesService) {}

  @UseGuards(AuthGuard)
  @Post()
  createInvite(
    @CurrentUser() user: CurrentUserDto,
    @Body() body: CreateInviteDto,
  ) {
    return this.invitesService.createInvite(user, body);
  }

  @Get(':token')
  findByToken(@Param('token') token: string) {
    return this.invitesService.findByToken(token);
  }

  @Post(':token/accept')
  acceptInvite(@Param('token') token: string, @Body() body: AcceptInviteDto) {
    return this.invitesService.accept(token, body);
  }
}
