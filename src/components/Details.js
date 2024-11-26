import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import * as AuthService from '../services/AuthService';
import { useNavigate, useParams } from 'react-router-dom';

function DetailsForm({ itemId }) {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [pet, setPet] = useState({});
    const { petId } = useParams();


    useEffect(() => {
        AuthService.getOne(petId)
            .then(res => {
                setPet(res)
            })

    }, [petId])

    const deleteHandler = (e) => {
        e.preventDefault();

        AuthService.remove(petId, user.accessToken)
            .then(() => {
                navigate('/')
            })

    }

    const ownerButtons = (
        <>
            <Link className='button' to='/'>Edit</Link>
            <Link className='button' to='/' onClick={deleteHandler}>Delete</Link>
        </>
    )

    const userButton = (
        <a className='button' href='/'>Like</a>
    )

    return (
        <section id='details-page' className='details'>
            <div className='pizza-information'>
                <h3>{pet.name}</h3>
                <p className='type'>{pet.type}</p>
                <p className='img'>{pet.img}</p>
                <div className='actions'>
                    {user._id && (user._id == user.ownerId // Ако имаме User._id да се изпълни това в скобите
                        ? ownerButtons
                        : userButton
                    )}



                    <div className='likes'>
                        <img className='hearts' src="/images" alt="img" />
                        <span id='total-likes'>{pet.total}</span>
                    </div>
                </div>
            </div>
            <div className='pet-description'>
                <h3>Description</h3>
                <p>{pet.description}</p>
            </div>
        </section>
    );
}

export default DetailsForm;
