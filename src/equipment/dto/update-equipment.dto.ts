import { IsEmail, IsOptional, IsNumber, IsString } from "class-validator";

export class UpdateEquipmentDto {
    @IsOptional()
    @IsString({message: "Nomi satr bo'lishi kerak"})
    readonly name: string

    @IsOptional()
    @IsEmail({},{message: "Narxi raqam bo'lishi kerak"})
    readonly price: number

    @IsOptional()
    @IsString({message: "Instrument rasmi satr bo'lishi kerak"})
    readonly image: string

    @IsOptional()
    @IsNumber({},{message: "Raiting (1-5) oralig'idagi raqam bo'lishi kerak"})
    readonly total_rating: number

    @IsOptional()
    @IsNumber({},{message: "User idsi bo'lishi kerak"})
    readonly user_id: number

    @IsOptional()
    @IsString({message: "Instrument infosi satr bo'lishi kerak"})
    readonly description: string

}