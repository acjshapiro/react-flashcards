import React from 'react';
import { Button, Form } from 'semantic-ui-react'

class CardForm extends React.Component{
  state = { front: '', back: '' };

  handleChange = (e, { name, value}) => {
    this.setState({ [name]: value })
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.addCardFunction(this.state)
    this.setState({ front: '', back: ''})
  }

  render() {

    const { addCardFunction } = this.props;
    const { front, back } = this.state;

    return(

      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input name='front' value={front} onChange={ this.handleChange } label='front' placeholder='Front' />
          <Form.Input name='back' value={back} onChange={ this.handleChange }label='back'  placeholder='Back' />
          <Form.Button type='submit'>Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }

}
  export default CardForm;
