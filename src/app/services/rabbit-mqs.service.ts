import { Injectable } from '@angular/core';
import * as amqp from 'amqplib';
import { Message } from '../RabbitMQ/message';
import { Env } from '../infrastructure/env';
import { IProducer } from '../RabbitMQ/producer.interface';
import { Vaticinio } from './../models/vaticinio';

@Injectable({
  providedIn: 'root'
})
export class RabbitMQSService implements IProducer {


  produce<T extends Message>(queue: string, message: T): void {
    throw new Error('Method not implemented.');
  }


  /* produce<T extends Vaticinio>(queue: string, message: T): void {
      console.log("Conexion realizada");
        amqp.connect(Env.messageBrokerAddress)
            .then(connection => {
                connection.createChannel()
                    .then(c => {
                        message.createDate = new Date();
                        const json = JSON.stringify(message);
                        c.assertQueue(queue);
                        c.sendToQueue(queue, new Buffer(json));
                    })
            })
    }*/
}
