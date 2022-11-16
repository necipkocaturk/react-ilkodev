import axios from 'axios';

const veriCagir = async (number) => {
    const {data: veri1} = await axios("https://jsonplaceholder.typicode.com/users/"+`${number}`)
    const {data: veri2} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+`${number}`)

    console.log(veri1,veri2)
}

console.log(veriCagir(1))