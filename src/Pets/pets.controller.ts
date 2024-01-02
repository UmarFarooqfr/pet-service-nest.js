import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './createPetDto';
import { Repository } from 'typeorm';
import { Pet } from './pets.entity';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';

@Controller('pets')
export class PetsController {
  constructor(public petsService: PetsService) {}

  @ApiOperation({ summary: 'Create a new pet' })
  @Post()
  insertPets(@Body() body: CreatePetDto) {
    const petId = this.petsService.insertPets(
      body.name,
      body.description,
      body.dob,
    );
    return {
      id: petId,
    };
  }

  @ApiOperation({ summary: 'Get all pets' })
  @Get()
  getAllPets() {
    return this.petsService.allPets();
  }
  @ApiOperation({ summary: 'Get a pet' })
  @Get(':petId')
  getPetsById(@Param('petId') petId: string) {
    return this.petsService.specificPetById(petId);
  }
  @ApiOperation({ summary: 'Update a pet ' })
  @ApiParam({ name: 'petId', description: 'ID of the pet to update' })
  @ApiBody({ type: CreatePetDto })
  @Put(':petId')
  @Put(':petId')
  updatePets(@Param('petId') petId: string, @Body() data: any) {
    return this.petsService.updatePets(
      petId,
      data.name,
      data.description,
      data.dob,
    );
  }

  @ApiOperation({ summary: 'Delete a pet ' })
  @Delete(':petId')
  deletePets(@Param('petId') petId: string) {
    return this.petsService.deletePets(petId);
  }
}
