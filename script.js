 function connect(crm) {
    if (crm === 'salesforce') {
        window.open('https://fivetran.com/connect-card/setup?redirect_uri=https://dmforce.com/success&auth=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkIjp7ImxvZ2luIjp0cnVlLCJ1c2VyIjoiY2hlbWljYWxseV9wcm9mbGlnYWN5IiwiYWNjb3VudCI6InN3YXBwaW5nX3R1Y2tlZCIsImdyb3VwIjoidHJhbnNmZXJyZWRfaW5kZWxpYmxlIiwiY29ubmVjdG9yIjoiY29wZV9zYWxpbmUiLCJtZXRob2QiOiJQYmZDYXJkIn0sImlhdCI6MTczMjIxMTQwNn0.wgetdQaF3VSPYTzV-iTrFiuCmThdVHTJq8HWy4EVJKc&hide_setup_guide=true', '_blank');
    } else {https://github.com/CDR-Shepard/cvg-fivetran/blob/main/script.js
        console.log('Connect function for ' + crm + ' is not implemented yet.');
    }
}
// v 0.01 08-13
