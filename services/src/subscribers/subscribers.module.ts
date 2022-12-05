import { Module } from '@nestjs/common';
import { AddSubscribersController } from './subscribers.controller';
import { SubscriberService } from './subscribers.service';

@Module({
  imports: [],
  controllers: [AddSubscribersController],
  providers: [SubscriberService],
})
export class SubscribersModule {}
