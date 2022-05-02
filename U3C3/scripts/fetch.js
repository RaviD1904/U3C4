
async function getData(url){
    let res=await fetch(url)
    let data=await res.json()
    return data

}


function appendData(data,cont){
    
    data.forEach(({title,description,urlToImage,content})=> {
        //console.log(title,description,urlToImage);
        let box=document.createElement("div")
        box.setAttribute("class","news")
        let h1=document.createElement("h3")
        h1.innerText=title
        let h2=document.createElement("p")
        h2.innerText=description
        let img=document.createElement("img")
        img.src=urlToImage
        box.append(h1,h2,img)
        cont.append(box)
        box.addEventListener("click",function(){
           let obj={
            title:title,
            content:content,
            urlToImage:urlToImage,
           }
           localStorage.setItem("news",JSON.stringify(obj))
           window.location.href="../news.html"
        })

    });
}



function appendData1(data,cont){
    
    data.forEach(({title,urlToImage,content})=> {
        //console.log(title,description,urlToImage,content);
        let box=document.createElement("div")
        box.setAttribute("class","news")
        let h1=document.createElement("h3")
        h1.innerText=title
        let h2=document.createElement("p")
        h2.innerText=content
        let img=document.createElement("img")
        img.src=urlToImage
        box.append(h1,h2,img)
        cont.append(box)
        

    });
}



async function search1(url,con12){
    let data=await getData(url)
    data=data.articles
    console.log(data);
    window.Location.href="./search.html"
    appendData(data,con12);
}









export {getData,appendData,appendData1,search1}