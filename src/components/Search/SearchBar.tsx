import React, { useState } from "react";
import { SearchBarPropType } from "../../Types/Props";

function SearchBar({onKeyUp}: SearchBarPropType) {
    const initProps = useTextInput("")

    return (
        <div className="input-group mb-3">
            <input {...initProps}   
                type="text" 
                className="form-control" 
                placeholder="Enter trip ID" 
                aria-label="searchbar" 
                aria-describedby="trip-search"
                onKeyUp={onKeyUp} />
        </div>
    )
}

function useTextInput(initValue: string) {
    const [value, setValue] = useState(initValue)
    const onChange = (ev: any) => {
        setValue(ev.target.value)
    }
    const onKeyUp = (ev: any) => {
        console.log(ev.key)
    }
    return {
        value,
        onChange,
        // onKeyUp
    }
}

export default SearchBar