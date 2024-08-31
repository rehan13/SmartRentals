import { Link, useParams } from "react-router-dom";

export default function PlacesPage() {
    const {action} = useParams()
    return (
        <div>
            {action !== 'new' &&(
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
                        <h2 className="text-2xl mt-4">Title</h2>
                        <input type="text" placeholder="Name of residence"/>
                        <h2 className="text-2xl mt-4">Address</h2>
                        <input type="text" placeholder="Address"/>
                        <h2 className="text-2xl mt-4">Photos</h2>
                        <div className="mt-2 grid grid-col-3 md:grid-cols-4 lg:grid-cols-6">
                            <button className="border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">+</button>
                        </div>
                        
                    </form>
                </div>
            )}
        </div>
    )

}