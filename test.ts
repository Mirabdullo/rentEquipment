// import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/sequelize';
// import { RolesService } from 'src/roles/roles.service';
// import { ActivateUserDto } from './dto/activate-user.dto';
// import { AddRoleDto } from './dto/add-role.dto';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
// import { User } from './users.model';

// @Injectable()
// export class UsersService {
//   constructor(
//     @InjectModel(User) private userRepository: typeof User,
//     private readonly roleService: RolesService,
//   ) {}
//   async createUser(createUserDto: CreateUserDto) {
//     const newUser = await this.userRepository.create(createUserDto);
//     const role = await this.roleService.getRoleByValue('Admin');
//     // const role = await this.roleService.getRoleByValue('User');
//     await newUser.$set('roles', [role.id]);
//     newUser.roles = [role];
//     return newUser;
//   }

//   async getAllUsers() {
//     const users = await this.userRepository.findAll({ include: { all: true } });
//     return users;
//   }

//   async getUserByEmail(email: string) {
//     const user = await this.userRepository.findOne({
//       where: { email },
//       include: { all: true },
//     });
//     return user;
//   }

//   async addRole(addRoleDto: AddRoleDto) {
//     const user = await this.userRepository.findByPk(addRoleDto.userId);
//     const role = await this.roleService.getRoleByValue(addRoleDto.value);

//     if (role && user) {
//       await user.$add('role', role.id);
//       return addRoleDto;
//     }
//     throw new HttpException(
//       'Foydalanuvchi yoki rol topilmadi',
//       HttpStatus.NOT_FOUND,
//     );
//   }
//   async activateUser(activateUserDto: ActivateUserDto) {
//     const user = await this.userRepository.findByPk(activateUserDto.userId);
//     if (!user) {
//       throw new HttpException('Foydalanuvchi topilmadi', HttpStatus.NOT_FOUND);
//     }
//     user.is_active = true;
//     await user.save();
//     return user;
//   }

//   async getOneUser(id: number) {
//     const user= await this.userRepository.findOne({where: {id},include: {all: true}})
//     return user
//   }


//   async updateUserById(id: number, updateUserDto: UpdateUserDto) {
//     console.log(id);
//     const user = await this.userRepository.findByPk(id);
//     console.log(user);
//     if (!user) {
//       throw new HttpException('Foydalanuvchi topilmadi', HttpStatus.NOT_FOUND);
//     }
    
//     return this.userRepository.update(updateUserDto,{where: {id},returning: true});

//   }

//   async deleteUserById(id: number) {
//     const user = await this.userRepository.findByPk(id);
//     if (!user) {
//       throw new HttpException("Id noto'g'ri", HttpStatus.NOT_FOUND);
//     }
//     await this.userRepository.destroy({ where: { id: id } });
//     return "Ma'lumotlar o'chirildi";
//   }
// }
