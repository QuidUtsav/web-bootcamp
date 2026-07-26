const { log } = require("node:console");

const profile ={
    "fullName": "Utsav Thapa",
    "email": "utsav@gmail.com",
    "numberOfLike": 100,
    "comments": ["x", "y", "z"],
    "bookmarks": false,
    "friendsName": ["xyz", "abc"]
}

function  like(){
    profile.numberOfLike++;
}
like();

function editProfile(fullname, email){
    profile.fullName = fullname;
    profile.email = email;
}
editProfile("hari","h@.com");

function editComments(operation,item){
    if (operation === "add"){
        profile.comments.push(item)
    }
    else if(operation==="remove"){
        profile.comments.filter((comment)=>{
        profile.comments = profile.comments.filter((comment) => comment !== item);
    })
    }
    else{
        return "error"
    }
    return "operation done."
}
function editFriends(operation,item){
    if (operation === "add"){
        profile.friendsName.push(item)
    }
    else if(operation==="remove"){
        profile.friendsName.filter((comment)=>{
        profile.friendsName = profile.friendsName.filter((comment) => comment !== item);
    })
    }
    else{
        return "error"
    }
    return "operation done."
}

function toggleBookmark(){
    if(profile.bookmarks){
        profile.bookmarks=false;
    }else{
        profile.bookmarks=true;
    }
}
toggleBookmark();
toggleBookmark();
toggleBookmark();
toggleBookmark();
toggleBookmark();
editComments("remove","y")
editFriends("add","ramesh")
console.log(profile);