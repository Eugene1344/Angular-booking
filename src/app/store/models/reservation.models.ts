import { ReservationSteps } from '../../services/reservation/reservation.enums';

interface ReservationModel {
  id?: string;
  adults?: number;
  children?: number;
  depart?: Date;
  arrive?: Date;
  step?: ReservationSteps;
}

interface ReservationStateModel {
  reservation: ReservationModel
}

export {
  ReservationModel,
  ReservationStateModel
};
