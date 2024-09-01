import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Perks from "../Perks";
import axios from "axios";

export default function PlacesPage() {
    const { action } = useParams();
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [photoLink, setPhotoLink] = useState('');
    const [description, setDescription] = useState('');
    const [perks, setPerks] = useState([]);
    const [moreInfo, setMoreInfo] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [maxGuest, setMaxGuest] = useState('');

    function inputHeader(text) {
        return <h2 className="text-2xl mt-4">{text}</h2>;
    }

    async function addPhotoByLink(ev) {
        ev.preventDefault()
        const {data:filename} = await axios.post('/upload-by-link', {link: photoLink})
        setAddedPhotos(prev => {
            return [...prev, filename]
        })
        setPhotoLink('')

    }

    return (
        <div>
            {action !== 'new' && (
                <div className="text-center">
                    <Link className="inline-flex gap-2 bg-primary text-white py-2 px-4 rounded-full" to={'/account/places/new'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6">
                            <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                        </svg>
                        Add New Place
                    </Link>
                </div>
            )}
            {action === 'new' && (
                <div>
                    <form>
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
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Add link to jpg or png"
                                value={photoLink}
                                onChange={ev => setPhotoLink(ev.target.value)}
                            />
                            <button onClick={addPhotoByLink} className="bg-secondary px-4 rounded-2xl">
                                Add&nbsp;Photo
                            </button>
                        </div>
                        <div className="mt-2 grid gap-2 grid-col-3 md:grid-cols-4 lg:grid-cols-6">
                            {addedPhotos.length > 0 && addedPhotos.map(link => (
                                <div>
                                    <img className="rounded-2xl" src={'http://localhost:4000/uploads/' + link}></img>
                                </div>
                            )
                            )}
                            <button className="flex items-center justify-center gap-1 border bg-transparent rounded-2xl p-20 text-2xl text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                </svg>
                                Upload
                            </button>
                        </div>
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
                            value={moreInfo}
                            onChange={ev => setMoreInfo(ev.target.value)}
                        />
                        {inputHeader("Check-In, Check-Out and Max-Guests")}
                        <div className="grid gap-2 sm:grid-cols-3">
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
                                    value={maxGuest}
                                    onChange={ev => setMaxGuest(ev.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <button className="primary my-4">Save</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
