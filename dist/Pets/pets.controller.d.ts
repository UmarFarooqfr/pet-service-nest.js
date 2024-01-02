import { PetsService } from './pets.service';
import { CreatePetDto } from './createPetDto';
export declare class PetsController {
    petsService: PetsService;
    constructor(petsService: PetsService);
    insertPets(body: CreatePetDto): {
        id: any;
    };
    getAllPets(): import("./createPetDto").ICreatePet[] | "No Pets Record found";
    getPetsById(petId: string): import("./createPetDto").ICreatePet;
    updatePets(petId: string, data: any): import("./createPetDto").ICreatePet;
    deletePets(petId: string): import("./createPetDto").ICreatePet[] | "No Record Found ";
}
