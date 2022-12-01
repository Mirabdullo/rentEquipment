import { ApiProperty } from "@nestjs/swagger"
import { Column, DataType, Table, Model, BelongsToMany} from "sequelize-typescript"
import { Comment } from "src/comment/comment.model"
import { Equipment } from "src/equipment/equipment.model"

interface UserCreationAttrs {
    name: string
    email: string
    password: string
    phone_number: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: "Unikal ID"})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ApiProperty({example: 'User1', description: "Foydalanuvchi ismi"})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string

    @ApiProperty({example: 'user@gmail.com', description: "Foydalanuvchi elektron pochtasi"})
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    email: string

    @ApiProperty({example: '1234', description: "Foydalanuvchi paroli"})
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string

    @ApiProperty({example: '950763191', description: "Foydalanuvchi telefon raqami"})
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    phone_number: string

    @ApiProperty({example: 'true', description: "Foydalanuvchimi admin yoki yo'q"})
    @Column({
        defaultValue: false,
    })
    is_admin: boolean

    @ApiProperty({example: 'true', description: "Active Foydalanuvchimi yoki yo'q"})
    @Column({
        defaultValue: false,
    })
    is_active: boolean

    
}