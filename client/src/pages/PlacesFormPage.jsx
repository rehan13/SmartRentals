import PhotosUploader from "../PhotosUploader.jsx";
import Perks from "../Perks.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import AccountNav from "../AccountNav";
import {Navigate, useParams} from "react-router-dom";

export default function PlacesFormPage(){
    const{id} = useParams()

    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [description, setDescription] = useState('');
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [maxGuests, setMaxGuest] = useState('');
    const [redirect, setRedirect] = useState(false)
    const [price, setPrice] = useState(100)
    useEffect(()=>{
        if (!id) {
            return
        }
        axios.get('/places/'+id)
        .then(response => {
            const {data} = response
            setTitle(data.title)
            setAddress(data.address)
            setAddedPhotos(data.photos)
            setDescription(data.description)
            setPerks(data.perks)
            setExtraInfo(data.extraInfo)
            setCheckIn(data.checkIn)
            setCheckOut(data.checkOut)
            setMaxGuest(data.maxGuests)
            setPrice(data.price)
        })
    }, [id])

    

    function inputHeader(text) {
        return <h2 className="text-2xl mt-4">{text}</h2>;
    }

    async function savePlace(ev){
        ev.preventDefault()
        const placeData = {title, address, addedPhotos, description, perks, extraInfo, checkIn, checkOut, maxGuests, price}
        if(id){ 
            await axios.put('/places', {id, ...placeData})
            setRedirect(true)
            
        } else{
        await axios.post('/places', placeData)
        setRedirect(true)
        }
    }

    if (redirect){
        return <Navigate to={'/account/places'} />
    }

    return (
    
    <div>
        <AccountNav />
        <form onSubmit={savePlace}>
            {inputHeader("Title")}
            <input
                type="text"
                placeholder="Name of residence"
                value={title}
                onChange={ev => setTitle(ev.target.value)}
            />
            {inputHeader("Address")}
            <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={ev => setAddress(ev.target.value)}
            />
            {inputHeader("Photos")}
            <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos}/>
            {inputHeader("Description")}
            <textarea
                placeholder="Description of residence"
                value={description}
                onChange={ev => setDescription(ev.target.value)}
            />
            {inputHeader("Perks")}
            <p className="text-gray-500 text-sm">Select all that apply</p>
            <Perks selected={perks} onChange={setPerks} />
            {inputHeader("More Info")}
            <textarea
                placeholder="House Rules, Access Areas, Restrictions etc."
                value={extraInfo}
                onChange={ev => setExtraInfo(ev.target.value)}
            />
            {inputHeader("Check-In, Check-Out and Max-Guests")}
            <div className="grid gap-2 grid-cols-2 md:grid-cols-4 ">
                <div>
                    <h3 className="mt-2 mb-1">Check-In</h3>
                    <input
                        type="text"
                        placeholder="12:00"
                        value={checkIn}
                        onChange={ev => setCheckIn(ev.target.value)}
                    />
                </div>
                <div>
                    <h3 className="mt-2 mb-1">Check-Out</h3>
                    <input
                        type="text"
                        placeholder="15:00"
                        value={checkOut}
                        onChange={ev => setCheckOut(ev.target.value)}
                    />
                </div>
                <div>
                    <h3 className="mt-2 mb-1">Maximum Guests</h3>
                    <input
                        type="number"
                        placeholder="For Example: 5"
                        value={maxGuests}
                        onChange={ev => setMaxGuest(ev.target.value)}
                    />
                </div>
                <div>
                    <h3 className="mt-2 mb-1">Price Per Night</h3>
                    <input
                        type="number"
                        placeholder="For Example: 5"
                        value={price}
                        onChange={ev => setPrice(ev.target.value)}
                    />
                </div>
            </div>
            <div>
                <button className="primary my-4">Save</button>
            </div>
        </form>
    </div>
    )
}