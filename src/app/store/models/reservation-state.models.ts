import { ReservationDTO } from "../dto/reservation.dto";
import { RoomDTO } from "../../services/rooms/room.dto";

interface ReservationStateModel {
  reservation: ReservationDTO;
  room?: RoomDTO | null;
}

export {
  ReservationStateModel
}
