export default function Perks({selected, onChange}){
    function handleCheckBoxClick(ev){
        const{checked, name} = ev.target
        if (checked){
            onChange([...selected, name])
        } else{
            onChange([...selected.filter(selectedName => selectedName !== name)])
        }   
    }


    return (
        <>
        <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-9">
                            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                                <input type="checkbox" checked ={selected.includes('Private Entrance')} name="Private Entrance" onChange={handleCheckBoxClick}/>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                                </svg>
                                <span>Private Entrance</span>
                            </label>
                            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                                <input type="checkbox" checked ={selected.includes('Wifi')} name="Wifi" onChange={handleCheckBoxClick}/>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
                                </svg>
                                <span>Wifi</span>
                            </label>
                            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                                <input type="checkbox" checked ={selected.includes('Parking')} name="Parking" onChange={handleCheckBoxClick}/>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                </svg>
                                <span>Parking</span>
                            </label>
                            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                                <input type="checkbox" checked ={selected.includes('Air Condition')} name="Air Condition" onChange={handleCheckBoxClick}/>
                                <svg className="size-7" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.0261 7.548V11.578L27.0521 9.253L28.0521 10.986L23.0261 13.887V20.815L29.0261 17.351V11.548H31.0261V16.196L34.5171 14.182L35.5171 15.914L32.0261 17.929L36.0521 20.253L35.0521 21.986L30.0261 19.083L24.0261 22.547L30.0271 26.012L35.0521 23.11L36.0521 24.842L32.0261 27.166L35.5171 29.182L34.5171 30.914L31.0261 28.899V33.548H29.0261V27.744L23.0261 24.279V31.208L28.0521 34.11L27.0521 35.842L23.0261 33.517V37.548H21.0261V33.517L17.0001 35.842L16.0001 34.11L21.0261 31.208V24.279L15.0261 27.743V33.548H13.0261V28.898L9.53606 30.914L8.53606 29.182L12.0251 27.166L8.00006 24.842L9.00006 23.11L14.0251 26.011L20.0251 22.547L14.0261 19.083L9.00006 21.986L8.00006 20.253L12.0261 17.929L8.53606 15.914L9.53606 14.182L13.0261 16.196V11.548H15.0261V17.351L21.0261 20.815V13.887L16.0001 10.986L17.0001 9.253L21.0261 11.578V7.548H23.0261Z" fill="#3C3C3C"/>
                                </svg>
                                <span>Air Condition</span>
                            </label>
                            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                                <input type="checkbox" checked ={selected.includes('Heater')} name="Heater" onChange={handleCheckBoxClick}/>
                                <svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="size-6" viewBox="0 0 32 32" xmlSpace="preserve">
                                    <path className="feather_een" d="M16,25.092V9.5C16,9.224,15.776,9,15.5,9S15,9.224,15,9.5v15.592c-0.581,0.207-1,0.756-1,1.408
                                        c0,0.828,0.672,1.5,1.5,1.5s1.5-0.672,1.5-1.5C17,25.848,16.581,25.298,16,25.092z M15.5,27c-0.276,0-0.5-0.224-0.5-0.5
                                        s0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5S15.776,27,15.5,27z M19,22.257V3c0-1.657-1.343-3-3-3h-1c-1.657,0-3,1.343-3,3v19.257
                                        c-1.221,1.009-2,2.535-2,4.243c0,3.038,2.462,5.5,5.5,5.5s5.5-2.462,5.5-5.5C21,24.792,20.221,23.266,19,22.257z M15.5,31
                                        c-2.481,0-4.5-2.019-4.5-4.5c0-1.347,0.597-2.613,1.637-3.472L12.671,23H13.5c0.276,0,0.5-0.224,0.5-0.5S13.776,22,13.5,22H13v-2
                                        h0.5c0.276,0,0.5-0.224,0.5-0.5S13.776,19,13.5,19H13v-2h0.5c0.276,0,0.5-0.224,0.5-0.5S13.776,16,13.5,16H13v-2h0.5
                                        c0.276,0,0.5-0.224,0.5-0.5S13.776,13,13.5,13H13v-2h0.5c0.276,0,0.5-0.224,0.5-0.5S13.776,10,13.5,10H13V8h0.5
                                        C13.776,8,14,7.776,14,7.5S13.776,7,13.5,7H13V5h0.5C13.776,5,14,4.776,14,4.5S13.776,4,13.5,4H13V3c0-1.103,0.897-2,2-2h1
                                        c1.103,0,2,0.897,2,2v19.728l0.363,0.3C19.403,23.887,20,25.153,20,26.5C20,28.981,17.981,31,15.5,31z"/>
                                </svg>
                                <span>Heater</span>
                            </label>
                            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                                <input type="checkbox" checked ={selected.includes('Hot Water')} name="Hot Water" onChange={handleCheckBoxClick}/>
                                <svg className="size-6" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M273.067 477.867h477.866V409.6H273.067v68.267zm0 68.266v51.2A187.733 187.733 0 0 0 460.8 785.067h102.4a187.733 187.733 0 0 0 187.733-187.734v-51.2H273.067zm-34.134-204.8h546.134a34.133 34.133 0 0 1 34.133 34.134v221.866a256 256 0 0 1-256 256H460.8a256 256 0 0 1-256-256V375.467a34.133 34.133 0 0 1 34.133-34.134zM512 34.133a34.133 34.133 0 0 1 34.133 34.134v170.666a34.133 34.133 0 0 1-68.266 0V68.267A34.133 34.133 0 0 1 512 34.133zM375.467 102.4a34.133 34.133 0 0 1 34.133 34.133v102.4a34.133 34.133 0 0 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.134-34.133zm273.066 0a34.133 34.133 0 0 1 34.134 34.133v102.4a34.133 34.133 0 1 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.133-34.133zM170.667 921.668h682.666a34.133 34.133 0 1 1 0 68.267H170.667a34.133 34.133 0 1 1 0-68.267z"/>
                                </svg>
                                <span>Hot Water</span>
                            </label>
                            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                                <input type="checkbox" checked ={selected.includes('Fire Alarm')} name="Fire Alarm" onChange={handleCheckBoxClick}/>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                                </svg>
                                <span>Fire Alarm</span>
                            </label>
                            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                                <input type="checkbox" checked ={selected.includes('First Aid')} name="First Aid" onChange={handleCheckBoxClick}/>
                                <svg className="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.5 13H15.5M12 9.5V16.5M9 6.09322C9.92143 6.0345 10.941 6 12 6C13.059 6 14.0786 6.0345 15 6.09322M9 6.09322C9 6.09322 5.33333 6.38889 4.88889 6.77778C4.54346 7.08002 4.19804 8.79172 4.06127 11C4.02206 11.633 4 12.3069 4 13C4 16.1111 4.44444 18.8333 4.88889 19.2222C5.33333 19.6111 8.44444 20 12 20C15.5556 20 18.6667 19.6111 19.1111 19.2222C19.5556 18.8333 20 16.1111 20 13C20 12.3069 19.9779 11.633 19.9387 11C19.802 8.79172 19.4565 7.08002 19.1111 6.77778C18.6667 6.38889 15 6.09322 15 6.09322M9 6.09322V5C9 3.22496 10.6373 3 12 3C13.3627 3 15 3.22496 15 5V6.09322" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>

                                <span>First Aid</span>
                            </label>
                            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                                <input type="checkbox" checked ={selected.includes('Pets Friendly')} name="Pets Friendly" onChange={handleCheckBoxClick}/>
                                <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                                    className="size-5" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve">
                                <g>
                                    <path d="M256-0.5C114.333-0.5-0.5,114.333-0.5,256S114.333,512.5,256,512.5S512.5,397.667,512.5,256S397.667-0.5,256-0.5z
                                        M256,472.422C136.47,472.422,39.578,375.53,39.578,256C39.578,136.47,136.47,39.578,256,39.578
                                        c119.53,0,216.422,96.892,216.422,216.422C472.422,375.53,375.53,472.422,256,472.422z"/>
                                    <path d="M133.48,236.619c-9.394,8.673-6.982,27.397,5.385,41.863c12.368,14.45,29.996,19.131,39.374,10.427
                                        c9.378-8.643,6.967-27.397-5.401-41.832C160.47,232.642,142.842,227.945,133.48,236.619z"/>
                                    <path d="M338.833,243.757c-11.006,15.625-11.694,34.52-1.55,42.223c10.129,7.671,27.257,1.314,38.247-14.325
                                        c10.99-15.593,11.679-34.473,1.55-42.191C366.95,221.777,349.808,228.18,338.833,243.757z"/>
                                    <path d="M226.129,240.125c16.517-3.977,25.111-28.65,19.179-55.107c-5.887-26.458-24.078-44.681-40.595-40.705
                                        c-16.501,4.008-25.08,28.681-19.194,55.139C191.452,225.879,209.628,244.102,226.129,240.125z"/>
                                    <path d="M309.057,144.313c-16.501-3.977-34.677,14.247-40.595,40.705c-5.918,26.458,2.661,51.131,19.193,55.107
                                        c16.485,3.976,34.677-14.247,40.595-40.673C334.184,172.995,325.558,148.321,309.057,144.313z"/>
                                    <path d="M256,262.513c-39.374,0-68.932,62.7-68.932,83.444c0,51.005,29.558-1.613,68.932-1.613c39.39,0,68.932,52.618,68.932,1.613
                                        C324.932,325.213,295.39,262.513,256,262.513z"/>
                                </g>
                                </svg>
                                <span>Pets Friendly</span>
                            </label>
                        </div>
        </>
    )
}