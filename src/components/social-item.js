import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "react-bootstrap"

export default ({ icon, name, link }) => (
  <Button
    variant={"outline-secondary"}
    href={link}
    className="btn-circle"
    size={"lg"}
  >
    <FontAwesomeIcon icon={icon} size={"2x"} />
  </Button>
)
