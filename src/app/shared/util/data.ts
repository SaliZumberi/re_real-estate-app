import {Building} from "../models/building.model";
import {descriptions} from "./quotes";
import {generateId} from "./helpers";

export const generateInitialBuildingEntity = (): Building => {
  return {
    id: generateId(),
    imageUrl: 'https://www.histerius.com/hs0719/swiss_re.jpg',
    nickNames: [],
    address: {
      id: generateId(),
      streetName: '',
      streetNumber: '',
      zip: null,
      place: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    description: descriptions[Math.floor(Math.random() * descriptions.length)].quote,
    createdAt: new Date(),
    updatedAt: new Date()
  };
}

export const mockBuildings: Building[] = [
  {
    id: "1f4c7c7d-a988-4eef-92a7-e37f5980ee5c",
    address: {
      id: "0c49e0b6-13b6-47a0-88b0-bf5288424559",
      streetName: "Mary Axe",
      streetNumber: "30",
      zip: 5201,
      place: "London",
      updatedAt: new Date(),
      createdAt: new Date(),
    },
    imageUrl: "https://www.histerius.com/hs0719/swiss_re.jpg",
    nickNames: [
      {
        id: "1f4c7c72d-a988-4eef-292a7-e237f5980ee5c",
        name: "Test"
      },
      {
        id: "1f4c7c7233d-a988-4eef-292a7-e237f5980ee5c",
        name: "Baby"
      }
    ],
    description: "Education is what remains after one has forgotten what one has learned in school.",
    updatedAt: new Date(),
    createdAt: new Date(),
  }
]
