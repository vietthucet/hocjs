// Link khoá học: https://www.youtube.com/watch?v=orIXdOPFWeM&list=PL_-VfJajZj0VgpFpEVFzS5Z-lkXtBe-x5&index=32

// Có 3 loại function : 
    // 1- Declare function,chỉ expr func có tính chất hosting
    // 2- Expression function(Ex: var s = function(),function trong object và callback cũng là expression fnc) 
    // 3- Arrow function
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

var s= function () {
        console.log('xin chao');
};
s();

//Object
var objTest = {
    name: 'thu',
    tuoi: 22,
    getName: function () {
        return this.name;
    }
};
objTest.namsinh = 1989;
objTest['dia-chi'] = '59 Tran Phu';
console.log(objTest['name'] + objTest.tuoi);
console.log(objTest.getName());

// Object Constructor

function User(firstName,lastName,avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
}

hhehe = (a,b)=>a+b;
console.log('so diem=='+hhehe(4,5));

myObject ={};
myObject.hoten ='Nguyen Tan Viet Thu';
myObject.tuoi ='92';
myObject['nam-sinh'] = '1990';
console.log(myObject)
myObject['mai-ha-buoi'] = 'ahihi';
console.log(myObject)
console.log(myObject.hoten)
delete myObject['hoten']
console.log(myObject)
