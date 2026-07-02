import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './strategies/google.strategy';

@Module({
  providers: [AuthService, GoogleStrategy],
  controllers: [AuthController],
  imports: [PassportModule],
})
export class AuthModule {}
