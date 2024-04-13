const deletePassword = (website) => {

    let data = localStorage.getItem("passwords")
    let arr = JSON.parse(data);
    arrUpdated = arr.filter((e) => {
        return e.website != website;
    })

    localStorage.setItem("passwords", JSON.stringify(arrUpdated))
    alert(`successfully deleted ${website}'s password`)
    showPass()

}







const showPass = () => {



    let tb = document.querySelector("table")
    let data = localStorage.getItem("passwords")


    if (data == null) {
        tb.innerHTML = "No data to show"

    }
    else {
        tb.innerHTML = `<tr>
    <th scope="col">WebSite  </th>
    <th scope="col">Username  </th>
    <th scope="col">Password  </th>
    <th scope="col">Delete  </th>


</tr>`;
        let arr = JSON.parse(data);
        let str = "";
        for (let i = 0; i < arr.length; i++) {
            const ele = arr[i];
            str += ` <tr>
        <td scope="row">${ele.website}</td>
        <td>${ele.username}</td>
        <td>${ele.password}</td>
        <td> <button class="btnsm" onclick =deletePassword('${ele.website}') >DELETE</button></td>
        </tr>`
        }
        tb.innerHTML = tb.innerHTML + str;
    }
    website.value = ""
    username.value = ""
    password.value = ""

}





console.log('working...');


showPass();

document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();

    console.log('clicked...');
    console.log(username.value);
    console.log(password.value);
    console.log(website.value);
    let passwords = localStorage.getItem("passwords")
    console.log(passwords);
    if (passwords == null) {
        let json = []
        json.push({ website: website.value, username: username.value, password: password.value })
        alert("password saved")
        localStorage.setItem("passwords", JSON.stringify(json))

    } else {
        let json = JSON.parse(localStorage.getItem("passwords"))
        json.push({ website: website.value, username: username.value, password: password.value })
        alert("password saved")
        localStorage.setItem("passwords", JSON.stringify(json))
    }


    showPass()
})
