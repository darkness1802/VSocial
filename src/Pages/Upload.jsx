import React from 'react'
import axios from "axios"

function Upload() {

    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false)

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsSelected(true);
    };
    const handleSubmission = () => {
        const formData = new FormData();
        formData.append('file', selectedFile);

        axios.post('http://localhost:1234/post', formData, {
            headers: {

            }
        }).then((response) => {
            console.log(response.data)
        }).catch((error) => { console.error(error) });
    };
    return <div>
        <input type="file" name="file" onChange={changeHandler} />
        {isSelected ? (
            <div>
                <p>Filename: {selectedFile.name}</p>
                <p>Filetype: {selectedFile.type}</p>
                <p>Size in bytes: {selectedFile.size}</p>
            </div>
        ) : (
            <p>Select a file to show details</p>
        )}
        <div>
            <button onClick={handleSubmission}>Submit</button>
        </div>
    </div>
}

export default Upload