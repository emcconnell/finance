import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AccountsController } from '../dist/accounts/accounts.controller';
import { RecurringController } from '../dist/recurring/recurring.controller';
import { AccountsService } from '../dist/accounts/accounts.service';

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
