import React from 'react'

function Notes(props) {

  return (
    <div className='relative'>
      <p className='absolute bottom-4 left-4'>{props.note.time}</p>
        <textarea name="" id="" cols="30" rows="10" style={{backgroundColor:props.note.color}} className='placeholder:text-black px-4 py-2 h-72 w-72 rounded-3xl resize-none outline-none' placeholder='Write here...' defaultValue={props.note.text}/>
    </div>
  )
}

export default Notes