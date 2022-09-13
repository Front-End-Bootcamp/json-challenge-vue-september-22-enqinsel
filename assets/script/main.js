import dataJson from '/data.json' assert {type: 'json'};


// once asistanlari cektim
function getAssistant(groupName) {
    // filter ile tipi asistan olanlari bir diziye aktardim sonra o diziden gelen ilk grup adini cektim.
    let assistantArray = dataJson.filter(function (filt) {
        return filt.type === "assistant"
    })
    return assistantArray.find(function (fin) { return fin.group === groupName })
}

// sonra ogrencileri cektim
function getStudentsName(groupName) {
    //yine filter ile tipi asistan olmayanlari ve grup adlarini cikartarak bir diziye aktardim sonra o dizidekileri map ile baska diziye aktardim.
    let studentsArray = dataJson.filter(function (filt) {
        return filt.type !== "assistant" && filt.group === groupName
    })
    return studentsArray.map(function (maP) { return maP.name })
}

// Objemizi parcalara ayirdiktan sonra getGroup ile istedigim sablonda cagirarak sonucumu elde ettim.
function getGroup(groupName) {
    let assistant = getAssistant(groupName);
    let students = getStudentsName(groupName);

    return {
        group: groupName,
        students: students,
        assistant: assistant.name,
    };

}

// Bu sonucu DOM ile ekrana yansittim
let input = document.querySelector("#input")
let buton = document.querySelector("#buton")
let text = document.querySelector("#text")
let del = document.querySelector("#del")


// Enter key
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("buton").click();
    }
});


buton.addEventListener("click", run)

function run() {
    if (input.value !== getGroup(input.value).group) {
        alert("asdasd")
    } else {
        let p = document.createElement("p")
        p.innerHTML = `
       <b>Group Name:</b> ${getGroup(input.value).group}<br>
       <b>Students:</b> ${getGroup(input.value).students}<br>
       <b>Assistant:</b> ${getGroup(input.value).assistant}
        `
        p.classList.add("border-bottom", "border-success")
        text.append(p)
    }
}
// !!All delete dedikten sonra tekrar eklenmesini istiyorsaniz sayfayi yenileyin...
del.addEventListener("click", function () { text.style.display = "none" })