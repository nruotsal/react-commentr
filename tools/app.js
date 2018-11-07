import React from 'react'
import { render } from 'react-dom'

import Commentr from '../src/'

const props = {
  locale: 'en-US',
  comments: [
    {
      id: 1,
      timestamp: (new Date('2018-11-01T01:01:01')).toJSON(),
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum, felis ac luctus elementum, nibh urna cursus libero, sed volutpat lorem velit scelerisque arcu. Mauris dapibus neque sit amet consequat dapibus. Maecenas condimentum, ex id scelerisque rutrum, nunc nulla mollis elit, vel faucibus diam turpis a felis. In eleifend ornare neque, et efficitur erat facilisis quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque maximus sit amet lacus id condimentum. Praesent finibus augue sit amet justo pulvinar, et ultrices quam tincidunt. Suspendisse ac sem sed nibh finibus sagittis a ut est. Donec bibendum faucibus sem ut feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id dui fermentum, placerat libero eu, eleifend diam. Nunc vel purus ac nisi sagittis mattis vitae et ligula. Sed mollis nisi vitae nunc mattis rutrum. Donec tincidunt mattis nisl.'
    },
    {
      id: 2,
      timestamp: (new Date('2018-11-02T02:02:02')).toJSON(),
      message: 'Maecenas in dapibus enim. Integer feugiat a ex sed egestas. Vestibulum eu ante turpis. Sed pharetra fringilla rutrum. Integer rhoncus, urna sit amet tristique bibendum, lorem leo mattis ipsum, ut gravida metus dui eleifend quam. Fusce lobortis ex tortor, ut vehicula elit vestibulum nec. Nulla vitae pharetra leo.'
    }
  ]
}

render(<Commentr {...props} />, document.getElementById('root'))
