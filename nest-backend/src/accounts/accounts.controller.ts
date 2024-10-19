import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
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
    const account = this.accountsService.getAccountById(id);
    if (!account) {
      throw new NotFoundException('Account not found');
    }
    return account;
  }

  @Post()
  createAccount(@Body() account: Account): Account {
    return this.accountsService.createAccount(account);
  }

  @Put(':id')
  updateAccount(@Param('id') id: string, @Body() account: Account): Account {
    const updatedAccount = this.accountsService.updateAccount(id, account);
    if (!updatedAccount) {
      throw new NotFoundException('Account not found');
    }
    return updatedAccount;
  }

  @Delete(':id')
  deleteAccount(@Param('id') id: string): Account {
    const deletedAccount = this.accountsService.deleteAccount(id);
    if (!deletedAccount) {
      throw new NotFoundException('Account not found');
    }
    return deletedAccount;
  }
}
