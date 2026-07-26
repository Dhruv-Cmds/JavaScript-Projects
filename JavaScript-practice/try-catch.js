let a = Number(prompt("Enter first number"))
let b = Number(prompt("Enter second number"))

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError ("Sorry this is not allowed")
}

function main(){

    let c = 1;
    try{
        alert(`Sum of ${a} and ${b} is = ${a + b}*${c}`)
        return true
    }
    catch (err) {
        alert(err.SyntaxError)
        alert(err.name)
        alert(err.message)
        return false
    }
    finally{
        alert("This will run no matter what")
    }
}

let d = main()