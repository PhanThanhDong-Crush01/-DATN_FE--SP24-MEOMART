// AddressAutocomplete.jsx
import { useState } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

const AddressAutocomplete = ({ onSelectAddress, selectedAddress }: any) => {
    const [address, setAddress] = useState('')

    const handleSelect = async (selectedAddress: any) => {
        const results = await geocodeByAddress(selectedAddress)
        const latLng = await getLatLng(results[0])

        onSelectAddress({
            address: selectedAddress,
            latLng: latLng
        })
    }

    return (
        <div>
            {selectedAddress ? (
                <div>
                    <p>Địa chỉ đã chọn: {selectedAddress.address}</p>
                    <button onClick={() => onSelectAddress(null)}>Chọn địa chỉ khác</button>
                </div>
            ) : (
                <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }: any) => (
                        <div>
                            <input
                                {...getInputProps({
                                    placeholder: 'Enter your address...',
                                    className: 'input_controll'
                                })}
                            />
                            <div>
                                {loading ? <div>Loading...</div> : null}
                                {suggestions.map((suggestion: any) => {
                                    const style = {
                                        backgroundColor: suggestion.active ? '#41b6e6' : '#fff'
                                    }

                                    return (
                                        <div {...getSuggestionItemProps(suggestion, { style })}>
                                            {suggestion.description}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                </PlacesAutocomplete>
            )}
        </div>
    )
}

export default AddressAutocomplete
