import { ApiProperty } from "@nestjs/swagger"
import { Column, DataType, Table, Model, BelongsToMany, HasMany, ForeignKey} from "sequelize-typescript"
import { Comment } from "src/comment/comment.model"
import { User } from "src/users/users.model"

interface EquipmentCreationAttrs {
    name: string
    email: string
    image: string
    password: string
    phone_number: string
}

@Table({tableName: 'equipment'})
export class Equipment extends Model<Equipment, EquipmentCreationAttrs> {
    @ApiProperty({example: '1', description: "Unikal ID"})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ApiProperty({example: 'Drel', description: "Instrumentning nomi"})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string

    @ApiProperty({example: '50000', description: "Instrumentning kunli narxi"})
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    price: number

    @ApiProperty({example: 'default.jpeg', description: "Instrument fotosurati"})
    @Column({
        type: DataType.STRING,
    })
    image: string

    @ApiProperty({example: '1', description: "Instrumentning bahosi(1-5)"})
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    total_rating: number

    @ApiProperty({example: 'true', description: "User idsi"})
    @Column({
        type:DataType.INTEGER,
        allowNull: false
    })
    user_id: number

    @ApiProperty({example: 'Drel haqida', description: "Drel haqida ma'lumot"})
    @ForeignKey(() => User)
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    description: string


    @ApiProperty({example: 'true', description: "Active Foydalanuvchimi yoki yo'q"})
    @Column({defaultValue: false})
    is_active: boolean

    @HasMany(() => Comment)
    comments: Comment[]

    
}