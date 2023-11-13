import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('say-hello')
    getUsers(): string {
    return this.usersService.getHello();
}
}
