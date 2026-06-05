import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { OrganizationModule } from './organization/organization.module';
import { InvitesModule } from './invites/invites.module';

@Module({
  imports: [AuthModule, PrismaModule, OrganizationModule, InvitesModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
