import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import TeamsForm from './TeamsForm'
import PeopleList from './PeopleList'
import Shuffled from './Shuffled'
import AddPerson from './AddPerson'

function App () {
  const history = useHistory()

  function onSubmit (form) {
    localStorage.setItem('teams', JSON.stringify(form))
    history.push('/shuffle')
  }

  function handleOnClick () {
    history.push('/')
  }

  return (
    <div className='flex-column gap-50px'>
      <header className='header'>
        <h1 onClick={handleOnClick}>Mythical Mix</h1>
        <p>The awesome Team Generator tool</p>
      </header>
      <main className="flex-column gap-50px width-50percent">
        <Route path='/' exact render={() => <TeamsForm onSubmit={onSubmit} />} />
        <Route path='/' exact component={PeopleList} />
        <Route path='/add' exact component={AddPerson} />
        <Route path='/shuffle' exact component={Shuffled} />
      </main>
    </div>
  )
}

export default App
