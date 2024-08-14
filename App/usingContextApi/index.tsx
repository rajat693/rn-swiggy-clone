import React, {createContext, useState} from "react";
const CloneContext = createContext({});
import { Variable } from "../Interfaces";

const CloneProvider = ( {children}: {children: React.ReactNode}) =>{

    // const [name, setName]=useState<Variable>({nameVal:"Robert"});  //Both are right
    const [name, setName]=useState<Variable["nameVal"]>("Robert");
    const [number, setNumber]=useState(1234567890);
    const [email, setEmail]=useState("robert@geekyants.com");

    const [clickedRestaurant_id, setClickedRestaurant_id]=useState(0);
    const [totalQty, updateTotalQty]=useState();
    const [totalAmount, updateTotalAmount]=useState(0);

    const [confirm, setConfirm] = useState("");
    const [isLoggedIn, setLoggedInValue ] = useState(false);
    
    const [cart, setCart] = useState<Object[]>([]);

    return (
        <CloneContext.Provider value={{ name, setName, number, setNumber, email, setEmail, clickedRestaurant_id, setClickedRestaurant_id, totalQty, updateTotalQty, totalAmount, updateTotalAmount, confirm, setConfirm, isLoggedIn, setLoggedInValue, cart, setCart }}>
            {children}
        </CloneContext.Provider>
    )
}

export {CloneContext, CloneProvider};

