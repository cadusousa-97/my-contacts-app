import {
  Container, Header, ListContainer, Card,
} from './styles';
import arrow from '../../assets/images/icons/arrow.svg'
import edit from '../../assets/images/icons/edit.svg'
import dump from '../../assets/images/icons/dump.svg'

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 Contatos</strong>
        <a href="/">Novo contato</a>
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
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={dump} alt="Delete" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>João Lucas</strong>
              <small>LinkedIn</small>
            </div>
            <span>cadusb2@gmail.com</span>
            <span>(81) 99999-9999</span>
          </div>
          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={dump} alt="Delete" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Marcos Paulo</strong>
              <small>Twitter</small>
            </div>
            <span>cadusb2@gmail.com</span>
            <span>(81) 99999-9999</span>
          </div>
          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={dump} alt="Delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  )
}
