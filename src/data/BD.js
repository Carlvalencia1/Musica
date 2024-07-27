import Swal from 'sweetalert2';
let members = [];
const saveRegister = (user ,password,email) => {
    members.push({img:'user.png',user,password,email});
    return true;
};
const getMember = () => {
    if(members.length === 0)
        Swal.fire({
            icon: "error",
            title: "oops!",
            text: "There is no data yet!",
          });
    else
    return members;
}



export {saveRegister, getMember};

