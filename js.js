// Link khoá học: https://www.youtube.com/watch?v=orIXdOPFWeM&list=PL_-VfJajZj0VgpFpEVFzS5Z-lkXtBe-x5&index=32

// Có 3 loại function : 
    // 1- Declare function,chỉ expr func có tính chất hosting
    // 2- Expression function(Ex: var s = function(),function trong object và callback cũng là expression fnc) 
    // 3- Arrow function var a = (agr1,arg2)=> arg1+arg2;
// OBJECT 
    // Khai bao
        //var objName = {name:'thu',tuoi:8}
        // có thể var objName ={'name':'thu", 'tuoi':18}
        // hoặc : var gioitinhKey ='gioitinh'; var objName = {name:'thu',tuoi:8,[gioitinhKey]:'nam'}
        // có thể chứa function: var objName = {name:'thu',tuoi:8, name2: function(){this.name}} 
        //(this.name tương đương objName.name - tức lên giá trị 'thu')

    //Them key moi
        // objName.diachi = '59 Tran Phu'
        // hoặc : objName['dia-chi'] ='59 Tran Phu' (để đặt tên key có dấu -)
    // Truy cập
        // objName.name hoặc objName['name']
    // CÁCH GỌI TÊN: Trong object
        // 1 Function ---> gọi là Phương thức (method)
        // 1 giá trị ---> gọi là Thuộc tính ( property)

        // Lấy kiểu dữ liệu : dùng hàm typeof - ex: typeof(objName) - trả về 

// OBJECT CONSTRUCTOR

///////// CODE
//function
var user = function (firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
}

user1 = new user('Thu','Nguyen','Avarta');

var arrA = [
    {name:'thu',age:32},
    {name:'Trang',age:14},
    {name: 'thu',age:23}
];
var callbackV = a  => a.diachi='tran phu';
var map2= arrA.map(callbackV);
console.log(map2)

