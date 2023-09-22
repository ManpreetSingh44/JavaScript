// IIfe- Immediately invoke function expression
// this can run automatically - it is self executing
// any vars live inside the ifife so not wasting global memory
(function()
{
    function Start() {
        let x = 1;
        console.log('First App Started');
        console.log(x);
    }
    // attach window onload event listner
    window.addEventListener('load',Start);
})();