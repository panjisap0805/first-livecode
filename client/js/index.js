$(document).ready(function() {

    if(!localStorage.getItem('access_token')){
        $('#loginForm').show()
        $('#content').hide()
    }
    else {
        $('#loginForm').hide()
        $('#content').hide()
    }
})

$('#form-login').submit(function (event){
    let emailLogin = $('email').val()
    let passwordLogin = $('password').val()

    $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: {
            email: emailLogin,
            password: passwordLogin
        }
    })

        .done((response) => {
            localStorage.setItem('access_token', response.token)
            loginDisplay()

            $('#content').show()
            $('#loginForm').hide()
        })
        .fail((response) => {

        })
        .always((response) =>{

        })
})

$('#logout').click(function (event) {
    localStorage.removeItem('access_token')
    $('#email').val('')
    $('#password').val('')
    $('#loginForm').show()
    $('#content').hide()

    event.preventDefault()
})

function addFood(title, price, ingredients, tag){
    $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/foods',
        headers: {
            access_token: localStorage.getItem('access_token')
        },
        data: {
            title,
            price,
            ingredients,
            tag
        }
    })
        .done(response => {
            dashboard()
        })
        .fail((xhr, status, message) => {

        })
        .always((response) => {

        })
}

function dashboard(){
    $('#loginForm').hide()
    $('#content').show()
}