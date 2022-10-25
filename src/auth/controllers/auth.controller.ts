import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';

import { UsuarioLogin } from '../entities/usuariologin.entity';
import { LocalAuthGuard } from '../guard/local-auth.guard';
import { AuthService } from '../services/auth.service';

@Controller('/auth')
export class AuthController{
  constructor(private readonly authService: AuthService){}

  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('/login')
  async login(
    @Body() user: UsuarioLogin
  ): Promise<any>{
    return this.authService.login(user);
  }
}