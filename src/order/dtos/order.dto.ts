import { IsNotEmpty, IsNumber, IsOptional, Length } from "class-validator";

export class OrderDto {
    @IsNotEmpty({ message: 'The field Fullname should not be emty' })
    @Length(3, 255)
    readonly cltFullName: string;

    @IsNotEmpty({ message: 'The field email should not be emty' })
    @Length(3, 255)
    readonly email: string;

    @IsNotEmpty({ message: 'The field phon number should not be empty' })
    readonly cltPhone: number;


    @IsNotEmpty({ message: 'The filed adress should not be empty' })

    readonly delivryAdressOne: string;
    readonly delivryAdressTwo: string;
    @IsOptional()
    readonly status: number;
    @IsNotEmpty()
    readonly cityId: number;




    updatedAt?: Date;

}




