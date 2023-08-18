import {useEffect, useState} from 'react'

const BookingForm = () => {
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [guestsNumber, setGuestsNumber] = useState()
    const [occasion, setOccasion] = useState()

    const availableTimes = []
    useEffect(() => {
        fetch()
    }, [])
    return (
        <form>
            <h1>Book Now</h1>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" onChange={(event) => setDate(event.target.value)} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " onChange={(event) => setTime(event.target.value)} >
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(value) => setGuestsNumber(event.target.value)} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={(event) => setOccasion(event.target.value)} >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    )
}

export default BookingForm