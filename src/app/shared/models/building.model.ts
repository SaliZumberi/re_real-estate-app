import {Address} from "./address.model";
import {NickName} from "./nickname.model";
import {Entity} from "./entity.model";

export interface Building extends Entity{
  address: Address;
  imageUrl: string
  nickNames: NickName[];
}
