import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FilesModule } from 'src/files/files.module';
import { EquipmentController } from './equipment.controller';
import { Equipment } from './equipment.model';
import { EquipmentService } from './equipment.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Equipment]),
    FilesModule
  ],
  controllers: [EquipmentController],
  providers: [EquipmentService],
  exports: [EquipmentService]
})
export class EquipmentModule {}
