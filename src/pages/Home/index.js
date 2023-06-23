import { Link } from 'react-router-dom';
import {
  Container, InputSearchContainer, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg'
import edit from '../../assets/images/icons/edit.svg'
import dump from '../../assets/images/icons/dump.svg'

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="pesquisar contato" />
      </InputSearchContainer>
      <Header>
        <strong>3 Contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>
      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Carlos Barboza</strong>
              <small>Instagram</small>
            </div>
            <span>cadusb2@gmail.com</span>
            <span>(81) 99999-9999</span>
          </div>
          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={dump} alt="Delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  )
}
