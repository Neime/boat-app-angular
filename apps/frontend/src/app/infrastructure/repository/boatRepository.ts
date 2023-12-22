import { Boat } from "../../frontoffice/boat/entities/boat";
import { Observable } from "rxjs";
export interface BoatRepository {
  findAll(): Observable<Boat[]>;
  byId(id: number): Observable<Boat>;
  save(boat: Boat): Observable<Boat>;
  delete(boat: Boat): Observable<null>;
  types(): string[];
}
