import { IsNotEmpty, Length } from "class-validator";

export class CreateCategorieDto {
    idCategorie?: number;
    @IsNotEmpty({ message: 'The Categorie should have a name' })
    @Length(3, 255)

    readonly name: string;
    updatedAt?: Date;
}