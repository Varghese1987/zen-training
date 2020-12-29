var cont1_div = document.createElement('div');
cont1_div.setAttribute('id', 'cont1_div');
cont1_div.setAttribute('class', 'cont1_div_style');
// document.body.appendChild(cont1_div);
document.getElementById('body').appendChild(cont1_div)

var cont1_form = document.createElement('form');
cont1_form.setAttribute('id', 'cont1_form');
cont1_form.setAttribute('class', 'formControl');
cont1_form.setAttribute('method', 'post');
cont1_div.appendChild(cont1_form);

var cont1_text1 = document.createElement('input');
cont1_text1.setAttribute('type', 'text');
cont1_text1.setAttribute('id', 'cont1_text1');
cont1_text1.setAttribute('placeholder', 'First Name');
cont1_form.appendChild(cont1_text1);

var cont1_br1 = document.createElement('br');
cont1_form.appendChild(cont1_br1);
var cont1_br2 = document.createElement('br');
cont1_form.appendChild(cont1_br2);

var cont1_text2 = document.createElement('input');
cont1_text2.setAttribute('type', 'text');
cont1_text2.setAttribute('id', 'cont1_text2');
cont1_text2.setAttribute('placeholder', 'Last Name');
cont1_form.appendChild(cont1_text2);

var cont1_br3 = document.createElement('br');
cont1_form.appendChild(cont1_br3);
var cont1_br4 = document.createElement('br');
cont1_form.appendChild(cont1_br4);

var cont1_button = document.createElement('button');
cont1_button.innerHTML = "Add";
cont1_button.setAttribute("type", "button");
cont1_button.setAttribute("onclick", "addData()");
cont1_form.appendChild(cont1_button)

var table = document.createElement('table');
table.setAttribute('class','table table-hover');
document.getElementById('root').appendChild(table);

var thead = document.createElement('thead');
thead.setAttribute('class','thead-dark');
table.appendChild(thead)

var table_row = document.createElement('tr');
thead.appendChild(table_row);

let head = ["First Name","Last Name"]
for(let i=0; i<head.length;i++){
    let th = document.createElement('th')
    th.innerHTML = head[i]
    table_row.appendChild(th)
}

var tbody = document.createElement('tbody');
tbody.setAttribute('id','tdata');
table.appendChild(tbody)


let array=[]
function addData(){
    let data={
        fName:document.getElementById('cont1_text1').value,
        sName:document.getElementById('cont1_text2').value
    }
    array.push(data)
    loadData(array)
}

function loadData(arr) {

    // for (let i = 0; i < arr.length; i++) {
        var temp="";
        arr.forEach((u) => {
            temp += `<tr>
                <td>${u.fName} </td>
                <td>${u.sName} </td></tr>`
        })
        document.getElementById("tdata").innerHTML = temp;

    // }
}