import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { API } from "aws-amplify";

import LoaderButton from "../components/LoaderButton";
import "./NewReservation.css";

export default class NewReservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      name: "",
      email: "",
      phone: ""
    };
  }

  validateForm() {
    return this.state.name.length > 0 && this.state.email.length > 0 && this.state.phone.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    try {
      await this.createReservation({
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone
      });
      this.props.history.push("/");
      alert("Reservation created!");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }

  createReservation(reservation) {
    return API.post("reservations", "/reservation", {
      body: {
        name: reservation.name,
        email: reservation.email,
        phone: reservation.phone
      }
    });
  }

  render() {
    return (
      <div className="NewReservation">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="name" bsSize="large">
            <ControlLabel>Name</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
            <FormControl
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
            />
          </FormGroup>
          <FormGroup controlId="phone" bsSize="large">
            <ControlLabel>Phone</ControlLabel>
            <FormControl
              value={this.state.phone}
              onChange={this.handleChange}
              type="tel"
            />
          </FormGroup>
          <LoaderButton
            block
            bsStyle="primary"
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Reserve"
            loadingText="Creating reservation…"
           />
        </form>
      </div>
    );
  }
}
