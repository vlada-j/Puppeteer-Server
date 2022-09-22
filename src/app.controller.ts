import { Controller, Get, Request, Response } from "@nestjs/common";
import { PuppeteerService } from "./puppeteer.service";
import { getUrlFromQuery } from "./utils";


@Controller()
export class AppController {

	constructor(private readonly puppeteer: PuppeteerService) {}


	@Get("screenshot")
	async getScreenshot(@Request() request, @Response() response) {
		const url = getUrlFromQuery(request.query);

		const content = await this.puppeteer.takeScreenshot( url );

		response.writeHead(200, { "Content-Type": "image/jpg" });
		response.end(content, "utf-8");
	}


	@Get("pdf")
	async getPdf(@Request() request, @Response() response) {
		const url = getUrlFromQuery(request.query);

		const content = await this.puppeteer.generatePdf( url );

		response.writeHead(200, { "Content-Type": "application/pdf" });
		response.end(content, "utf-8");
	}

}
