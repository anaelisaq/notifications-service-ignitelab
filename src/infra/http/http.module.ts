/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { NotificationsController } from "./controllers/notifications.controller";
import { SendNotification } from "@app/use-cases/send-notification";
import { CountRecipientNotifications } from "@app/use-cases/count-recipient-notifications";
import { CancelNotification } from "@app/use-cases/cancel-notification";
import { ReadNotification } from "@app/use-cases/read-notification";
import { UnreadNotification } from "@app/use-cases/unread-notification";
import { GetRecipientNotifications } from "@app/use-cases/get-recipient-notifications";

@Module({
    imports: [DatabaseModule],
    controllers: [NotificationsController],
    providers: [
        SendNotification,
        ReadNotification,
        UnreadNotification,
        CancelNotification,
        CountRecipientNotifications,
        GetRecipientNotifications,
    ]
})

export class HttpModule {}