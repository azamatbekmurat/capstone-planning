import React from 'react'
import Moment from 'moment'
import { connect } from 'react-redux'
import { v4 } from 'uuid'
import c from './../constants'

function NewCarForm(props){
  let _make = null
  let _model = null
  let _modelYear = null
  let _price = null
  let _mileage = null
  let _transmission = null
  let _trunkType = null
  let _condition = null
  let _color = null

  function handleNewCarFormSubmission(event) {
    const { dispatch } = props
    event.preventDefault()
    const action = {
      type: c.ADD_CAR,
      id: v4(),
      make: _make.value,
      model: _model.value,
      modelYear: _modelYear.value,
      price: _modelYear.value,
      mileage: _mileage.value,
      transmission: _transmission.value,
      trunkType: _trunkType.value,
      condition: _condition.value,
      color: _color.value
    }
    dispatch(action)
    _make.value = ''
    _model.value = ''
    _modelYear.value = ''
    _price.value = ''
    _mileage.value = ''
    _transmission.value = ''
    _trunkType.value = ''
    _condition.value = ''
    _color.value = ''
  }

  return (
    <div>
      <form onSubmit={handleNewCarFormSubmission}>
        <input
          type='text'
          id='make'
          placeholder='Make of a Car'
          ref={(input) => {_make = input}}/>
        <input
          type='text'
          id='model'
          placeholder='Model of a car'
          ref={(input) => {_model = input}}/>
        <input
          type='text'
          id='modelYear'
          placeholder='Year of a car'
          ref={(input) => {_modelYear = input}}/>
        <input
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input}}/>
        <input
          type='text'
          id='mileage'
          placeholder='Mileage'
          ref={(input) => {_mileage = input}}/>
        <input
          type='text'
          id='transmission'
          placeholder='Transmission'
          ref={(input) => {_transmission = input}}/>
        <input
          type='text'
          id='trunkType'
          placeholder='Trunk'
          ref={(input) => {_trunkType = input}}/>
        <input
          type='text'
          id='condition'
          placeholder='Condition of a car'
          ref={(input) => {_condition = input}}/>
        <input
          type='text'
          id='color'
          placeholder='Color'
          ref={(input) => {_color = input}}/>
        <button type='submit'>Add a car!</button>
      </form>
    </div>
  )
}

export default connect()(NewCarForm)
