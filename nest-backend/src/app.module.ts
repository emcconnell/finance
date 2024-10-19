import { Module } from '@nestjs/common';
import { AccountsController } from './accounts/accounts.controller';
import { RecurringController } from './recurring/recurring.controller';
import { AccountsService } from './accounts/accounts.service';

@Module({
  imports: [],
  controllers: [AccountsController, RecurringController],
  providers: [AccountsService],
})
export class AppModule {}
