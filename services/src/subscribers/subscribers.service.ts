import { Injectable } from '@nestjs/common';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
import { Subscriber } from './interfaces/subscribers.interface';

@Injectable()
export class SubscriberService {
  // TODO: handle duplicate with existing subscribers' email
  async add(subscriber: Subscriber) {
    const db = getFirestore();
    const collectionRef = db.collection('subscribers');
    await collectionRef.add({
      email: subscriber.email,
      createdAt: Timestamp.now(),
      updatedAt: FieldValue.serverTimestamp(),
    });
  }
}
