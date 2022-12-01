import { ApiProperty } from "@nestjs/swagger"
import { Column, DataType, Table, Model, BelongsToMany, BelongsTo, ForeignKey} from "sequelize-typescript"
import { Equipment } from "src/equipment/equipment.model"
import { User } from "src/users/users.model"

interface OrderCreationAttrs {
    equipment_id: number
    user_id: number,
}

@Table({tableName: 'order'})
export class Order extends Model<Order, OrderCreationAttrs> {
    @ApiProperty({example: '1', description: "Unikal ID"})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ApiProperty({example: '2', description: "Instrument idsi"})
    @ForeignKey(() => Equipment)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    equipment_id: number

    @ApiProperty({example: '3', description: "Foydalanuvchi idsi"})
    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    user_id: number

    @ApiProperty({example: '25.03.2023', description: "Kelishuv boshlangan sana"})
    @Column({
        type: DataType.DATE,
        defaultValue: new Date()
    })
    start_date: Date

    @ApiProperty({example: '25.03.2023', description: "Kelishuv boshlangan sana"})
    @Column({
        type: DataType.DATE,
    })
    end_date: Date

    @ApiProperty({example: 'true', description: "Active Foydalanuvchimi yoki yo'q"})
    @Column({
        type: DataType.INTEGER,
    })
    total_price: number

    @BelongsTo(() => User)
    user: User

    @BelongsTo(() => Equipment)
    equipment: Equipment
}