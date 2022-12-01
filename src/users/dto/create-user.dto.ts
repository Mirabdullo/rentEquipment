import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString({message: "Ism satr bo'lishi kerak"})
    readonly name: string

    @IsNotEmpty()
    @IsEmail({},{message: "Email noto'g'ri"})
    readonly email: string

    @IsNotEmpty()
    @IsString({message: "Parol satr bo'lishi kerak"})
    readonly password: string

    @IsNotEmpty()
    @IsString({message: "Telefon raqam satr bo'lishi kerak"})
    readonly phone_number: string

    @IsString({message: "Adress satr bo'lishi kerak"})
    readonly location: string


}