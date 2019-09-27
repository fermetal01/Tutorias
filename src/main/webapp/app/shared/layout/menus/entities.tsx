import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from './menu-components';

export const EntitiesMenu = props => (
  <NavDropdown icon="th-list" name="Entities" id="entity-menu">
    <MenuItem icon="asterisk" to="/entity/departamento">
      Departamento
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity/programa-academico">
      Programa Academico
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity/materia">
      Materia
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity/horario-materia">
      Horario Materia
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity/tutoria">
      Tutoria
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity/comentario">
      Comentario
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity/estudiante">
      Estudiante
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity/profesor">
      Profesor
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
