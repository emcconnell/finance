import { mockData } from './mockData';

export class ApiService {
  private accounts = mockData.accounts;
  private recurringTransactions = mockData.recurringTransactions;

  // Accounts CRUD operations
  getAccounts() {
    return this.accounts;
  }

  getAccountById(id: number) {
    return this.accounts.find(account => account.id === id);
  }

  createAccount(account: { id: number; name: string; balance: string }) {
    this.accounts.push(account);
    return account;
  }

  updateAccount(id: number, updatedAccount: { name: string; balance: string }) {
    const accountIndex = this.accounts.findIndex(account => account.id === id);
    if (accountIndex !== -1) {
      this.accounts[accountIndex] = { ...this.accounts[accountIndex], ...updatedAccount };
      return this.accounts[accountIndex];
    }
    return null;
  }

  deleteAccount(id: number) {
    const accountIndex = this.accounts.findIndex(account => account.id === id);
    if (accountIndex !== -1) {
      const deletedAccount = this.accounts.splice(accountIndex, 1);
      return deletedAccount[0];
    }
    return null;
  }

  // Recurring Transactions CRUD operations
  getRecurringTransactions() {
    return this.recurringTransactions;
  }

  getRecurringTransactionById(id: number) {
    return this.recurringTransactions.find(transaction => transaction.id === id);
  }

  createRecurringTransaction(transaction: { id: number; description: string; amount: string; frequency: string }) {
    this.recurringTransactions.push(transaction);
    return transaction;
  }

  updateRecurringTransaction(id: number, updatedTransaction: { description: string; amount: string; frequency: string }) {
    const transactionIndex = this.recurringTransactions.findIndex(transaction => transaction.id === id);
    if (transactionIndex !== -1) {
      this.recurringTransactions[transactionIndex] = { ...this.recurringTransactions[transactionIndex], ...updatedTransaction };
      return this.recurringTransactions[transactionIndex];
    }
    return null;
  }

  deleteRecurringTransaction(id: number) {
    const transactionIndex = this.recurringTransactions.findIndex(transaction => transaction.id === id);
    if (transactionIndex !== -1) {
      const deletedTransaction = this.recurringTransactions.splice(transactionIndex, 1);
      return deletedTransaction[0];
    }
    return null;
  }
}
