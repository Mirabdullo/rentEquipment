import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    UploadedFile,
    UseGuards,
    UseInterceptors,
  } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { Equipment } from './equipment.model';
import { EquipmentService } from './equipment.service';
  

  @ApiTags("Instrumentlar")
  @Controller('equipment')
  export class EquipmentController {
    constructor(private readonly equipmentService: EquipmentService) {}
  
    @ApiOperation({summary: "Maqola qoshish"})
    @ApiResponse({status: 201, type: Equipment})
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    create(@Body() createEquipmentDto: CreateEquipmentDto, @UploadedFile() image) {
        console.log(createEquipmentDto );
        return this.equipmentService.createEquipment(createEquipmentDto,image)
    }
  


    @ApiOperation({summary: "Instrumentlarni olish"})
    @ApiResponse({status: 200, type: [Equipment]})
    // @Roles('Admin')
    // @UseGuards(RolesGuard)
    // @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
      return this.equipmentService.getAllEquipment();
    }


    // @ApiOperation({summary: "Instrumentlarga role berish"})
    // @ApiResponse({status: 201, type: Equipment})
    // @Roles('Admin')
    // @UseGuards(RolesGuard)
    // @Post('role')
    // addRole(@Body() addRoleDto: AddRoleDto) {
    //   return this.equipmentService.addRole(addRoleDto);
    // }


    @ApiOperation({summary: "Id orqali Instrument ma'lumotlarini olish"})
    @ApiResponse({status: 200, type: Equipment})
    // @UseGuards(UserSelfGuards)
    // @UseGuards(JwtAuthGuard)
    @Get(':id')
    getOneUser(@Param('id') id: number){
      return this.equipmentService.getEquipmentById(id)
    }


  
    // @ApiOperation({summary: "Instrumentni faollashtirish"})
    // @ApiResponse({status: 200, type: User})
    // @Post('activate')
    // activateUser(@Body() activateUserDto: ActivateUserDto) {
    //   return this.equipmentService.activateUser(activateUserDto);
    // }

    @ApiOperation({summary: "Instrument ma'lumotlarini o'zgartirish"})
    @ApiResponse({status: 200, type: Equipment})
    // @UseGuards(UserSelfGuards)
    // @UseGuards(JwtAuthGuard)
    @Put(':id')
    updateEquipment(@Param('id') id: number, @Body() updateEquipmentDto: UpdateEquipmentDto){
      return this.equipmentService.updateEquipment(id,updateEquipmentDto)
    }


    @ApiOperation({summary: "Instrumentni o'chirirish"})
    @ApiResponse({status:200, type: Equipment})
    // @UseGuards(EquipmentSelfGuards)
    // @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteEquipment(@Param('id') id: number){
      return this.equipmentService.deleteEquipment(id)
    }
  }