import { OStatus } from "../../enums/offer-status";

export class OfferStatus {
  status: OStatus = OStatus.Created;
  date: Date = new Date(Date.now());
}
