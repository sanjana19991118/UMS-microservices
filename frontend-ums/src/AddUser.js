import React, {useState} from 'react'


const AddUser = () => {
//    const [name,setName] = useState('')
   const [users, setUsers] = useState('')
   const [code, setCode] = useState('')
   const [details, setDetails] = useState('')


   const handleCodeChange = (e) => {
      setCode(e.target.value)
   }

   const handleSubmit = (e) => {
       e.preventDefault()
       const formData = {
           code: code
       }
   }
    return (
      <div>
        <h1>UMS</h1>
         <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleCodeChange} value={code}/>
            <br/>
            <input type='submit'  value="search" />
         </form> 
         <ul>
            {
               users.map((ele,id) => {
                   return <li key={ele.id}>{ele.name}</li>
               })
            }
            
         </ul>
      </div>
   )
}

export default AddUser