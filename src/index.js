import _ from 'lodash'
import './styles.css'

function component () {
  var element = document.createElement('div')

  element.innerHTML = _.join(['Hello', 'Webpack'], ' ')
  element.classList.add('el')

  return element
}

document.body.appendChild(component())
