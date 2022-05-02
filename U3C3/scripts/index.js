// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";
import {getData,appendData} from "./fetch.js"
let cont=document.getElementById("navbar")
cont.innerHTML=navbar()
let con1=document.getElementById("results")

const url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`
search(url,con1)
async function search(url,con1){
    let data=await getData(url)
    data=data.articles
    console.log(data);
    appendData(data,con1);
}
let con12=document.getElementById("results").innerHTML=null;
let ss=document.getElementById("sidebar").children


function sidebarres(){
    
    console.log(this.id);
    const url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${this.id}`
    console.log(url);
    search(url,con12)
}

for(let el of ss){
    el.addEventListener("click",sidebarres)
}
// let con12=document.getElementById("results")
// const query=document.getElementById("search_input")
// query.onkeydown=function(e){

//     if(e.key==="Enter"){
//         const url=`https://masai-mock-api.herokuapp.com/news?q=${query.value} `
//         search1(url,con12);
//     }
// }


