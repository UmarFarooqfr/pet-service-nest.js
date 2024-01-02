import { User } from './user.modals';
export declare class PetsService {
    private users;
    getSayBye(): string;
    insertPets(Name: string, description: string, Dob: string): any;
    allUsers(): User[] | "No User Record is Found ";
    specificUsers(userId: string): User;
    updatePets(userId: string, Name: string, description: string, Dob: string): User;
    deletePets(userId: string): User[] | "No Record Found ";
}
