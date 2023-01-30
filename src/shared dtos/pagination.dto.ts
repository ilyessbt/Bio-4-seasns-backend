import { IsIn, IsInt, IsOptional, IsString, Max, Min } from "class-validator";
import { ParseInt } from "src/decorators/parseInt.dto";


export class PaginationDto {
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