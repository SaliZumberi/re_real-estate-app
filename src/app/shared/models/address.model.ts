import {Entity} from "./entity.model";

export interface Address extends Entity{
  street: string;
  streetNumber: string;
  zip: number;
  place: string;
}
