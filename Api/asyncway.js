const asyncway = () => {
    setTimeout(()=>{

        console.log("First Call.....");
    }, 1000);
    console.log("Second Call.....");
};
 
 asyncway();