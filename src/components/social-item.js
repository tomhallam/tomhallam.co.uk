import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "react-bootstrap"

export default ({ icon, name, link }) => (
  <div className="my-2">
    <a href={link} target={'_blank'}>
      <Button block variant={'outline-secondary'}>
        <FontAwesomeIcon className="mr-2" icon={icon} />
        {name}
      </Button>
    </a>
  </div>
)
