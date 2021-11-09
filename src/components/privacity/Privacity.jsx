import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export const Privacity = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="link"
        onClick={handleShow}
        size="sm"
        style={{ paddingBottom: "5px" }}
      >
        Política de privacidad
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Title>
          <h1>Clausula informativa sobre la RGPD</h1>
        </Modal.Title>
        <Modal.Body>
          <p>
            De conformidad con lo establecido en el REGLAMENTO (UE) 2016/679 DEL
            PARLAMENTO EUROPEO Y DEL CONSEJO de 27 de abril de 2016, le
            informamos que sus datos serán incorporados al sistema de
            tratamiento titularidad de Scil animal care company, S.L. CIF
            B85324481 y domicilio social sito en la calle Calle La Granja, 15
            Edificio B-bajo, C.P. 28108 Alcobendas MADRID, con la finalidad de
            atender sus consultas y necesidades al tiempo informarle de las
            diferentes mejoras sobre los servicios que podamos ofrecerle. En
            cumplimiento con la normativa vigente, le informamos que los datos
            serán conservados durante el plazo estrictamente necesario para
            cumplir con los preceptos mencionados con anterioridad. Mientras no
            nos comunique lo contrario, entenderemos que sus datos no han sido
            modificados, que usted se compromete a notificarnos cualquier
            variación. Se le informa que se procederá a tratar los datos de
            manera lícita, leal, transparente, adecuada, pertinente, limitada,
            exacta y actualizada. Es por ello que nos comprometemos a adoptar
            todas las medidas razonables para que estos se supriman o
            rectifiquen sin dilación cuando sean inexactos. De acuerdo con los
            derechos que le confiere la normativa vigente en protección de datos
            podrá ejercer los derechos de acceso, rectificación, limitación de
            tratamiento, supresión, portabilidad y oposición al tratamiento de
            sus datos de carácter personal así como del consentimiento prestado
            para el tratamiento de los mismos, dirigiendo su petición a la
            dirección postal indicada más arriba o al correo electrónico. Podrá
            dirigirse a la Autoridad de Control competente para presentar la
            reclamación que considere oportuna. El envío de estos datos implica
            la aceptación de esta cláusula y que tenemos su consentimiento para
            utilizarlos para las finalidades mencionadas.
          </p>
          <h2>¿Puede modificar sus consentimientos cuando quiera?</h2>
          <p>
            Sí. La información de los tratamientos que ha consentido estará
            siempre accesible a partir del 25 de mayo. Podrá modificarla siempre
            que quiera desde esa fecha.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
