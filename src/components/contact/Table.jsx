import React, { useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';

function ContatoTable() {
  const [contato, setContato] = useState({
    email: '',
    nome: '',
    descricao: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContato((prevContato) => ({
      ...prevContato,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Faça alguma ação com os dados de contato, por exemplo, enviar para um servidor.

    // Limpe os campos após o envio
    setContato({
      email: '',
      nome: '',
      descricao: '',
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Email</th>
              <th>Nome</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Form.Control
                  type="email"
                  name="email"
                  value={contato.email}
                  onChange={handleChange}
                  required
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  name="nome"
                  value={contato.nome}
                  onChange={handleChange}
                  required
                />
              </td>
              <td>
                <Form.Control
                  as="textarea"
                  name="descricao"
                  value={contato.descricao}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
}

export default ContatoTable;