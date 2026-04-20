function startSystem() {
    const name = document.getElementById('nameInput').value;
    const id = document.getElementById('idInput').value;

    if (name.trim().length > 8 && id.length === 14) {
        localStorage.setItem('userName', name);
        localStorage.setItem('userId', id);

        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('nav-links').style.display = 'block';
        
        document.getElementById('display-name').innerText = name;
        document.getElementById('display-id').innerText = id;
        document.getElementById('welcome-msg').innerText = "مرحباً، " + name.split(' ')[0];
        
        window.scrollTo(0, 0);
    } else {
        alert("تنبيه: يجب إدخال اسمك رباعياً ورقمك القومي المكون من 14 رقم.");
    }
}

function logout() {
    if(confirm("هل تريد مغادرة المنصة السيادية؟")) {
        localStorage.clear();
        location.reload();
    }
}