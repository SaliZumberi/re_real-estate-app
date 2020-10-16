import {Entity} from "./entity.model";

export interface Address extends Entity{
  streetName: string;
  streetNumber: string;
  zip: number;
  place: string;
}
