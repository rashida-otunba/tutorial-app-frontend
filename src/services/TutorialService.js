import http from "../http-common"; //wires up http service to  obtain blogs 

const getAll=()=>{
    return http.get("/tutorials") //al "/" are urls 
}

const get = id =>{
    return http.get(`/tutorials/${id}`)
}

const create = data =>{
   return  http.get("/tutorials", data)
}

const update =(id, data)=>{
    return http.put (`/tutorials/${id}`, data)
}

const remove = id =>{
    return  http.delete (`/tutorials/${id}`)
}

const removeAll = ()=>{
    return http.delete("/tutorials");
}

const findByTitle=title=>{
    return http.get(`tutorials?title=${title}`)
}

const TutorialService ={
    getAll,
    get, 
    create, 
    update, 
    remove,
    removeAll,
    findByTitle
}

export default TutorialService;