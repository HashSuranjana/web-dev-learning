interface User {
    userName :string
    password : string
    logging (x:string, y:number) :void
}


const me :User ={
    userName :'hash12',
    password: '1256489lp',
    logging: (x, y) =>{
        console.log (x + y.toString())
    },
}

console.log(me)