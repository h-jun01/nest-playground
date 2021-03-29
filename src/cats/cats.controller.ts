import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('cats') // この部分はURLに含まれる
export class CatsController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): string {
    return this.appService.findAll();
  }

  @Get(':id') // 受け取るパラメーター
  // (@Param('id') id): string{}でも可能
  findOne(@Param() params): string {
    return this.appService.findOne(params.id);
  }
}
