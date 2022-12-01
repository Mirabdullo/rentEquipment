import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function start() {
  try {
    const PORT = process.env.PORT;

    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());

    const config = new DocumentBuilder()
      .setTitle('RentEquipment')
      .setDescription('Rest Api')
      .setVersion('1.0.0')
      .addTag('NodeJs, NestJs, Postgres, Sequalize')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs/rentEquipment', app, document);

    await app.listen(PORT, () => {
      console.log(`Server ${PORT}- portda ishga tushdi`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
