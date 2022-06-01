let arr_names = ["Alex" , "Adam" , "Jordan" , "Suxrob" , "Bekzod"]
let name = prompt("Как вас зовут?")
if(arr_names.includes(name) == true){
    if(confirm("Удалите профиль пользователя" + " " +name )){
        alert(
            "Пользователь" + " " +name + " " + " успешно удален" 
        )
    }
    else{
        alert(
            "Пользователь" + " " +name + " " + "не удален"
        )
    }        
}
else{
    alert(
        "Пользователь" + " " +name + " " + "не найден" 
    )
}