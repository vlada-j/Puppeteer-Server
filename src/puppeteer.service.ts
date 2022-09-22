import { Injectable } from "@nestjs/common";
import puppeteer, { PDFOptions } from "puppeteer";

@Injectable()
export class PuppeteerService {

	private pdfSettings: PDFOptions = {
		format: 'a4',
		margin: {
			bottom: 0,
			left: 0,
			right: 0,
			top: 0,
		},
	};


	async takeScreenshot(url:string): Promise<any> {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.goto(url, { waitUntil: "domcontentloaded" });
		const fileBuffer = await page.screenshot();

		await browser.close();
		return fileBuffer;
	}


	async generatePdf(url:string): Promise<any> {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.goto(url, { waitUntil: "domcontentloaded" });

		const fileBuffer = await page.pdf( this.pdfSettings );

		await browser.close();
		return fileBuffer;
	}
}
