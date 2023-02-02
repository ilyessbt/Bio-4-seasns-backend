import { IsIn, IsInt, IsOptional, IsString } from "class-validator";
import { ParseInt } from "src/decorators/parseInt.dto";
import { PaginationDto } from "src/shared dtos/pagination.dto";

export class getProductParams extends PaginationDto {
    @IsOptional()
    @IsString()
    @IsIn(["price", "name", "remainingQuantity", "createdAt"])
    orderby: string = "createdAt";

    @IsOptional()
    @IsIn(["DESC", "ASC"])
    way: "DESC" | "ASC";

    @IsOptional()
    @ParseInt()
    @IsInt()
    categorie: number;

    @IsOptional()
    @ParseInt()
    @IsInt()
    id: number;

    @IsOptional()
    @ParseInt()
    @IsInt()
    qte: number;
}