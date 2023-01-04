/* eslint-disable prettier/prettier */
//contrato interface/classes abstratas que determina os métodos que vão existir mas não implementa
import { Notification } from "../entities/notification";

export abstract class NotificationsRepository {
    abstract create(notification: Notification): Promise<void>;
    abstract findById(notificationId: string): Promise<Notification | null>;
    abstract save(notification: Notification): Promise<void>;
    abstract countManyByRecipientId(recipientId: string): Promise<number>;
    abstract findManyByRecipientId(recipientId: string): Promise<Notification[]>;
};

//recebe a notificação e devolve uma promise