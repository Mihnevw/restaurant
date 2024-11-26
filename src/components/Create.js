import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import * as CreateService from '../services/CreateService';

function CreateForm() {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();


    const onPizzaCreate = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let name = formData.get('name');
        let description = formData.get('description');
        let price = formData.get('price');
        let imageUrl = formData.get('imageUrl');

        CreateService.create({
            name,
            description,
            price,
            imageUrl
        }, user.accessToken)
            .then(result => {
                navigate('/')
            })
    }

    return (
        <section id="create-page" className="create">
            <form id="create-form" onSubmit={onPizzaCreate} method="POST">
                <fieldset>
                    <legend>Add Pizza</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="name" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="description"></textarea>
                        </span>
                    </p>
                    <p className="image">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input name="imageUrl" id="image" placeholder="image" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <select id="type" name="type">
                            <option value="pizza">Pizza</option>
                            <option value="hamburger">Hamburger</option>
                            <option value="soap">Soap</option>
                        </select>
                    </p>
                    <input className="button submit" type="submit" value="Add Pizza" />
                </fieldset>
            </form>
        </section>

    );
}

export default CreateForm;
