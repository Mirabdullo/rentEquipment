import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    UseGuards,
  } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';
  

  @ApiTags("Foydalanuvchilar")
  @Controller('users')
  export class UsersController {
    constructor(private readonly userService: UsersService) {}
  
    @ApiOperation({summary: "Foydalanuvchi qo'shish"})
    @ApiResponse({status: 201, type: User})
      // @UsePipes(ValidationPipe)
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
      return this.userService.createUser(createUserDto);
    }
  


    @ApiOperation({summary: "Foydalanuvchilarni olish"})
    @ApiResponse({status: 200, type: [User]})
    // @Roles('Admin')
    // @UseGuards(RolesGuard)
    // @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
      return this.userService.getAllUsers();
    }


    // @ApiOperation({summary: "Foydalanuvchilarga role berish"})
    // @ApiResponse({status: 201, type: User})
    // @Roles('Admin')
    // @UseGuards(RolesGuard)
    // @Post('role')
    // addRole(@Body() addRoleDto: AddRoleDto) {
    //   return this.userService.addRole(addRoleDto);
    // }


    @ApiOperation({summary: "Id orqali foydalanuvchi ma'lumotlarini olish"})
    @ApiResponse({status: 200, type: User})
    // @UseGuards(UserSelfGuards)
    // @UseGuards(JwtAuthGuard)
    @Get(':id')
    getUserById(@Param('id') id: number){
      return this.userService.getUserById(id)
    }


  
    // @ApiOperation({summary: "Foydalanuvchini faollashtirish"})
    // @ApiResponse({status: 200, type: User})
    // @Post('activate')
    // activateUser(@Body() activateUserDto: ActivateUserDto) {
    //   return this.userService.activateUser(activateUserDto);
    // }

    @ApiOperation({summary: "Foydalanuvchi ma'lumotlarini o'zgartirish"})
    @ApiResponse({status: 200, type: User})
    // @UseGuards(UserSelfGuards)
    // @UseGuards(JwtAuthGuard)
    @Put(':id')
    updateUserById(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto){
      return this.userService.updateUserById(id,updateUserDto)
    }


    @ApiOperation({summary: "Foydalanuvchini o'chirirish"})
    @ApiResponse({status:200, type: User})
    // @UseGuards(UserSelfGuards)
    // @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteUserById(@Param('id') id: number){
      this.userService.deleteUserById(id)
      return "Deleted"
    }
  }