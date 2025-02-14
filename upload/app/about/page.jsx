"use client";
import React, { useState, useEffect, createContext, useRef, useReducer, useMemo } from "react";
import InnerPageBanner from "@/components/InnerPageBanner";
import ContextApi from "@/components/ContextApi";
import NewUserInfo from "@/components/NewUserInfo";

export const ContextData = createContext();
export const NewUserInfoContext = createContext();

const Page = () => {
    const [incrementOne, setIncrementOne] = useState(0);
    const [incrementTwo, setIncrementTwo] = useState(100);
    const [postData, setPostData] = useState([]);
    const [inputValue, setInputValue] = useState("about page");
    const [isVisible, setIsVisible] = useState(false);
    const [count, setCount] = useState(0);
    const [formData, setFormData] = useState(
        { 
            name: "", 
            email: "",
            phone: "",
            subject: ""
        }
    );
    const focusInput = useRef("");
    // Reset form
    const resetForm = () => {
        setFormData(
            { 
                name: "", 
                email: "",
                phone: "",
                subject: ""
            }
        );
        focusInput.current.focus();
        focusInput.current.style.border = "1px solid blue";
    };

    // User context data
    const userContextData = {
        subject: "Computer Science",
        city: "Chiniot",
        province: "Punjab",
    };

    const userInfo = {
        name: "Hafiz",
        university: "Fast International University",
        country: "Pakistan",
    };

    // Fetch API once on mount
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                console.log('API Response:', response); // Log the response object
                return response.json(); // Parse the response body
            })
            .then((json) => {
                console.log('API Data:', json); // Log the parsed JSON data
                setPostData(json);
            });
    }, []);
    
    // Increment/Decrement
    const increment = () => setCount((prevCount) => prevCount + 1);
    const decrement = () => setCount((prevCount) => prevCount - 1);

    // Toggle visibility
    const toggleVisibility = () => setIsVisible((hide) => !hide);

    // Form handling
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const reducer = (state, action) => {
        if(action.type === "Increment"){
            return state + 1;
        }
        if(action.type === "Decrement"){
            return state - 1;
        }
    }

    const [redCount, myFunction] = useReducer(reducer, 0);

    const userNewInfo = [
        { name: "Hafiz", profession: "programmer" },
        { name: "Ali", profession: "designer" },
    ];
      
    function userFun() {
        setTimeout(() => {
            let output = ""; // Declare the variable properly
            userNewInfo.forEach((data, index) => {
                output += `<tr><td key=${index}> ${data.name} </td>`;
                output += `<td key=${index}> ${data.profession} </td></tr>`;
            });
            document.getElementById("infoData").innerHTML = output;    
        }, 200);
    }
    userFun();
      
    function addUser(newData){
        return new Promise((resolve, reject)=> {
            setTimeout(() => {
                userNewInfo.push(newData);
                let error = false;
                if(!error){
                    resolve();
                }
                else {
                    reject('program tu war gya');
                }
            }, 300);
        })
    }

    async function start(){
        await addUser({name: "sarfraz", profession: "cricket"});
        userFun();    
    }
    start();

    // Clouser Function
    var sum = function(a){
        console.log((a));
        var c = 4;
        return function(b){
            return a+b+c
        }
    }
    var store = sum(5);
    console.log(store(5));

    const incrementFuncOne = () => {
        setIncrementOne(incrementOne + 1);
        console.log(incrementOne);
    }
    const incrementFuncTwo = () => {
        setIncrementTwo(incrementTwo - 1)
        console.log(incrementTwo);
    }
    const isEvenTesting = useMemo( function testMemo(){
        console.log("**************")
        return incrementOne+100;
    }, [incrementOne])

    return (
        <div>
            <div className="listingHeader">
                <InnerPageBanner PageTitle="Ye About us page hai" />
            </div>
            <div className="py-36 mx-auto max-w-7xl">

                <div className="mb-6">
                <button className="aquaButton mr-3" onClick={incrementFuncOne}>Increment One</button>
                <span className="inline-block py-2 px-4 border">
                    {`${incrementOne} | ${incrementTwo} | ${isEvenTesting}`}
                </span>
                    <button className="aquaButton ml-3" onClick={incrementFuncTwo}>Increment Two</button>
                </div>

                <table id="infoData" className="mb-6"></table>


                <div className="mb-6">
                    <button className="aquaButton mr-3" onClick={ () => myFunction({type: "Decrement"})}>Decrement</button>
                    {redCount}
                    <button 
                        className="aquaButton ml-3"
                        onClick={ () => myFunction({type: "Increment"})}
                    >Increment</button>
                </div>

                {/* Context Providers */}
                <div className="mb-6">
                    <NewUserInfoContext.Provider value={userContextData}>
                        <NewUserInfo />
                    </NewUserInfoContext.Provider>
                </div>
                <div className="mb-6">
                    <ContextData.Provider value={userInfo}>
                        <ContextApi />
                    </ContextData.Provider>
                </div>
                {/* API Data */}
                <ul className="grid columns-4 mb-6">
                    {postData.map((item) => (
                        <li className="mb-5" key={item.id}>
                            {item.title}
                        </li>
                    ))}
                </ul>

                {/* Form */}
                <form className="mb-8" onSubmit={handleSubmit}>
                    <input
                        ref={focusInput}
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border-gray-300 border p-2 w-[400px] outline-none"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border-gray-300 border p-2 w-[400px] outline-none"
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-gray-300 border p-2 w-[400px] outline-none"
                    />

                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="border-gray-300 border p-2 w-[400px] outline-none"
                    />

                    <button
                        className="aquaButton"
                        type="button"
                        onClick={resetForm}
                    >
                        Reset Data
                    </button>
                    <button
                        className="px-8 py-2 bg-blue-400 border-0 text-white text-2xl rounded-md cursor-pointer"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>

                {/* Visibility Toggle */}
                <div className="mb-5">
                    <button
                        onClick={toggleVisibility}
                        className="px-8 py-2 bg-blue-400 border-0 text-white text-2xl rounded-md cursor-pointer"
                    >
                        {isVisible ? "Hide Content" : "Show Content"}
                    </button>
                    {isVisible && <p className="mb-5">This is some toggleable content!</p>}
                </div>

                {/* Input and Counter */}
                <h1 className="text-3xl mb-3">{inputValue}</h1>
                <h2 className="text-3xl mb-3">{count}</h2>
                <div className="flex gap-3 mb-4">
                    <button
                        className="px-8 py-2 bg-blue-400 border-0 text-white text-2xl rounded-md cursor-pointer"
                        onClick={decrement}
                    >
                        Decrease -
                    </button>
                    <button
                        className="px-8 py-2 bg-blue-400 border-0 text-white text-2xl rounded-md cursor-pointer"
                        onClick={increment}
                    >
                        Increase +
                    </button>
                </div>

                <input
                    className="border-gray-300 border p-2 w-[400px] outline-none"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    type="text"
                    placeholder="placeholder"
                />
            </div>
        </div>

    );
};

export default Page;