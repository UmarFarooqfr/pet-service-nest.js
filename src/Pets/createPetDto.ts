export class ICreatePet {
  id: string;
  name: string;
  description: string;
  dob: string;
}
import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreatePetDto {
  // name must not empty or its string
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  // description must not empty or its string
  @IsNotEmpty()
  @IsString()
 
  readonly description: string;

  // dob must not empty or its string
  @IsNotEmpty()
  @IsString()
  readonly dob: string;
}
