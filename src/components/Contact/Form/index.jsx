import { useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import AvisoEnvio from '../../Aviso';
export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      return;
    }

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        'service_dxbmk0a',
        'template_mr2ds1z',
        templateParams,
        'YbsXozJJqoV9T8uNZ'
      )
      .then((result) => {
        setName('');
        setEmail('');
        setMessage('');
        if (result) {
          <AvisoEnvio />;
        } else {
          console.log('Erro!');
        }
      });
  }

  return (
    <>
      <Form onSubmit={sendEmail}>
        <Input
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
          autoComplete="true"
          required
        />

        <Input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          autoComplete="true"
          required={true}
        />

        <Textarea
          placeholder="Mensagem"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          required={true}
        />
        <ButtonForm type="submit" value="Enviar" />
      </Form>
    </>
  );
}

const Form = styled.form`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  position: relative;
  margin: 0 0 1em;
  padding: 1.5em;
  width: 35vw;
  min-width: 250px;
  font-family: unset;
  font-size: 1em;
  color: #000;
  border-radius: 15px;
  border: none;
  background-color: #fff;
  border: 2px solid #020024;
  box-shadow: 2px 2px 4px #02002448;
`;

const Textarea = styled.textarea`
  font-family: unset;
  width: 35vw;
  min-width: 250px;
  height: 150px;
  margin: 0 0 1em;
  padding: 1.5em;
  font-size: 1em;
  color: #000;
  border-radius: 15px;
  background-color: #fff;
  border: 2px solid #020024;
  box-shadow: 2px 2px 4px #02002448;
`;

const ButtonForm = styled.input`
  padding: 20px 10px;
  font-size: 1.3em;
  font-weight: 700;
  color: #fff;
  border-radius: 30px;
  border: none;
  background-color: #f53d53;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    transform: scale(0.95);
    opacity: 0.8;
  }
`;
