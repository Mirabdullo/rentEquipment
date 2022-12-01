import { IsDate, IsNotEmpty, IsNumber } from "class-validator"

export class CreateOrderDto{
    @IsNotEmpty()
    @IsNumber({},{message: "Equipment idsi bo'lishi kerak"})
    readonly equipment_id: number

    @IsNotEmpty()
    @IsNumber({},{message: "User idsi bo'lishi kerak"})
    readonly user_id: number

    @IsNotEmpty()
    @IsDate({message: "Sana kiritilishi kerak"})
    readonly start_date: Date

    @IsNotEmpty()
    @IsDate({message: "Sana kiritilishi kerak"})
    readonly end_date: Date
}