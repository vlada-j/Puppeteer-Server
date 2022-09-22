import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const PORT = 3000;

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	await app.listen(PORT);
}
bootstrap().then(() => {
	console.log(`Server is running on: http://localhost:${PORT}/`);
});
