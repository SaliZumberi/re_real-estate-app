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
    description: descriptions[Math.floor(Math.random() * (descriptions.length - 0 + 1) + 0)].quote,
    createdAt: new Date(),
    updatedAt: new Date()
  };}
