import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString, Length } from "class-validator";
import { ProductPostEntity } from "src/products/models/product.entity";
import { OrderProductEntity } from "../models/order-product.entity";
import { OrderProductDto } from "./order-product.dto";

export class OrderDto {
    @IsNotEmpty({ message: 'The field Fullname should not be empty' })
    @Length(4, 45)
    @IsString()
    readonly cltFullName: string;

    @IsNotEmpty({ message: 'The field email should not be empty' })
    @IsEmail()
    readonly email: string;

    @IsNotEmpty({ message: 'The field phone number should not be empty' })
    @IsNumber()
    readonly cltPhone: number;


    @IsNotEmpty({ message: 'The filed adress should not be empty' })
    @IsString()

    readonly delivryAdressOne: string;
    @IsOptional()
    @IsString()

    readonly delivryAdressTwo: string;
    @IsOptional()
    @IsNumber()

    readonly status: number;
    @IsNotEmpty()
    @IsNumber()

    readonly cityId: number;

    readonly product: ProductPostEntity;
    readonly orderProducts: OrderProductEntity[];
    updatedAt?: Date;

}




