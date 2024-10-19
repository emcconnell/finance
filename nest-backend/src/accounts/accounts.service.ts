import { Injectable } from '@nestjs/common';
import { Account } from '../src/accounts/account.model';

@Injectable()
export class AccountsService {
  private accounts: Account[] = [];

  getAllAccounts(): Account[] {
    return this.accounts;
  }

  getAccountById(id: string): Account | undefined {
    return this.accounts.find(account => account.id === id);
  }

  createAccount(account: Account): Account {
    this.accounts.push(account);
    return account;
  }

  updateAccount(id: string, updatedAccount: Account): Account | null {
    const accountIndex = this.accounts.findIndex(account => account.id === id);
    if (accountIndex !== -1) {
      this.accounts[accountIndex] = { ...this.accounts[accountIndex], ...updatedAccount };
      return this.accounts[accountIndex];
    }
    return null;
  }

  deleteAccount(id: string): Account | null {
    const accountIndex = this.accounts.findIndex(account => account.id === id);
    if (accountIndex !== -1) {
      const deletedAccount = this.accounts.splice(accountIndex, 1);
      return deletedAccount[0];
    }
    return null;
  }
}
