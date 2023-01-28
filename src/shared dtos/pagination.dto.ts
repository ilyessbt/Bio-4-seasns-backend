import { IsIn, IsInt, IsOptional, IsString, Max, Min } from "class-validator";
import { ParseInt } from "src/decorators/parseInt.dto";


export class PaginationDto {

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

    @IsInt()
    @ParseInt()
    @Min(1)
    @IsOptional()
    page: number = 1;

    @IsInt()
    @ParseInt()

    @Max(25)
    @IsOptional()
    limit: number;
}