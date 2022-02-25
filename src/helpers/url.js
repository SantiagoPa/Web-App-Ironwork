let enviroment = false
let url

enviroment ? url = 'https://canielcm-replacements-warehous.herokuapp.com/api/'
           : url = 'http://localhost:8000/api/'
export {
    url
}