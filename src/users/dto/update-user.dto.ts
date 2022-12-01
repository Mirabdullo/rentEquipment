import { IsBoolean, IsEmail, IsOptional, IsString } from "class-validator";

export class UpdateUserDto {
    @IsOptional()
    @IsString({message: "Ism satr bo'lishi kerak"})
    readonly name: string

    @IsOptional()
    @IsEmail({},{message: "Email noto'g'ri"})
    readonly email: string

    @IsOptional()
    @IsString({message: "Parol satr bo'lishi kerak"})
    readonly password: string

    @IsOptional()
    @IsString({message: "Parol satr bo'lishi kerak"})
    readonly phone_number: string

    @IsString({message: "Adress satr bo'lishi kerak"})
    readonly location: string


}