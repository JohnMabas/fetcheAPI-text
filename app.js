
 async function fetchAPI() {
    setTimeout(() => {
        controller.abort(new Error('Request cancelled'))
        
    }, 2000);

    try {
        let respone = fatch('https://jsonplaceholder.typicode.com/posts', {

        Signal:controller.Signal


        })

        let res = JSON.parse(respone)
        console.log(res)
    } catch(e) {
        console.log(e.messege)
    }
 }