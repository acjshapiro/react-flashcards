import React, { Component } from 'react';
import CardsList from './CardsList';
import CardForm from './CardForm';
import { Container, Divider, Header } from 'semantic-ui-react';


class App extends Component {
  state = { cards: [ {id: 1, front: 'Arrow Functions.', back: 'Are hard for me to read... But once I learn the syntax will probably be awesome'},
  {id: 2, front: 'Ezekiel 25:17', back: "The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he, who in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy my brothers. And you will know my name is the Lord when I lay my vengeance upon thee."},
  {id: 3, front: 'es6', back: 'is pretty cool. But also confusing as I was just starting to learn Vanilla JS'},

]}

addCard = (card) => {
  const {cards} = this.state;
  this.setState({ cards: [card, ...cards] })
}

  render() {
    return (
      <Container>
        <Header as='h1' textAlign='center'>React Flash Cards</Header>
        <Divider />
        <CardForm addCardFunction={this.addCard} />
        <br />
        <CardsList cardsObject={this.state.cards}  />
      </Container>

    );
  }
}

export default App;
