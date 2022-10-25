import { Body, Controller, Get, HttpCode, HttpStatus, Post, Put } from '@nestjs/common';

import { Usuario } from '../entities/usuario.entity';
import { UsuarioService } from '../services/usuario.service';

@Controller('/usuarios')
export class UsuarioController{
  constructor(
    private readonly usuarioService: UsuarioService
  ){}
  
  @Get('/all')
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<Usuario[]>{
    return this.usuarioService.findAll();
  }

  @Post('/cadastrar')
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() usuario: Usuario
  ): Promise<Usuario>{
    return this.usuarioService.create(usuario);
  }

  @Put('/atualizar')
  @HttpCode(HttpStatus.OK)
  async update(
    @Body() usuario: Usuario
  ): Promise<Usuario>{
    return this.usuarioService.update(usuario);
  }

}