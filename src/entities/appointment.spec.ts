import {expect, test} from 'vitest'
import { Appointment } from './appointment'
import { getFutureDate } from '../tests/utils/get-future-date';

test('create an appointment', () => {

    const startAt = getFutureDate('2023-05-07')
    const endsAt = getFutureDate('2022-08-09')

    const appointment =  new Appointment({
        customer: 'Jonh Doe',
        startAt,
        endsAt 
    })

    expect(appointment).toBeInstanceOf(Appointment)
    expect(appointment.customer).toEqual('Jonh Doe')
})