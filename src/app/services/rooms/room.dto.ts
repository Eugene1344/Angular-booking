import {RoomModel} from "../../store/models/rooms.models";

class RoomDTO implements RoomModel {

  public id: number;
  public name: string;
  public currency: string;
  public price: number;

  constructor(props: RoomModel) {
    this.id = props.id || 0;
    this.name = props.name || 'unknown';
    this.currency = props.currency || '$';
    this.price = props.price || 0;
  }

}

export {
  RoomDTO
};
