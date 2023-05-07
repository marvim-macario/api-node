import { describe, expect, it } from "vitest";
import { CreateAppointment } from "./create-appointment";
import { Appointment } from "../entities/appointment";
import { getFutureDate } from "../tests/utils/get-future-date";

describe('Criar Agendamento', () => {
    it('should be able create an appointment', () => {

      const startAt = getFutureDate('2023-05-07')
      const endsAt = getFutureDate('2022-08-09')
      
      const createAppointment = new CreateAppointment();

      expect(createAppointment.execute({
                customer: 'John Doe',
                startAt,
                endsAt,
          })).resolves.toBeInstanceOf(Appointment);
    })
})