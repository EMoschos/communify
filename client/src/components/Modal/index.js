import React, { useEffect } from "react";
import { Modal, Button } from 'react-materialize';

const trigger = <Button>Open Modal</Button>;

export default (props) => (
  <Modal header="Modal Header" trigger={trigger}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    {props.data}
  </Modal>
);