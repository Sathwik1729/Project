let query = "";
let answer = "";
let pass = "";

function recover() {
    let input_username = document.getElementById("username").value;
    
    fetch("login.json")
        .then(response => response.json())
        .then((data) => { 
            for (user of data) { 
                if (user.username === input_username) {
                    query = user.secret_question; 
                    pass = user.password; 
                    answer = user.secret_answer;
                    document.getElementById("SecQ").textContent = query;
                    document.getElementById("out").style.display = 'block';
                    return; 
                }
            }
        
            alert('Invalid username. Please try again.');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while processing your request. Please try again.');
        });
}

function response() {
    let resp = document.getElementById('SecA').value;
    if(resp == answer){
        document.getElementById('passreveal').innerHTML = "Your password is: " + pass;
    } 
    else {
        alert("Incorrect answer. Please try again.");
    }
}
