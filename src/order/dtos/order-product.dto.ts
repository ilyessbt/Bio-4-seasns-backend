import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString, Length } from "class-validator";

export class OrderProductDto {
    @IsNotEmpty({ message: 'The field Fullname should not be empty' })
    @IsNumber()
    qte: number;
    @IsNotEmpty({ message: 'The field email should not be empty' })
    @IsNumber()
    productPrice: number;


    @IsNotEmpty({ message: 'The field phone number should not be empty' })
    @IsString()

    name: string;
    @IsNumber()
    // don't work

    orderId: number;
    @IsNumber()
    // don't work
    productIdProduct: number;








    updatedAt?: Date;

}




