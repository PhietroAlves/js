const emails = [
    "teste@gmail.com",
    "contato@google.com",
    "admin@outlook.com",
    "suporte@google.com"
]

const emailsGoogle = emails.filter(function(google){
    return google.includes('@google.com')
})

console.log(emailsGoogle)