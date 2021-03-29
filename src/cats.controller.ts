import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cats') // この部分はURLに含まれる
export class CatsController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): string {
    return this.appService.findAll();
  }
}
