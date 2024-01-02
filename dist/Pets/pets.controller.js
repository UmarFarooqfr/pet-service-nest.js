"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetsController = void 0;
const common_1 = require("@nestjs/common");
const pets_service_1 = require("./pets.service");
const createPetDto_1 = require("./createPetDto");
const swagger_1 = require("@nestjs/swagger");
let PetsController = class PetsController {
    constructor(petsService) {
        this.petsService = petsService;
    }
    insertPets(body) {
        const petId = this.petsService.insertPets(body.name, body.description, body.dob);
        return {
            id: petId,
        };
    }
    getAllPets() {
        return this.petsService.allPets();
    }
    getPetsById(petId) {
        return this.petsService.specificPetById(petId);
    }
    updatePets(petId, data) {
        return this.petsService.updatePets(petId, data.name, data.description, data.dob);
    }
    deletePets(petId) {
        return this.petsService.deletePets(petId);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new pet' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createPetDto_1.CreatePetDto]),
    __metadata("design:returntype", void 0)
], PetsController.prototype, "insertPets", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all pets' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PetsController.prototype, "getAllPets", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get a pet' }),
    (0, common_1.Get)(':petId'),
    __param(0, (0, common_1.Param)('petId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PetsController.prototype, "getPetsById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update a pet ' }),
    (0, swagger_1.ApiParam)({ name: 'petId', description: 'ID of the pet to update' }),
    (0, swagger_1.ApiBody)({ type: createPetDto_1.CreatePetDto }),
    (0, common_1.Put)(':petId'),
    (0, common_1.Put)(':petId'),
    __param(0, (0, common_1.Param)('petId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PetsController.prototype, "updatePets", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete a pet ' }),
    (0, common_1.Delete)(':petId'),
    __param(0, (0, common_1.Param)('petId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PetsController.prototype, "deletePets", null);
PetsController = __decorate([
    (0, common_1.Controller)('pets'),
    __metadata("design:paramtypes", [pets_service_1.PetsService])
], PetsController);
exports.PetsController = PetsController;
//# sourceMappingURL=pets.controller.js.map