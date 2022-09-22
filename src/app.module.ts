import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { PuppeteerService } from "./puppeteer.service";

@Module({
	imports: [],
	controllers: [AppController],
	providers: [PuppeteerService],
})
export class AppModule {}
