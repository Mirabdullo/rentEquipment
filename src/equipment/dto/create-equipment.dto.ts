import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateEquipmentDto {
    @IsNotEmpty()
    @IsString({message: "Nomi satr bo'lishi kerak"})
    readonly name: string

    @IsNotEmpty()
    @IsEmail({},{message: "Narxi raqam bo'lishi kerak"})
    readonly price: number

    @IsNotEmpty()
    @IsString({message: "Instrument rasmi satr bo'lishi kerak"})
    readonly image: string

    @IsNotEmpty()
    @IsNumber({},{message: "Raiting (1-5) oralig'idagi raqam bo'lishi kerak"})
    readonly total_rating: number

    @IsNotEmpty()
    @IsNumber({},{message: "User idsi bo'lishi kerak"})
    readonly user_id: string

    @IsNotEmpty()
    @IsString({message: "Instrument infosi satr bo'lishi kerak"})
    readonly description: string

}