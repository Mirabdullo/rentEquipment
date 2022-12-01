import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { where } from 'sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User){}

    async createUser(createUserDto: CreateUserDto){
        const newUser = await this.userRepository.create(createUserDto)
        return newUser
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll()
        return users
    }

    async getUserById(id: number){
        const user = await this.userRepository.findByPk(id)
        if(!user){
            throw new HttpException("User topilmadi",
            HttpStatus.NOT_FOUND)
        }

        return user
    }

    async updateUserById(id: number, updateUserDto: UpdateUserDto){
        const user = await this.userRepository.findByPk(id)
        if(!user){
            throw new HttpException("user topilmadi", HttpStatus.NOT_FOUND)
        }

        return this.userRepository.update(updateUserDto,{where: {id}, returning: true})
    }

    async deleteUserById(id: number){
        try {
            const user = await this.userRepository.findByPk(id)
            if(!user){
                throw new HttpException("User topilmadi", HttpStatus.NOT_FOUND)
            }

            await this.userRepository.destroy({where:{id}})
            return "Ma'lumot o'chirildi"
        } catch (error) {
            console.log(error);
            throw new HttpException("Serverda xatolik", HttpStatus.FORBIDDEN)
        }
    }

}
