import { Injectable } from '@nestjs/common';
import { ICreatePet } from './createPetDto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PetsService {
  private pets: ICreatePet[] = [];
  //   getHello(): string {
  //     return 'Hello World!';
  //   }
  getSayBye(): string {
    return 'Hello World 2';
  }

  insertPets(name: string, description: string, dob: string) {
    const id = uuidv4();

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
    } else {
      return 'No Pets Record found';
    }
  }

  specificPetById(petId: string) {
    return this.pets.find((x) => x.id == petId);
  }

  updatePets(petId: string, name: string, description: string, dob: string) {
    this.pets.forEach((x) => {
      if (x.id == petId) {
        x.name = name;
        x.description = description;
        x.dob = dob;
      }
    });

    return this.pets.find((x) => {
      if (x.id == petId) return x;
    });
  }

  deletePets(petId: string) {
    console.log('petId: ', petId);

    const index: number = this.pets.findIndex((x) => x.id == petId);
    console.log('index: ', index);

    if (index > -1) {
      this.pets.splice(index, 1);
      return this.pets;
    } else {
      return 'No Record Found ';
    }
  }
}
