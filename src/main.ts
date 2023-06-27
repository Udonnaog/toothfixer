import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
//Let's make it a NestExpressApplication
import { NestExpressApplication } from '@nestjs/platform-express';
//We need join to synthesize the directory path which will contain templates
//We need nunjucks as render engine
import * as nunjucks from 'nunjucks';
async function bootstrap() {
//create a Nest application with Express under the hood
const app = await NestFactory.create<NestExpressApplication>(
AppModule,
);
/*To associate nunjucks with express,
we need to get the underlying express platform from Nest
app */
const express = app.getHttpAdapter().getInstance();
/*We also need to get directory name views (create it in
project root directory),
which is the root directory for our template files*/
const cors = require('cors')
const views = join(__dirname, '..', 'views');
/*Finally, configure nunjucks, setting views and express
declared above*/
nunjucks.configure(views, { express });
app.use(cors())
//start the application
const staticAssets = join(__dirname, '..', 'static');
app.useStaticAssets(staticAssets);

const build = join(__dirname, '..', 'build');
await app.listen(5000);
}
bootstrap()