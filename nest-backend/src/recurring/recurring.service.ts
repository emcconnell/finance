import { Injectable } from '@nestjs/common';
import { RecurringTransaction } from './recurring.model';

@Injectable()
export class RecurringService {
  private recurringTransactions: RecurringTransaction[] = [];

  getAllRecurringTransactions(): RecurringTransaction[] {
    return this.recurringTransactions;
  }

  getRecurringTransactionById(id: string): RecurringTransaction {
    return this.recurringTransactions.find(transaction => transaction.id === id);
  }

  createRecurringTransaction(transaction: RecurringTransaction): RecurringTransaction {
    this.recurringTransactions.push(transaction);
    return transaction;
  }

  updateRecurringTransaction(id: string, updatedTransaction: RecurringTransaction): RecurringTransaction {
    const transactionIndex = this.recurringTransactions.findIndex(transaction => transaction.id === id);
    if (transactionIndex !== -1) {
      this.recurringTransactions[transactionIndex] = { ...this.recurringTransactions[transactionIndex], ...updatedTransaction };
      return this.recurringTransactions[transactionIndex];
    }
    return null;
  }

  deleteRecurringTransaction(id: string): RecurringTransaction {
    const transactionIndex = this.recurringTransactions.findIndex(transaction => transaction.id === id);
    if (transactionIndex !== -1) {
      const deletedTransaction = this.recurringTransactions.splice(transactionIndex, 1);
      return deletedTransaction[0];
    }
    return null;
  }
}
