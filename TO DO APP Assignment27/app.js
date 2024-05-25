
  const firebaseConfig = {
    apiKey: "AIzaSyBiHWnxkBmgLpa1ir5sYh_K74ljuzU0XZU",
    authDomain: "js-assign-b0be2.firebaseapp.com",
    databaseURL: "https://js-assign-b0be2-default-rtdb.firebaseio.com",
    projectId: "js-assign-b0be2",
    storageBucket: "js-assign-b0be2.appspot.com",
    messagingSenderId: "1079032108834",
    appId: "1:1079032108834:web:4d7ebca0a4c5ebf27cb77b"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

//                database Get 
function add() {
    var input = document.getElementById("inptext");

    var key = Date.now().toString(26);

    var todos = {
        value: input.value,
        key,
    };

    firebase.database().ref("todos/" + key).set(todos);

    input.value = "";

}
//             database end

//              show frontend work start
firebase.database().ref("todos").on("child_added", function (data){
    
    var liElement = document.createElement("li")
    var liText = document.createTextNode(data.val().value);

    liElement.appendChild(liText);
    console.log(liElement)
    var editbtn = document.createElement("button");
    var editbtnText = document.createTextNode("Edit");

    editbtn.appendChild(editbtnText);

    editbtn.setAttribute("onclick", "Edit(this)");

    editbtn.setAttribute("id", data.val().key);

    liElement.appendChild(editbtn);

    editbtn.className = "edit-btn"

    var delbtn = document.createElement("button");
    var delbtnText = document.createTextNode("Delete");

    delbtn.appendChild(delbtnText)

    delbtn.setAttribute("onclick", "del(this)");

    delbtn.setAttribute("id", data.val().key);

    delbtn.className = "delete-btn"

    var list = document.getElementById("list");
    
    liElement.appendChild(delbtn);

    list.appendChild(liElement);
})
function delAll(){
    firebase.database().ref("todos").remove()
    var list = document.getElementById("list");
    list.innerHTML = "";

}

function del(a){
    firebase.database().ref(`todo/${a.id}`).remove()
    a.parentNode.remove();
}

function Edit(a){
    var updatedValue = prompt(
        "Enter updated value",
        a.parentNode.firstChild.nodeValue
    )
    // console.log(b.parentNode.firstChild.nodeValue);
    
    // var userInput = prompt("Enter Updated Value");

    firebase.database().ref(`todos/${a.id}`).set({key: a.id, value: updatedValue,})

    a.parentNode.firstChild.nodeValue = updatedValue;
}


