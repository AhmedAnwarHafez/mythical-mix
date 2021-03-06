import React, { useState } from 'react'
import { addPerson } from '../apis/people'

const AddPerson = (props) => {
  const [form, setForm] = useState({
    name: '',
    image: ''
  })

  function handleChange (evt) {
    const { name, value } = evt.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleSubmit () {
    const defaultImageUrl = '/user.svg'

    addPerson({
      name: form.name,
      imageUrl: form.image ? form.image : defaultImageUrl
    })
    props.history.push('/')
  }

  return (
    <div className='form'>
      <input
        onChange={handleChange}
        value={form.name}
        className='text-box'
        placeholder='First name'
        name='name'
      />
      <input
        onChange={handleChange}
        value={form.image}
        className='text-box'
        placeholder='Image url here or leave it empty'
        name='image'
      />
      <button onClick={handleSubmit} className='button'>➕ Add</button>
    </div>
  )
}

export default AddPerson
