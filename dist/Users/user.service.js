"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let PetsService = class PetsService {
    constructor() {
        this.users = [];
    }
    getSayBye() {
        return 'My Name is USAMA ZAFAR    MMMM ';
    }
    insertPets(Name, description, Dob) {
        const id = (0, uuid_1.v4)();
        this.users.push({
            Name: Name,
            description: description,
            Dob: Dob,
            id: id
        });
        console.log("pOST ", this.users);
        return id;
    }
    allUsers() {
        console.log("this.users get ", this.users);
        if (this.users.length) {
            return [...this.users];
        }
        else {
            return 'No User Record is Found ';
        }
    }
    specificUsers(userId) {
        return this.users.find((x) => x.id == userId);
    }
    updatePets(userId, Name, description, Dob) {
        this.users.forEach((x) => {
            if (x.id == userId) {
                x.Name = Name;
                x.description = description;
                x.Dob = Dob;
            }
        });
        console.log("");
        return this.users.find((x) => { if (x.id == userId)
            return x; });
    }
    deletePets(userId) {
        console.log('userId: ', userId);
        const index = this.users.findIndex((x) => x.id == userId);
        console.log('index: ', index);
        if (index > -1) {
            this.users.splice(index, 1);
            return this.users;
        }
        else {
            return 'No Record Found ';
        }
    }
};
PetsService = __decorate([
    (0, common_1.Injectable)()
], PetsService);
exports.PetsService = PetsService;
//# sourceMappingURL=user.service.js.map