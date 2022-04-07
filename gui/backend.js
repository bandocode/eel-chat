const settingsUsernameBox = document.querySelector("#settingsUsernameBox");
const settingsStatusBox = document.querySelector("#settingsStatusBox");
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const color3 = document.querySelector("#color3");
const color4 = document.querySelector("#color4");
const color5 = document.querySelector("#color5");
const color6 = document.querySelector("#color6");
const color7 = document.querySelector("#color7");
const color8 = document.querySelector("#color8");
const color9 = document.querySelector("#color9");
const color10 = document.querySelector("#color10");
const color11 = document.querySelector("#color11");
const settingsServerPort = document.querySelector("#settingsServerPort");

const userProfilePhoto = document.getElementById("userProfilePhoto");
const username = document.querySelectorAll(".username");
const rootVars = document.querySelector(':root');


// load settings
eel.expose(loadSettings)

function loadSettings(sf) {
    let settingsFile = JSON.parse(sf);

    // update pfp + username
    userProfilePhoto.src = settingsFile["avatar"];

    for (let i = 0; i < username.length; i++) {
        username[i].innerHTML = settingsFile["username"];
    }

    // Settings tab values
    settingsUsernameBox.value = settingsFile["username"];
    settingsStatusBox.value = settingsFile["status"];
    settingsServerPort.value = settingsFile["internalServerPort"];

    color1.value = settingsFile["colorScheme"]["color1"];
    color2.value = settingsFile["colorScheme"]["color2"];
    color3.value = settingsFile["colorScheme"]["color3"];
    color4.value = settingsFile["colorScheme"]["color4"];
    color5.value = settingsFile["colorScheme"]["color5"];
    color6.value = settingsFile["colorScheme"]["color6"];
    color7.value = settingsFile["colorScheme"]["color7"];
    color8.value = settingsFile["colorScheme"]["color8"];
    color9.value = settingsFile["colorScheme"]["color9"];
    color10.value = settingsFile["colorScheme"]["color10"];
    color11.value = settingsFile["colorScheme"]["color11"];

    rootVars.style.setProperty('--body', color1.value);
    rootVars.style.setProperty('--sidebar-main', color2.value);
    rootVars.style.setProperty('--sidebar-secondary', color3.value);
    rootVars.style.setProperty('--main-font-color', color4.value);
    rootVars.style.setProperty('--secondary-font-color', color5.value);
    rootVars.style.setProperty('--section-title-color', color6.value);
    rootVars.style.setProperty('--section-border-color', color7.value);
    rootVars.style.setProperty('--menu-bar-border', color8.value);
    rootVars.style.setProperty('--status-font-color', color9.value);
    rootVars.style.setProperty('--message-box', color10.value);
    rootVars.style.setProperty('--save-settings-button-border', color11.value);

}

settingsSubmitBtn.onclick = function() {
    if (settingsUsernameBox.value.length <= 16) {
        let colors = [
            color1.value,
            color2.value,
            color3.value,
            color4.value,
            color5.value,
            color6.value,
            color7.value,
            color8.value,
            color9.value,
            color10.value,
            color11.value
        ]

        let misc = [
            settingsUsernameBox.value,
            settingsStatusBox.value,
            settingsServerPort.value
        ]
        eel.updateSettings(misc, colors)
    }

}


addFriendByIP = document.querySelector("#submitFriendRequestIP")

addFriendByIP.onclick = function() {
    console.log("test")
    parseText = document.querySelector("#sendFriendRequestIP").value
    eel.connectToPeer(parseText)
}