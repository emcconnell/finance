import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { Account } from './account.model';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  getAllAccounts(): Account[] {
    return this.accountsService.getAllAccounts();
  }

  @Get(':id')
  getAccountById(@Param('id') id: string): Account {
    return this.accountsService.getAccountById(id);
  }

  @Post()
  createAccount(@Body() account: Account): Account {
    return this.accountsService.createAccount(account);
  }

  @Put(':id')
  updateAccount(@Param('id') id: string, @Body() account: Account): Account {
    return this.accountsService.updateAccount(id, account);
  }

  @Delete(':id')
  deleteAccount(@Param('id') id: string): Account {
    return this.accountsService.deleteAccount(id);
  }
}
