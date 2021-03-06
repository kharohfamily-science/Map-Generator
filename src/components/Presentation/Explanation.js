import React, { Component } from 'react'

const Explanation = (props) => {
  const sowingChunks = [
    '', 'plains sowin', '', '', '',
    '', '', '', '', '',
    'ocean sowin', '', '', '', '',
    '', '', '', '', '',
    '', '', 'plains sowin', '', ''
  ]
    .map(chunk => <div className={`chunk ${chunk}`} />)

  if (props.number === 0) {
    return (
      <div className='Explanation exp-one'>
        <h3 className='number'>1.</h3>
        <h3 className='title'>Sow</h3>
        <p>Pick random chunks on the white map to generate the biomes strains</p>
        <div className='image sow'>{sowingChunks}</div>
      </div>
    )
  } else if (props.number === 1) {
    const expandingChunks = [
      'plains expandin', 'plains', 'plains expandin', '', '',
      'ocean expandin', 'plains expandin', 'plains expandin', '', '',
      'ocean', 'ocean expandin', '', '', '',
      '', 'ocean expandin', 'plains expandin', '', '',
      '', 'plains expandin', 'plains', 'plains expandin', ''
    ]
      .map(chunk => <div className={`chunk ${chunk}`} />)

    return (
      <div className='Explanation exp-two'>
        <h3 className='number'>2.</h3>
        <h3 className='title'>Expand</h3>
        <p>Expand the strains to the nearest chunks using previously chosen probabilities</p>
        <div className='image expand'>{expandingChunks}</div>
      </div>
    )
  } else if (props.number === 2) {
    const fixingChunks = [
      'plains', 'plains', 'plains', 'plains', 'plains fixin',
      'ocean', 'plains', 'plains', 'plains', 'plains',
      'ocean', 'ocean', 'ocean', 'plains', 'plains',
      'ocean', 'ocean', 'plains', 'plains', 'plains fixin',
      'plains', 'plains', 'plains', 'plains', 'plains'
    ]
      .map(chunk => <div className={`chunk ${chunk}`} />)

    return (
      <div className='Explanation exp-three'>
        <h3 className='number'>3.</h3>
        <h3 className='title'>Fix</h3>
        <p>Because of probabilities some chunks will remain white. Force them to pick a color</p>
        <div className='image fix'>{fixingChunks}</div>
      </div>
    )
  }
}

export default Explanation
