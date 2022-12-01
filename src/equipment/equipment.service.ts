import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { Equipment } from './equipment.model';

@Injectable()
export class EquipmentService {
  constructor(
    @InjectModel(Equipment) private equipmentRepository: typeof Equipment,
    private readonly fileService: FilesService
  ) {}


  async createEquipment(createEquipmentDto: CreateEquipmentDto, image: any) {
    try {
        const fileName = await this.fileService.createFile(image)
        const equipment = await this.equipmentRepository.create({
            ...createEquipmentDto,
            image: fileName
        })
        console.log(fileName);
        return equipment
    } catch (error) {
        console.log(error);
        throw new HttpException('Serverda xatolik', HttpStatus.FORBIDDEN);
    }
}

  async getAllEquipment() {
    try {
      const equipments = await this.equipmentRepository.findAll();
      return equipments;
    } catch (error) {
      console.log(error);
      throw new HttpException('Serverda xatolik', HttpStatus.FORBIDDEN);
    }
  }

  async getEquipmentById(id: number) {
    try {
      const equipment = await this.equipmentRepository.findByPk(id);
      if (!equipment) {
        throw new HttpException('Instrument topilmadi', HttpStatus.NOT_FOUND);
      }
      return equipment;
    } catch (error) {
      console.log(error);
      throw new HttpException('Serverda xatolik', HttpStatus.FORBIDDEN);
    }
  }

  async updateEquipment(id: number, updateEquipmentDto: UpdateEquipmentDto) {
    try {
      const equipment = await this.equipmentRepository.findByPk(id);
      if (!equipment) {
        throw new HttpException('Instrument topilmadi', HttpStatus.NOT_FOUND);
      }

      return this.equipmentRepository.update(updateEquipmentDto, {
        where: { id },
        returning: true,
      });
    } catch (error) {
      console.log(error);
      throw new HttpException('Serverda xatolik', HttpStatus.FORBIDDEN);
    }
  }

  async deleteEquipment(id: number) {
    try {
        const equipment = await this.equipmentRepository.findByPk(id)
        if (!equipment) {
            throw new HttpException('Instrument topilmadi', HttpStatus.NOT_FOUND);
        }
        await this.equipmentRepository.destroy({where: {id}})
        return equipment
    } catch (error) {
      console.log(error);
      throw new HttpException('Serverda xatolik', HttpStatus.FORBIDDEN);
    }
  }
}
