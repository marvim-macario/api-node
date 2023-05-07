import { Appointment } from "../entities/appointment";
import { AppointmentsRepository } from "../repositories/appointment-repository";

interface CreateAppointmentRequest {
    customer: string;
    startAt: Date;
    endsAt: Date;
}
type CreateAppointmentResponse = Appointment



export class CreateAppointment {
    constructor(
        private appointmentsRepository: AppointmentsRepository
    ){}

    async execute({
        customer,
        startAt,
        endsAt
    }: CreateAppointmentRequest): Promise<CreateAppointmentResponse>{
        const overlappingAppointment = await this.appointmentsRepository.findOverlappingAppointment(
            startAt,
            endsAt
        )

        if(overlappingAppointment){
            throw new Error('Another appointment overlaps this appointment dates')
        }
        
        const appointment = new Appointment({
            customer,
            startAt,
            endsAt
        })

        await this.appointmentsRepository.create(appointment)

        return appointment
    }
}