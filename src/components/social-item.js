import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "react-bootstrap"

export default ({ icon, name, link }) => (
  <div className="my-2">
    <Button block variant={"outline-secondary"} href={link}>
      <FontAwesomeIcon className="mr-2" icon={icon} size={'sm'} />
      {name}
    </Button>
  </div>
)
