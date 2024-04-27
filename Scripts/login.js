document.getElementById('details').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    fetch('./Scripts/data/login.json')
      .then(response => response.json())
      .then((data)=>{
        let user = false;
        for (const student in data) {
            if (data[student].username === username && data[student].password === password) {
                user = true;
                break;
            }
        }
        if (user) {
          alert('Login successful!');
          window.location.href = 'dating.html';
        } 
        else {
          alert('Incorrect username or password. Please try again.');
        }
      })
      .catch(error => {
        console.error(error);
      });
});
document.getElementById('Forgot').addEventListener('click', function(forget){
    forget.preventDefault();
    window.location.href = '../../forgot.html';
});