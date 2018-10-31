import React, { Component } from "react";
import { Image, Button, Carousel, Grid, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <Grid>

        <div className="navbar">
          <Row>
          <Col xs={8} md={2}>
            <Link to="/">
              <div>
                <Button className="logo-button" bsSize="large">Minions Store</Button>
              </div>
            </Link>
          </Col>
          <Col xs={4} md={4}>
            <Image src="kevin-icon.png" className="kevin-nav" responsive/>
          </Col>
          <Col xs={12} md={6}>
            <LinkContainer to="/reservations/new">
              <div>
                <Button className="reserve-button" bsSize="large">RESERVE JÁ!</Button>
              </div>
            </LinkContainer>
          </Col>
          </Row>
        </div>

        <div className="presentation">
          <Row>
            <Col xs={12} md={6}>
              <div className="presentation-content">
                <h1 className="first-presentation">
                  Ele é fofinho, felpudo e fenomenal
                </h1>
                <h2 className="second-presentation">
                    Reserve o boneco mais procurado das lojas hoje mesmo!
                </h2>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <Image src="bob-icon.png" className="bob-presentation" responsive/>
            </Col>
          </Row>
        </div>

        <div className="reasons">
          <div className="reasons-box">
            <Row>
              <Col xs={12} md={12}>
                <p className="reasons-title">
                  Varios motivos para reservar o seu!
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <div className="reason-square">
                  <Row>
                    <Image src="gift.png" className="gift-icon" responsive/>
                  </Row>
                  <Row>
                    <p className="reason-title">
                      Presenteie um amigo
                    </p>
                  </Row>
                  <Row>
                    <p className="reason-text">
                      Nada melhor do que poder presentear quem você gosta.
                    </p>
                  </Row>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="reason-square">
                  <Row>
                    <Image src="slumber.png" className="slumber-icon" responsive/>
                  </Row>
                  <Row>
                    <p className="reason-title">
                      Melhore seu sono
                    </p>
                  </Row>
                  <Row>
                    <p className="reason-text">
                      Melhor companhia para aquela soneca esperta.
                    </p>
                  </Row>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="reason-square">
                  <Row>
                    <Image src="fist.png" className="fist-icon" responsive/>
                  </Row>
                  <Row>
                    <p className="reason-title">
                      Um novo mascote
                    </p>
                  </Row>
                  <Row>
                    <p className="reason-text">
                      O boneco do minion será seu parceiro em todas as aventuras.
                    </p>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
          <Row>
            <LinkContainer to="/reservations/new">
              <div>
                <Button className="reserve-bottom-button" bsSize="large" block>RESERVE AGORA</Button>
              </div>
            </LinkContainer>
          </Row>
        </div>

        <div className="explanation">
          <div className="explanation-content">
            <Row>
              <h3 className="box-question">
                O que é um Minion?
              </h3>
            </Row>
            <br/>
            <Row>
              <h4 className="explanation-text">
                <p>Seres amarelos milenares,
                os minions têm uma missão: </p>
                <p>servir os maiores vilões.</p>
                <br/>
                <p>Não se engane com a aparência fofinha,</p>
                <p>eles são altamente periculosos.</p>
                <Image src="evil-minion.png" className="evil-minion" responsive/>
              </h4>
            </Row>
          </div>
        </div>



        <div className="description">
          <Row>
          </Row>
        </div>

        <div className="form">
          <Row>
          </Row>
        </div>

      </Grid>
    );
  }
}
