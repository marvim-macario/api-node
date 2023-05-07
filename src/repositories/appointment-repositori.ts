import app
export interface AppointmentsRepository {
  create(appointment: Appointment): Promise<void>;
  save(appointment:)
}


