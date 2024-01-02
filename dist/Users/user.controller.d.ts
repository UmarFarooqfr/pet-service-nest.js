import { PetsService } from './user.service';
export declare class UserController {
    userService: PetsService;
    constructor(userService: PetsService);
    insertPets(body: any): {
        id: any;
    };
    getAllPets(): import("./user.modals").User[] | "No User Record is Found ";
    getPetsById(userId: string): import("./user.modals").User;
    updatePets(userId: string, data: any): import("./user.modals").User;
    deletePets(userId: string): import("./user.modals").User[] | "No Record Found ";
}
