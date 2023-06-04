import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NewsModule } from './news/news.module';
import { BannersModule } from './banners/banners.module';
import { GaleryModule } from './galery/galery.module';
import { VideosModule } from './videos/videos.module';
import { CategoryModule } from './category/category.module';
import { ProgramsModule } from './programs/programs.module';
import { CategoryBannerModule } from './category_banner/category_banner.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
  app.enableCors()

  const options = new DocumentBuilder()
  .setTitle('swagger api documentation')
  .setDescription('The  API description')
  .setVersion('1.0')
  .addTag('Udea')
  .build();
const Document = SwaggerModule.createDocument(app, options, {
  include: [NewsModule,BannersModule,GaleryModule,VideosModule,CategoryModule,ProgramsModule,CategoryBannerModule]
});
SwaggerModule.setup('api', app, Document);
  
  await app.listen(3003);
}
bootstrap();
