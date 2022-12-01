import { IsNotEmpty, IsNumber, IsString } from "class-validator"
import { Is } from "sequelize-typescript"

export class CreateCommentDto {
    @IsNotEmpty()
    @IsNumber({},{message: "Equipment id must be number"})
    readonly equipment_id: number

    @IsNotEmpty()
    @IsNumber({},{message: "User id must be number"})
    readonly user_id: number

    @IsString({message: "Must be about of equipment comment"})
    readonly comment: string

    @IsNumber({},{message: "Qurilmani baholash  (1-5) oralig'ida"})
    readonly rating: number

}