import { ReservationSteps } from '../../services/reservation/reservation.enums';
import { ReservationDTO } from "../../store/dto/reservation.dto";
import {RoomDTO} from "../../services/rooms/room.dto";

interface ReservationModel {
  id?: string;
  adults?: number;
  children?: number;
  depart?: Date;
  arrive?: Date;
  step?: ReservationSteps;
}

interface ReservationChangeModel {
  name: keyof ReservationModel;
  value: number | string | Date;
}

interface NextReservationModel {
  room?: RoomDTO;
}


export {
  ReservationModel,
  ReservationChangeModel,
  NextReservationModel
};
