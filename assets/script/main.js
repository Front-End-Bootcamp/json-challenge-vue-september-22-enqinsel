import dataJson from '/data.json' assert {type: 'json'};


function getAssistant(groupName) {
    let assistantArray = dataJson.filter(function (filt) {
        return filt.type === "assistant"
    })
    return assistantArray.find(function (fin) { return fin.group === groupName })
}


function getStudentsName(groupName) {
    let studentsArray = dataJson.filter(function (filt) {
        return filt.type !== "assistant" && filt.group === groupName
    })
    return studentsArray.map(function (maP) { return maP.name })
}


function getGroup(groupName) {
    let assistant = getAssistant(groupName);
    let students = getStudentsName(groupName);

    return {
        group: groupName,
        students: students,
        assistant: assistant.name,
    };
}

console.log(getGroup("SteelBlue"));