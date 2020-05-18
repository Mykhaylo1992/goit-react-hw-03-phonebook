import React, {Component} from 'react'
import Phonebook from './components/phonebook/Phonebook';
import PhonebookList from './components/phonebookList/PhonebookList';
import PhonebookFilter from './components/phonebookFilter/PhonebookFilter'



class App extends Component {
  state = {
    
    contacts: [],
    name: '',
    contact: '',
    filter: ''
  }

  componentDidMount() {
    console.log("componentDidMount");
    const contacts = localStorage.getItem('contacts')
    console.log(contacts)
    if(contacts) {
      this.setState({contacts:JSON.parse(contacts)});

    }

  }
  
   onHandleChange = (e) =>{ 
     const name = e.target.name;
     const value = e.target.value;
    this.setState({ [name]: value});
  
 
  
  }

  onHandleSubmit = (e) => {
    e.preventDefault();
    const {name, contact} = this.state;
    const newContact = {
      id: `${Date.now()}`, name, contact
    }
    this.setState(prevState => ({contacts: [...prevState.contacts, newContact]}), () =>{
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));

    });
    e.target.reset()
   
   
  }

    filterInput = (e) =>{
      this.setState({filter: e.target.value});

    }
    filterContakts = () =>{
     return (this.state.filter) ? this.state.contacts.filter(item =>item.name.toLowerCase().includes(this.state.filter)) : this.state.contacts
    }
    deleteItem = (e) =>{
      const id = e.target.dataset.id
      console.log(id)
      const resalt = this.state.contacts.filter(item=>item.id!==id)
     this.setState({
       contacts:resalt
     })
      

    }


  render() {
   

  
    return (
      <>
       <h2>Phonebook</h2>
      <Phonebook onHandleChange={this.onHandleChange} onHandleSubmit={this.onHandleSubmit}/>
      <PhonebookList contacts={this.filterContakts()} deleteItem={this.deleteItem}/>
      <PhonebookFilter filter={this.state.filter }  filterInput={this.filterInput}/>
      
      
      
      </>
    );
  }
}

export default App;