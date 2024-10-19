import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AccountsController } from './accounts/accounts.controller';
import { RecurringController } from './recurring/recurring.controller';
import { AccountsService } from './accounts/accounts.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
  ],
  controllers: [AccountsController, RecurringController],
  providers: [AccountsService],
})
export class AppModule {}
