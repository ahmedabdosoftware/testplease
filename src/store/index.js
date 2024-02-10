import { createStore } from 'vuex'
import axios from "axios";


export default createStore({
  state: {
    // products:["ali","ahmed"]
    products:[],
    catogery:[],
    token:JSON.parse(localStorage.getItem('token')) || null,
    
    // staticProducts: [
    //   {
    //     name: "summer collection",
    //     kind: "keyboard",
    //     price: 498,
    //     key: 1,
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB8CyDKJBg1Idxh1pQV0BwaSeZE3Z7u1M5tA&usqp=CAU",
    //   },
    //   {
    //     name: "summer collection",
    //     kind: "maous",
    //     price: 298,
    //     key: 2,
    //     // img: "https://cdn.shopify.com/s/files/1/0517/5590/9295/products/zero-zr6806-keyboard-mouse-combo_1024x1024.jpg?v=1670316801",
    //     image: "https://m.media-amazon.com/images/I/71SmrOjHDFL.__AC_SX300_SY300_QL70_ML2_.jpg",
    //   },
    //   {
    //     name: "summer collection",
    //     kind: "computer bag",
    //     price: 198,
    //     key: 3,
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5YlbBb2_c54i-Pv_cLx85is081ot1ARhgOA&usqp=CAU",
    //   },
    //   {
    //     name: "summer collection",
    //     kind: "computer bag",
    //     price: 198,
    //     key: 4,
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQkQSy_sjvfzpe_aVbE7GZQATp0ULZfFLtjg&usqp=CAU",
    //   },
    //   {
    //     name: "summer collection",
    //     kind: "keyboard",
    //     price: 198,
    //     key: 5,
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFBTrs0_O2lDfrv1LlWOTvPWrOlBr10gYa-A&usqp=CAU",
    //   },
    //   {
    //     name: "summer collection",
    //     kind: "screen",
    //     price: 198,
    //     key: 6,
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZl463wq1QoTxeTN-GVsJJEbEK1_HcGzh6lw&usqp=CAU",
    //   },
    //   {
    //     name: "summer collection",
    //     kind: "screen",
    //     price: 198,
    //     key: 7,
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSTtGWOI8blbxRNJVsPxep8Oz86Lz7cZWXqg&usqp=CAU",
    //   },
    //   {
    //     name: "summer collection",
    //     kind: "screen",
    //     price: 198,
    //     key: 8,
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk0UOArKhz2BFiNUjwofg72xda44ARg20nEQ&usqp=CAU",
    //   },
    //   {
    //     name: "summer collection",
    //     kind: "keyboard",
    //     price: 198,
    //     key: 9,
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUof-4StmY-ULSCWvJivM-lYA7XoYDwmvBRw&usqp=CAU",
    //   },
    //   {
    //     name: "summer collection",
    //     kind: "pools",
    //     price: 338,
    //     key: 10,
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxAexdVWH5im3_naeoYOew94UBxRFMnut34A&usqp=CAU",
    //   },
    //   {
    //     name: "summer collection",
    //     kind: "pools",
    //     price: 338,
    //     id: 11,
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtneQOCZmzYS1uZMDtQg3ehKDxP_hHVSByQ&usqp=CAU",
    //   },
    //   {
    //     name: "summer collection",
    //     kind: "pools",
    //     price: 338,
    //     key: 12,
    //     image: "https://m.media-amazon.com/images/I/61kCTnNQe6L._AC_SX569_.jpg",
    //   },
    // ],
  },
  getters: {
    sliceCatogery (state) {
      return state.catogery.slice(0, 4)
    },
    sliceProducts (state) {
      return state.products.slice(0, 12)
    },
    isLogin: state => {
      // return
   if(state.token){
    return true
   }
    }

  },
  mutations: {
    storeProduct (state,data) {
      state.products=data
      console.log("i am runing products ")
      console.log(state.products)
      console.log(state.products[0].images[0])
    },
    storeCatogery (state,data) {
      state.catogery=data
      console.log("i am runing catogery ")
      console.log(state.catogery)
    },
    storeToken (state,data) {
      state.token= data
      // localStorage.getItem('token')
      localStorage.setItem('token', JSON.stringify(data))
      
      console.log("i store token",state.token)
    },
    logOut (state) {
      state.token= null
      // localStorage.getItem('token')
      localStorage.removeItem('token')
      console.log("i remove token")
    }
  },
  actions: {
    
    fetchProduct (context) {
      return  axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        console.log(res.data);
        context.commit('storeProduct', res.data)
       
      })
      // .catch((error) => {
      //   console.log(error.message);
      //   console.log(error);
       
      // });
    },
    fetchCatogery(context) {
      return  axios
      .get("https://api.escuelajs.co/api/v1/categories")
      .then((res) => {
        console.log(res.data);
        context.commit('storeCatogery', res.data)
       
      })
      // .catch((error) => {
      //   console.log(error);
       
      // });
    },
    filterProduct (context,dataSend) {
       axios
         .get(
           `https://api.escuelajs.co/api/v1/products/?${dataSend[1]}=${dataSend[0]}`)
         .then((res) => {
           console.log(res.data);
           console.log(dataSend);
           context.commit('storeProduct', res.data)
         })
         .catch((error) => {
           console.log(error);
         });
    },
    singUp (context,userINfo) {
      return axios.post(
           `https://api.escuelajs.co/api/v1/users/`,userINfo)
         .then((res) => {
           console.log(res.data);
           console.log(userINfo);
         })
        
    },
    singIn (context,userINfo) {
      return axios.post(
           `https://api.escuelajs.co/api/v1/auth/login`,userINfo)
         .then((res) => {
          //  console.log(res.data.access_token);
           context.commit('storeToken', res.data.access_token)

         })
        
    },


  },
  
})
