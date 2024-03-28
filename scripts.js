
        function sendReminder() {
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const waitSeconds = document.getElementById('waitSeconds').value;
        
            const data = {
                email: email,
                message: message,
                waitSeconds: waitSeconds
            };
        
            fetch('/Remainder', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
                // Handle success response here
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle error here
            });
        }
        