import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dtos/register.dto';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() body: RegisterDto) {
    const user = await this.authService.register(body);

    return {
      message: 'User registered successfully',
      user,
    };
  }

  @Post()
  async createUser(@Body() body: CreateUserDto) {
    const user = await this.authService.create(body);
    return {
      message: 'User created successfully',
      user,
    };
  }

  @Post('login')
  login() {
    return {
      message: 'Login successful',
    };
  }
}
