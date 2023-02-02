import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class OrderProductDto {
    @IsNotEmpty()
    @IsNumber()
    qte: number;
    @IsNotEmpty()
    @IsNumber()
    productPrice: number;


    @IsNotEmpty()
    @IsString()

    name: string;









    updatedAt?: Date;

}




