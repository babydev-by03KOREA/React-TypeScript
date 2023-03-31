import React, {useState} from "react";
import axios from "axios";

interface Data {
    title: string;
    description: string;
}

const Request: React.FC = () => {
    const [data, setData] = useState<Data>({ title: '', description: '' });

    const handleSendData = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/data', data);
            console.log(response.data);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="App">
            <input
                name="title"
                onChange={handleChange}
                value={data.title}
                placeholder="Title"
            />
            <input
                name="description"
                onChange={handleChange}
                value={data.description}
                placeholder="Description"
            />
            <button onClick={handleSendData}>Send Data</button>
        </div>
    );
};


export default Request;
