import React from "react";
import { Field, reduxForm } from "redux-form";

const SeatsChoice = props => {
    const{handleSubmit} = props
    return (
        <div className="seat-preferences">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Liczba miejsc:</label>
                    <Field className="number-of-seats" name="numberOfSeats" component="input" type="number" min="0" max="86"/>
                </div>
                <div className="seats-close">
                    <Field type="checkbox" component="input" name="seatCloseOption"/>
                    <label>Czy miejsca mają być obok siebie?</label>
                </div>
                <button className="choose-seats" type="submit">Wybierz miejsca</button>
            </form>
        </div>
    )
}

export default reduxForm({
    form: "formValues"
})(SeatsChoice);
  