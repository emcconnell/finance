import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, Res } from '@nestjs/common';
import { AccountsService } from '../dist/accounts/accounts.service';
import { Account } from '../dist/accounts/account.model';
import { Response } from 'express';
import { join } from 'path';

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

  @Get('/')
  serveIndex(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', '..', 'client', 'index.html'));
  }
}
