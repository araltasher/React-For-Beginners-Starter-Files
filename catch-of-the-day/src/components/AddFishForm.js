import React from "react";

class AddFishForm extends React.Component {

    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    
    createFish = (e) => {
        // Stop the form from submitting
        e.preventDefault();
        const fish = {
            name: this.nameRef.value.value,
            price: parseFloat(this.priceRef.value.value),
            status: this.statusRef.value.value,
            desc: this.descRef.value.value,
            image: this.imageRef.value.value
        };

        this.props.addFish(fish);
        
        //  Refresh the form
        e.currentTarget.reset();
    }

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
                <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
                <select name="status" ref={this.statusRef}>
                 <option value="available">Fresh!</option>
                 <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" ref={this.descRef} placeholder="Description" />
                <input name="image" type="text" ref={this.imageRef} placeholder="Image" />
                <button type="submit">+ Add Fish</button>
            </form>
        );
    }
}

export default AddFishForm;
