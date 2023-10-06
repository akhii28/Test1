import { useEffect, useState } from "react";
import Axios from "axios";

function Contact()
{

    //this.state = {name: "Hari Haran"}         //class component
    const[name,setName]=useState("Hari Haran"); //function component
    //const [x, setX] = useState(defaultValue);
    const[data,setData] = useState([]);
    

    const handleClick = () => {
        setName("Akhilesh");
    }

    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(res.status === 200)
            {
                console.log(res.data);
                setData(res.data);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err))
    },[])

    const ContactDetails = () => {
        return data.map((val)=>{
            return <p>{val.name} - {val.phone}</p>
        })
    }

    return(
        <div>
            <h1>The owner of this page is {name}</h1>
            <button onClick={handleClick}>Another Name</button><br/><br/><br/>
            {ContactDetails()}
        </div>
    )
}

/*
class C1 extends Component
{
    componentDidMount(){
        Axios.get()
    }
}
*/

export default Contact;