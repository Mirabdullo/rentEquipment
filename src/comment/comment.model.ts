import { ApiProperty } from "@nestjs/swagger"
import { Column, DataType, Table, Model, BelongsToMany, HasMany, BelongsTo, ForeignKey} from "sequelize-typescript"
import { Equipment } from "src/equipment/equipment.model"
import { User } from "src/users/users.model"

interface CommentCreationAttrs {
    equipment_id: string
    user_id: string
    comment: string
    rating: string
}

@Table({tableName: 'comment'})
export class Comment extends Model<Comment, CommentCreationAttrs> {
    @ApiProperty({example: '1', description: "Unikal ID"})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ApiProperty({example: '1', description: "Instrumentning idsi"})
    @ForeignKey(() => Equipment)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    equipment_id: number

    
    @ApiProperty({example: '1', description: "Userning idsi"})
    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    user_id: number

    @ApiProperty({example: 'default.jpeg', description: "Instrument fotosurati"})
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    comment: string

    @ApiProperty({example: '1', description: "Instrumentning bahosi(1-5)"})
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    rating: number



    @Column({
        type: DataType.DATE,
        defaultValue: new Date()
    })
    createdAt: Date

    @BelongsTo(() => User)
    user: User

    @BelongsTo(() => Equipment)
    equipment: Equipment
}