import React from 'react'
import '../../css/admin.css'

function Admin() {
  return (
    <div className='mainAdmin'>
      <h1>עמוד המאפשר לשנות את הפרטים שלך </h1>
      <div>
        <label>upload your image</label>
        <input type="file"/>
      </div>
    </div>
  )
}

export default Admin
