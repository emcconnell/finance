import { Module } from '@nestjs/common';
import { AccountsController } from './accounts/accounts.controller';
import { RecurringController } from './recurring/recurring.controller';

@Module({
  imports: [],
  controllers: [AccountsController, RecurringController],
  providers: [],
})
export class AppModule {}
