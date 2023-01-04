/* eslint-disable prettier/prettier */
import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
    constructor() {
        super({
            client: {
                clientId: 'notifications', 
                brokers: ['romantic-swine-8913-us1-kafka.upstash.io:9092'],
                sasl: {
                    mechanism: 'scram-sha-256',
                    username: 'cm9tYW50aWMtc3dpbmUtODkxMyQLktB0aatOLziuHU3K72SaXv45t0MUHr_i15Q',
                    password: '90bce11a56074118a8b79e3134f55b89',
                },
                ssl: true,
            }
        });
    }
    
    async onModuleDestroy() {
        await this.close();
    }

}