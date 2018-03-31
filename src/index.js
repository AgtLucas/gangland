import _ from 'lodash'
import park from './park.jpg'
import './styles.css'

function component () {
  const element = document.createElement('div')

  element.innerHTML = _.join(['Hello', 'Webpack'], ' ')
  element.classList.add('el')

  const parkImg = new Image()
  parkImg.src = park

  element.appendChild(parkImg)

  return element
}

document.body.appendChild(component())
