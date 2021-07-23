import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';



const ListAuthors = props => {

    const [authorList, setAuthorList] = useState([])
    const [switchState, setSwitchState]  = useState(true)

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then(res => setAuthorList(res.data))
        .catch(err => console.log(err))
    },[switchState])

    const handleDelete = author_id =>{
        console.log(author_id)
        axios.delete("http://localhost:8000/api/authors/" + author_id)
        .then(res => setSwitchState(!switchState))
        .catch(err => console.log(err))
    }




    return (
        <div>
            <Link to='/new'>Add an Author</Link>
            <table className="table table-light">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    authorList.map((author,i) => {
                        return(
                            <tr key={i}>
                                <td>{author.name}</td>
                                <td>
                                    <Link className='btn btn-primary' to ={`/edit/${author._id}`}>Edit</Link>
                                    <button onClick={() => handleDelete(author._id)} className='btn btn-secondary' to='/'>Delete</button>
                                </td>
                            </tr>

                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}










export default ListAuthors