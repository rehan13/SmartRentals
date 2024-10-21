import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Image from "../Image"
import Header from "../Header"  

export default function IndexPage() {
    const [places, setPlaces] = useState([]);  
    const [filteredPlaces, setFilteredPlaces] = useState([]);  
    const [searchQuery, setSearchQuery] = useState('');  

    useEffect(() => {
        
        axios.get('/places').then(response => {
            setPlaces(response.data);
            setFilteredPlaces(response.data);  
        });
    }, []);

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query === '') {
            setFilteredPlaces(places);  
        } else {
            const filtered = places.filter(place => 
                place.address.toLowerCase().includes(query.toLowerCase())  
            );
            setFilteredPlaces(filtered);
        }
    };

    return (
        <div>
            
            <Header onSearch={handleSearch} />

           
            <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredPlaces.length > 0 && filteredPlaces.map(place => (
                    <Link to={'/place/' + place._id} key={place._id}>
                        <div>
                            <div className="bg-gray-500 mb-2 rounded-2xl flex">
                                {place.photos?.[0] && (
                                    <Image className="rounded-2xl object-cover aspect-square" src={place.photos?.[0]} alt="" />
                                )}
                            </div>
                            <h2 className="font-bold">{place.address}</h2>
                            <h3 className="text-sm truncate leading-4">{place.title}</h3>
                            <div className="mt-1">
                                <span>${place.price}</span> per night
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
