import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AccountsController } from '../src/accounts/accounts.controller';
import { RecurringController } from '../src/recurring/recurring.controller';
import { AccountsService } from '../src/accounts/accounts.service';

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
