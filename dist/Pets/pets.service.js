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
        this.pets = [];
    }
    getSayBye() {
        return 'Hello World 2';
    }
    insertPets(name, description, dob) {
        const id = (0, uuid_1.v4)();
        this.pets.push({
            name: name,
            description: description,
            dob: dob,
            id: id,
        });
        console.log('pOST ', this.pets);
        return id;
    }
    allPets() {
        console.log('this.pets get ', this.pets);
        if (this.pets.length) {
            return [...this.pets];
        }
        else {
            return 'No Pets Record found';
        }
    }
    specificPetById(petId) {
        return this.pets.find((x) => x.id == petId);
    }
    updatePets(petId, name, description, dob) {
        this.pets.forEach((x) => {
            if (x.id == petId) {
                x.name = name;
                x.description = description;
                x.dob = dob;
            }
        });
        return this.pets.find((x) => {
            if (x.id == petId)
                return x;
        });
    }
    deletePets(petId) {
        console.log('petId: ', petId);
        const index = this.pets.findIndex((x) => x.id == petId);
        console.log('index: ', index);
        if (index > -1) {
            this.pets.splice(index, 1);
            return this.pets;
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
//# sourceMappingURL=pets.service.js.map