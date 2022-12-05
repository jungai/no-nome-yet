import { Body, Controller, Post } from '@nestjs/common';

import { AddSubscriberDto } from './dto/subscribers.dto';
import { SubscriberService } from './subscribers.service';

@Controller('subscribers')
export class AddSubscribersController {
  constructor(private readonly subscriberService: SubscriberService) {}
  @Post('add')
  async addSubscribers(
    @Body() addSubscriberDto: AddSubscriberDto,
  ): Promise<{ isSuccessful: boolean; email: string }> {
    try {
      await this.subscriberService.add(addSubscriberDto);
      return { isSuccessful: true, email: addSubscriberDto.email };
    } catch (error) {
      console.log(error);
      return { isSuccessful: false, email: addSubscriberDto.email };
    }
  }
}
