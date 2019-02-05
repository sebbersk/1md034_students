
/*function menuItem(name,calories,gluten,lactose){
 this.name= name;
 this.calories=calories;
 this.gluten=gluten;
 this.lactose=lactose;
 this.info= function(){
   return this.name + " " + this.calories;
 }
}

let fstBurger= new menuItem("American steakhouse","500 Kcal",true,false);
let sndBurger= new menuItem("Cheese burger","250 Kcal",false,true);
let trdBurger= new menuItem("Cheese and Bacon","300 Kcal",true,false);
//var vm = new Vue({

  /*el: '#myIDE',
  data: {
   burgers: 'Burger 1' + " " +'Burger 2' + " " + 'Burger 3',
   Burger1: fstBurger.name,
   Burger2: sndBurger.name,
   Burger3: trdBurger.name,
   //fstBurgerImg: 'https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary.jpg',
   sndBurgerImg: 'https://cdn.arstechnica.net/wp-content/uploads/2018/08/IF-Burger-800x603.jpg',
   trdBurgerImg: 'https://www.checkers.com/wp-content/uploads/2017/03/Bacon-Roadhouse-V1-RGB.jpg',
   burger1Info: [{info:fstBurger.calories},{info:fstBurger.gluten},{info: fstBurger.lactose}],
   burger2Info: [{info:sndBurger.calories},{info:sndBurger.gluten},{info: sndBurger.lactose}],
   burger3Info: [{info:trdBurger.calories},{info:trdBurger.gluten},{info: trdBurger.lactose}
   ]
  }
})*/




var model= new Vue ({
  el: '.wrapper',
  data: {
    Burger1: menu[0].name,
    Burger2: menu[1].name,
    Burger3: menu[2].name,
    fstBurgerImg:menu[0].Img,
    sndBurgerImg: menu[1].Img,
    trdBurgerImg: menu[2].Img,
    b1Gluten:menu[0].gluten,
    b1Calories: menu[0].calories,
    b1Lactose:menu[0].lactose,
    b2Gluten:menu[1].gluten,
    b2Calories:menu[1].calories,
    b2Lactose:menu[1].lactose,
    b3Gluten:menu[2].gluten,
    b3Calories:menu[2].calories,
    b3Lactose:menu[2].lactose,
    /*burger1Info: [{info:fstBurger.calories},{info:fstBurger.gluten},{info: fstBurger.lactose}],
    burger2Info: [{info:sndBurger.calories},{info:sndBurger.gluten},{info: sndBurger.lactose}],
    burger3Info: [{info:trdBurger.calories},{info:trdBurger.gluten},{info: trdBurger.lactose}],*/
    weight:"bold"
  }
})

var vm= new Vue ({
  el:'#orderID',
  data:{
    oInfo:[],
    orderSended:false,
    orders:[]
  },
  methods: {
    markDone:function(){
      if(this.oInfo.length> 0){
        this.oInfo=[];
      }
      var arr= getOrderInfo();
      for (var i=0; i < arr.length; i++){
        this.oInfo.push(arr[i]);
      }
      this.orderSended=true;
      this.orders.push(arr);
      console.log(this.orders);
    }
    /*resetOrder:function(){
      if(this.oInfo.length> 0){
        this.oInfo=[];
      }
    }*/


    }


})

/*var m= new Vue ({
  el:'#order',
  data:{
    Name: fullName
  }
})
*/
