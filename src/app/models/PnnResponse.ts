import { PnnDTO } from './PnnDTO';
export class PnnResponse {
  constructor(
    public code: number,
    public message: string,
    public pnn: PnnDTO,
  ) {

  }
}
