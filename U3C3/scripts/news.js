// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js";
import {appendData1} from "./fetch.js"
let cont=document.getElementById("navbar")
cont.innerHTML=navbar()
let cont1=document.getElementById("detailed_news")
let arr=[]
let data=JSON.parse(localStorage.getItem("news"))
arr.push(data)
appendData1(arr,cont1)