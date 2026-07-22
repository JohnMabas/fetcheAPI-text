
 async function fetchAPI() {
    let controller = new AbortController()
    setTimeout(() => {
        controller.abort(new Error('Request cancelled'))
        
    }, 2000);

    try {
        let response = await fatch('https://jsonplaceholder.typicode.com/posts', {

        signal:controller.signal


        })

        let res = await response.json()
        // console.log(res)
        let length = 0;
        for(let i = 0; i < res.length; i++){
            length++
        }

        let number = `total post is ${length}`
        return number
    } catch(e) {
        console.log(e.messege)
    }
 } 
 fetchAPI().then(res => {
    console.log(res)
 });