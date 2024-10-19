import { Controller, Get, Post, Put, Delete, Param, Body, Res } from '@nestjs/common';
import { RecurringService } from '../src/recurring/recurring.service';
import { RecurringTransaction } from '../src/recurring/recurring.model';
import { Response } from 'express';
import { join } from 'path';

@Controller('recurring')
export class RecurringController {
  constructor(private readonly recurringService: RecurringService) {}

  @Get()
  getAllRecurringTransactions(): RecurringTransaction[] {
    return this.recurringService.getAllRecurringTransactions();
  }

  @Get(':id')
  getRecurringTransactionById(@Param('id') id: string): RecurringTransaction {
    return this.recurringService.getRecurringTransactionById(id);
  }

  @Post()
  createRecurringTransaction(@Body() transaction: RecurringTransaction): RecurringTransaction {
    return this.recurringService.createRecurringTransaction(transaction);
  }

  @Put(':id')
  updateRecurringTransaction(@Param('id') id: string, @Body() transaction: RecurringTransaction): RecurringTransaction {
    return this.recurringService.updateRecurringTransaction(id, transaction);
  }

  @Delete(':id')
  deleteRecurringTransaction(@Param('id') id: string): RecurringTransaction {
    return this.recurringService.deleteRecurringTransaction(id);
  }
}
