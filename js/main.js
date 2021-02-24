/**
 * Người tạo: Tân
 * Ngày tạo:    22/02
 * Nội dung:Bài tập cộng thêm js, buổi 6
 * 
 */

 function getEle (ele){
     return document.getElementById(ele);
 }


getEle("btn1").addEventListener ("click", createDiv);

function createDiv (){
    var tb1 = getEle("tb1");
    for (i=1;i<=10;i++){
        if (i%2==0){
            var div1 = document.createElement("div");
            var textDiv1 = document.createTextNode("div" + [i]);
            div1.appendChild(textDiv1);
            tb1.appendChild(div1);
            div1.style.backgroundColor = "red";
        }
        else{
            var div1 = document.createElement("div");
            var textDiv1 = document.createTextNode("div" + [i]);
            div1.appendChild(textDiv1);
            tb1.appendChild(div1);
            div1.style.backgroundColor = "aqua";
        } 
    }
}

getEle("btn2").addEventListener ("click", prime);

function prime(){
    var input2 = +getEle("input2").value;
    var tb2 = getEle("tb2");
    var num = Math.floor(input2);
    var primeArray = [];
    if(num<2){
        tb2.innerHTML="Không có số nguyên tố thỏa yêu cầu"
    }else {
        if (num >3){
            primeArray.push(2);
            primeArray.push(3);
            for(i=4;i<=num;i++){
                    var count =0;
                for (j=2;j<=Math.floor(Math.sqrt(num));j++){
                    if (i%j == 0){
                        count ++;
                    }
                }
                if (count==0){
                    primeArray.push(i);
                }
            }
        }else{
            if(num ==2) {
                primeArray.push(num);
            }
            if(num ==3) {
                primeArray.push(2);
                primeArray.push(3);
            }
        }
        tb2.innerHTML= "Mảng số nguyên tố: " + primeArray;
    }
   

}