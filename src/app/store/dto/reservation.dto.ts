import {ReservationModel} from "../../store/models/reservation.models";
import {ReservationSteps} from "./reservation.enums";
import {Utils} from "../../common/util";

const DATE_OPTIONS: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
const DATE_LOCALE: string = 'en-US';

type TDate = string | Date | void;

class ReservationDTO implements ReservationModel {

  public id?: string;
  public step: ReservationSteps;
  public adults: number;
  public children: number;
  public arrive: Date;
  public depart: Date;

  public arriveValue: string;
  public departValue: string;

  public isConditions!: boolean;
  public isRooms!: boolean;
  public isConfirm!: boolean;

  constructor(props: ReservationModel = {}) {
    this.id = Utils.uniqueId();
    this.step = props.step || ReservationSteps.STEP_1;
    this.adults = props.adults || 2;
    this.children = props.children || 0;
    this.arrive = this._getDateFromProps(props.arrive);
    this.depart = props.depart ? this._getDateFromProps(props.depart) : this._addDays(this.arrive);

    this.isConditions = this.step === ReservationSteps.STEP_1;
    this.isRooms = this.step === ReservationSteps.STEP_2;
    this.isConfirm = this.step === ReservationSteps.STEP_3;

    this.arriveValue = this._getDateValue(this.arrive);
    this.departValue = this._getDateValue(this.depart);
  }

  private _getDateFromProps(date: TDate): Date {
    let result: Date = new Date();

    if (typeof date === 'string' || date instanceof Date) {
      result = new Date(date);
    }

    return result;
  }

  private _addDays(date: Date, days: number = 1): Date {
    const result: Date = new Date(date);

    result.setDate(result.getDate() + days);

    return result;
  }

  private _getDateValue(date: Date): string {
    const arrDate: string[] = date.toLocaleDateString(DATE_LOCALE, DATE_OPTIONS).split('/');

    return arrDate[2] + '-' + arrDate[0] + '-' + arrDate[1];
  }

}

export {
  ReservationDTO
}
