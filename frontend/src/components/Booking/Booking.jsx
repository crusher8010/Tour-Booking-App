import "./booking.css";
import { useState, useContext } from "react";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";

function Booking({ tour, avgRating }) {
    const { price, reviews, title } = tour;
    const navigate = useNavigate();

    const { user } = useContext(AuthContext)

    const [bookings, setBookings] = useState({
        userId: user && user._id, userEmail: user && user.email,
        tourName: title,
        fullName: '', phone: '', guestSize: 1, bookAt: ''
    });

    const serviceFee = 10;
    const totalAmount = Number(price) * Number(bookings.guestSize) + Number(serviceFee);

    const handleChange = (e) => {
        const { name, value } = e.target
        setBookings({ ...bookings, [name]: value });
        console.log(bookings)
    }

    const handleClick = async (e) => {
        e.preventDefault();

        console.log(bookings)

        try {
            if (!user || user === undefined || user === null) {
                return alert('Please sign in');
            }

            const res = await fetch(`${BASE_URL}/booking`, {
                method: 'POST',
                body: JSON.stringify(bookings),
                headers: {
                    "Authorization": `${user.token}`,
                    'content-type': 'application/json'
                }
            })
            const result = await res.json();

            if (!res.ok) {
                return alert(result.message)
            }

            alert(result.message)

        } catch (err) {
            alert(err.message)
        }

        navigate("/thank-you");
    }

    return (
        <div className="booking">
            <div className="booking__top d-flex align-items-center justify-content-between">
                <h3>${price} <span>/ per person</span></h3>
                <span className="tour__rating d-flex align-items-center">
                    <i className="ri-star-s-fill"></i>
                    {avgRating === 0 ? null : avgRating} ({reviews?.length})
                </span>
            </div>

            <div className="booking__form">
                <h5>Information</h5>
                <Form className="booking__info-form" onSubmit={handleClick}>
                    <FormGroup>
                        <input type="text" placeholder="Full Name" name="fullName" required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type="number" placeholder="Phone / Mobile No." name="phone" required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup className="d-flex align-items-center gap-3">
                        <input type="date" placeholder="" name="bookAt" required onChange={handleChange} />
                        <input type="number" placeholder="Guests" name="guestSize" required onChange={handleChange} />
                    </FormGroup>
                </Form>
            </div>

            <div className="booking__bottom">
                <ListGroup>
                    <ListGroupItem className="border-0 px-0">
                        <h5 className="d-flex align-items-cente gap-1">${price} <i className="ri-close-line"></i> 1 person</h5>
                        <span> ${price}</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0">
                        <h5>Service charge</h5>
                        <span> ${serviceFee}</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0 total">
                        <h5>Total</h5>
                        <span> ${totalAmount}</span>
                    </ListGroupItem>
                </ListGroup>

                <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>Book Now</Button>
            </div>
        </div>
    )
}

export default Booking;