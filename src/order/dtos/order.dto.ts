import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, Length } from "class-validator";

export class OrderDto {
    @IsNotEmpty({ message: 'The field Fullname should not be emty' })
    @Length(4, 45)
    readonly cltFullName: string;

    @IsNotEmpty({ message: 'The field email should not be emty' })
    @IsEmail()
    readonly email: string;

    @IsNotEmpty({ message: 'The field phone number should not be empty' })
    readonly cltPhone: number;


    @IsNotEmpty({ message: 'The filed adress should not be empty' })

    readonly delivryAdressOne: string;
    @IsOptional()

    readonly delivryAdressTwo: string;
    @IsOptional()
    readonly status: number;
    @IsNotEmpty()
    readonly cityId: number;




    updatedAt?: Date;

}




