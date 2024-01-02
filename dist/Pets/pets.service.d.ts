import { ICreatePet } from './createPetDto';
export declare class PetsService {
    private pets;
    getSayBye(): string;
    insertPets(name: string, description: string, dob: string): any;
    allPets(): ICreatePet[] | "No Pets Record found";
    specificPetById(petId: string): ICreatePet;
    updatePets(petId: string, name: string, description: string, dob: string): ICreatePet;
    deletePets(petId: string): ICreatePet[] | "No Record Found ";
}
