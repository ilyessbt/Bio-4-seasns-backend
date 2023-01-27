import { IsNotEmpty, IsNumber, Length } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty({ message: 'The Product should have a name' })
    @Length(3, 255)
    readonly name: string;
    @IsNotEmpty({ message: 'The Product should have a price' })
    readonly price: number;
    @IsNotEmpty({ message: 'The Product should have an Image Url' })

    readonly urlImg: string;
    readonly isTop: boolean;
    @IsNotEmpty({ message: 'The Product should have a Sell type' })
    @Length(2, 255)

    readonly sellType: string;
    readonly remainigQuantity: number;

    @IsNumber()
    @IsNotEmpty()
    readonly categorieIdCategorie?: number;
    updatedAt?: Date;

}




