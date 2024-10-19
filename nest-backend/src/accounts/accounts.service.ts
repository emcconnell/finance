import { Injectable } from '@nestjs/common';
import { Account } from './account.model';

@Injectable()
export class AccountsService {
  private accounts: Account[] = [];

  getAllAccounts(): Account[] {
    return this.accounts;
  }

  getAccountById(id: string): Account {
    return this.accounts.find(account => account.id === id);
  }

  createAccount(account: Account): Account {
    this.accounts.push(account);
    return account;
  }

  updateAccount(id: string, updatedAccount: Account): Account {
    const accountIndex = this.accounts.findIndex(account => account.id === id);
    if (accountIndex !== -1) {
      this.accounts[accountIndex] = { ...this.accounts[accountIndex], ...updatedAccount };
      return this.accounts[accountIndex];
    }
    return null;
  }

  deleteAccount(id: string): Account {
    const accountIndex = this.accounts.findIndex(account => account.id === id);
    if (accountIndex !== -1) {
      const deletedAccount = this.accounts.splice(accountIndex, 1);
      return deletedAccount[0];
    }
    return null;
  }
}
