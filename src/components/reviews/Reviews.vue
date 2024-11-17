<template>
    <!--==================== REVIEWS ====================-->            
    <section class="review">
      <div>
        <font-awesome-icon class="icon" :icon="['fas', 'quote-left']" />
        <pre>
Lorem ipsum dolor sit amet consectetur.
 elit, Quis amet perspiciatis quam 
 quisquam qui facere hic vero 
 accusantium? Laborum, quam
        </pre>
        <div class="cont-star">
            <img
              class="star"
              src="https://img.freepik.com/free-vector/start_53876-25533.jpg"
            />
            <img
              class="star"
              src="https://img.freepik.com/free-vector/start_53876-25533.jpg"
            />
            <img
              class="star"
              src="https://img.freepik.com/free-vector/start_53876-25533.jpg"
            />
            <img
              class="star"
              src="https://img.freepik.com/free-vector/start_53876-25533.jpg"
            />
            <img
              class="star"
              src="https://img.freepik.com/free-vector/start_53876-25533.jpg"
            />
          </div>
          <img src="data:image/jpeg;base64,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">
          <span> ane ali</span>

        </div>
    
      <div>
        <font-awesome-icon class="icon" :icon="['fas', 'quote-left']" />
        <pre>
Lorem ipsum dolor sit amet consectetur.
 elit, Quis amet perspiciatis quam 
 quisquam qui facere hic vero 
 accusantium? Laborum, quam
        </pre>
        <div class="cont-star">
            <img
              class="star"
              src="https://img.freepik.com/free-vector/start_53876-25533.jpg"
            />
            <img
              class="star"
              src="https://img.freepik.com/free-vector/start_53876-25533.jpg"
            />
            <img
              class="star"
              src="https://img.freepik.com/free-vector/start_53876-25533.jpg"
            />
            <img
              class="star"
              src="https://img.freepik.com/free-vector/start_53876-25533.jpg"
            />
            <img
              class="star"
              src="https://img.freepik.com/free-vector/start_53876-25533.jpg"
            />
          </div>
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBERERERERIRERERERERERERERERDxEQGBQZGRgYGBgcIS4lHB4rIRgYJjgmKzAxNTU1GiQ7QDszPy40NTQBDAwMEA8QGBISGjchISExNDQ0MTQ0NDQxNDE0NDQxNDE0NDQ0MTExMTQ0MTE0NDQ0NDQxMTQ0NDE0MTQ0NDQ0Mf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAACAwABBAUGB//EADoQAAIBAgQCCAQDBwUBAAAAAAECAAMRBBIhMQVRBhMiMkFhcYFikaGxcsHRBxQjQlKC8DOSorLhFv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHhEBAQACAgMBAQAAAAAAAAAAAAECEQMhEjFBUSL/2gAMAwEAAhEDEQA/AMW0u0K0u06uYQIQEloQEIgEICWBCAhQgQwJYEICAIEICXaXaAIEu0ICXaANpdoYEsLCl5ZeWMCy7QFZZMsbaURAXllFYy0loCisErHlYBWAsiDaMIgkQgCIJEYRBIgLMAiMMAwAIgmGYBlAmVCkkVJJJIEkkkgNAktLAl2hAgQ1EsCGBAq0JRLtLAgS0sCQCGBAlpLQrS7QqgIVpYEsCAIWMCQlWHaEBllNZRckADck2Amj6Q9J6eF7CDrKpHdvZEHNj+Qnn/EuMV8USarswJ0QHLSXyC/rcybWS13+O6U4SkSoc1GG4pjMP9231mv/APtKZ2o1Pd0Gk4REO97e15kolhfT/PSTbXi7ml0tw5ALJVT+1WA9wZteH8To4gE0qgYjvLqrr6qdZ5e9YjwFve8LD4pkdalNijqdGU2a3iL+Ijaaet2lETW8D4quJpg3Gde+Nve02dppAEQCI4iLYQFEQTDMEwhZEBowwGgLMAwzBaABlSGVCiEuADCECZpJdpIQ8QpQhAQLEMSgIQECAQpBCAgRRCAkUQgIVAJdpLS7QIojVWUgjFEIiiaTpXxcYWgSLdY5yIPufS15vW0Gug3J8p5B0m4scViGYf6aEpTHwjx97faRZGuaoXYs5LFjckw08rep0ESg9yfvM3C0Cx01J0HL19Jm3TpJsLLbfU+emvpBznwHz1nQYTo6zasdZv6HRJHWxvfTtTneXGOs4cvrz3qyf0MNKRBvPQMX0MCp2GLH4gJoMfwColyo7o1F9z5c4nLKl4rGrwGOqYeolRNxow/lZLi6n5D5T0nAY+nWRWQ94Xt+XrPL3e2hFvvNl0fxjJUyX0OoGqn2I2M6SuOUekkQGEXgK/WJcm5FxfYkeFxzjnE2yQwgGNYRbQhZi2jDAMBbQGhtAaAtoMJoMKkIQZYMA7SQbyQjMEKCsKEEBCEoQhCrAhWlCGIFqJYkEsQLAlgSQ1gEojALQFjQJEcx0z4oaWHdVNmqDICL3sd9fS88tE6/9ouKvXSkD3EzEeZNh/1+s5ASNw6nv9J0XR6hmcXGnhptynPYZdf83nY9G6RzX8NPlOXLeno4Z3t1uBw206PA4Qb76TAwVLQTeYLa080nbvlkNcKDuJr+KcPQgkD2Gl5u12muxjXm8pNOeNu3jfSvhZp1WbL2Xu4tawPiJzaVGRgVJBBuDyM9O6Y4QtSY2JtysbefP6zzKovnqPLeduLLcc+XHWT0jorXz082xYEkfEDb9fnN64nJdC6lgycmJHmjKp+4PynWtO0ee+2O8U0dUiGlQDQDCYxZgC0BoRgNCAaDLMqGlS7ypcCXkkvJAzxCEARiwixCEGEsAxDEFYYgQQhBEMCBYhiUBCEAljb6RaRh9JEeSdNmJxbX/oX/ALN+pnPidX+0HDFMXnto6Lr5gWnLKJHSMnCU2Y2WwPM7TfYOri8PYqUcf06MD9jNVhqT5GZBe2/kJn8OFQNTyZnD6OoRbjtAbsNrEm+u05Zdu+M1+u66NdLVq1Fo1afV1CNDrlJA5Hadm1UIhfkL6TzLiOGOGLMpzinkenUCsiPcgOFDHMLFtjf1M9I4bUFTCo3i4H1E43306fNuVxPTTH1CaeHw+Rb26yoCWt66AfWVSwGIq/xKmLanV3spJAPL0+8V0wwtVbqjspAXIiL32zDMCx27Oa2m9rzU4Th2LenScNU641ADTcU2RaQRe1nVVObPnNrEWyi9xc3uz4akv1vqlOtUo16dezPTUlaiiyOhBIPIHQgj0nlboSTa+ht7XsLz2qpRKUHDEFshuRttPN+K8EqYYU1cAOafWv8ACQbLc+t9PKXhvdjPLOpWb0PYl7/ysiKR4FlNj72P+WnZNOW6MYUqri1jTYa/iAP6mdQTcX5iemPJl7KqRDR1SJaaQpoBhNAMAWi2jDFtAWZUsyoEliVLBhUkkvJAzgIxYCwxCCEICCsMQDWFBWFAsQxAEMQDEIQRCEINY28UsMjxgee/tDqKzItjnD5VAAu11zE/8lHznH4nCvTcBra91gbqRe1x5aTrem+FqPWw7mmSlQZQy275Iypc7WuN/OYfEOAilT6x6hZw3eNu8LZt/AHTzttM1uD6KuufK1iDuDPQsFwyguq00B3JCieU8MxRSoHvubm2g1M9T4VjFamDfw1+U8nJNZPdhd4tB01xFzTp7BRf1M7Lo1VH7pSVtCALieZ8WxJq4pmqqVRXsqgEkoDvpvPRej2OoVKShAzta3ZvmHtbT3ksskL9dMKCOtmUMPMAyxg6ajsqq+gtMXA12y3s4W+1QANv9o3FY0ZZdzXbnq76afihDdgWGdlW52sTrOX6SOMRVZh2s2SmpvcFATt9T6TZcQ4gyVKdRRfLUQa7do5foCT7TAdM1YgaZFUehYWB9lzfMTpw473kzzZa1iDgwtUxGn86elsgX8ptdhMHAJlqVgNNKdvZf/ZnNPRHmpLxLRzxLSoS0AwmgGEC0WxhvEs0qqLQSZTGBeAwmWpi7ywYB3kgZpIG0WGItIYkBiGsAQ1gMWXKlwLWMEWsYIBCEIIhCEGsZluPpFrGg2gaTpLSzYVz40sj2AuQEa5t7XnnPSLixqsEU3RR4bZiSSfqbeWvjO46bcV6mgaaa1KymmeYQ728zt7+U8uxCFWKncaH18Zmtxk4E3FvFT9J1fCuIsFK8hOMw1TIwPsfSb3C1cpDbqftOPJjt6eLLTc4XE0ncM3bIJIG9zO64ZxegtrLksLEFRmJA3nnOCpBaquEWol7lbC9p32GxyOqr/HCgZSmqqRba99vnOOUkrvO52279IcL3S+U3tY7k+0XVrZxmXu+EujSW2fIq72FufjE1KwQHwAuZm9pJJemo4qgz00XUqGqN+KxVQfmT/bLwqd889b+w/Qy6aMxeo/fext/So7q/L6kyBwqe1ve5Gk9uGPjjI8XJl5ZWrwo7Tt/U2nplSZDROGBAF9+1f1JEaxm4wU0U0a0S8IU0U0YxiXMIBjEO0Y7THdpVQtBzRbNAzQMgNIWtEq8pmgNzyRGaSBv1MYDEqYxZENWGsWIYMKYDCEAQxAJYQMWIQMBghiLBlgwGqYRN9ItTLzQjiOmFXJi6buMypSaoo5vrp7XB95x2Kwr3W92dkV255mF7Tu+lyBnwxuLI4LZhfMSygj0tvMPo/wr974g9PYFhcj+VVLsT6gKB6kTNbjh6GGdjop7OpvpYDU3mdRqZd9Qdx+k6TptgUw+LfD0kKBVRnuSSSRz9APlNPhsHm0nPLKO2GNra8DxCq4zaq2zcj5z0rACjZSctuc8oweCcVCq3BvO/wCD4Cq6qHYhRyAvPPlre49OO/Ht02Mqoq9nW/L8pocfTYFM27EnL4AWNptqGHCnctl2J11gI1MV0663VsGRidlLCym/hrbWMb/UrGU/myNUx8ZhoMzXPdp3t8T8/a9vW/KbHjODfDnIdRU0puO66nx9QPD9Zg2sLDYfkBb8p7XiOpnQe/uITNFk/SCzSi3MS5kd4pmhAuYh2hs0Q7SoB2mO7Q3aYztCqZoBMFmglpFODSyYgNDDQLzSpVpIHRKYxTEKY1TKycphgxSmMUyKYIYMWIQMBgMl4IMK8C7wgZVOmzmyqWPJQSZn0+GNcB2CE7IBne3pew9zAwwYynTd+6pa25A0HqdhOhw3CaaW7HWP8ZuB6+H0mXXw4CNm12sALKuvgJm1dPO+O4Pshsq1CnWEoBmBzrl1bbnteO6DKtM061u0zt1h3JuSp+k6zEYVWUi3hND0bw+StUpHTq62g+BwGH1zfKS1uTUc9014bWXGVKlYX69y1N1uUakBZAp5hQARz18bnH4fw6xBI00nr1fA061M0qyB0OwO6kbFT4HzE5fiXRmpR7VK9WmOQ/iKPiUb+o+Qnm5Mcvj08WePq9VzS8NAfNbXT2nT4FGC2+0wadEkg8xNnhzlHLznGOuXpkIlhrvNB0xrJTwla5sWpsq665iLCbipjLkJTVqtQ6hEGYjzPIeZmRw/oo1WsmJxxVmQ5qOGHapI19Gc/wAzDwA7I+LS28cba53KY91mU8B+84CiHDU3amlVcw7dNit8pGngSCJzmJ4HXS5VOsXTWn2j/t730noOINlb0t85ryOU9eN08tm3nbggkEEEbgixEBjPTcTgqVdB1lNXuNyO0PQjUTnOJdEhq1Cpb4Km3s4/Me81MmLHHu0SzTNx2Aq0v9Sm6D+q10Pow0M1rmaQLvEO8t2mO7SiO0x3MJmi3aRS3aATIxgFoBBoxHmPmhK0DJzSROaXIOjUxytMdDGK00yepjVMx1McpgNBhiLBhSKMGPwCdZUNMfy02c8jYqLf8r/LnMDF4jIjNudAo5udAJv+jWFVGpjdmWoHY7nMMzH5qJLVkZaM4GSmQi7F7C/t4R+Gw4zKATqwzMSS7e8ayWh4cfxE/EJnbXjG5FMDQCIxy9g+omYRMbHD+GfUfeTY05msxtE0qqYpe5pTr8gl+y/9p3+EtNraMA5ytNvSYMB6RqiabhtXq2FFu4f9FuXwH0/l5jTw13QMyjExvDadQEkZX/qS2YnzGxmrHAaOdVqGq6sul6mVSw1I7FraeczMRxgU6hTqsQ6Kur06LOM3sb/S0wMfxYV6S/uy4hHFS6O+HdEDISCGZhYbW5zNxx+tTLL46DDYanTXJTRUXkihR78zGzHwOLWtTV1trdWA1yupsw9iDGV6uUeZ2EqUjGVNQo8NT+UxiZCfnJC6ZmDN09CRGsl9InA7N6j7TJMMtQykEi+moIOoImqx3R/DVgf4YpOdnp9jX8PdPym7xIs5iwJqU08i4jhmo1alJ+9TdkO4BsdCPIixHkZgO09C/aJwq6rik3QKlWw1KE9lvYm393lPOHM6S7Y0pmimaRjFs0CO0UWlsYsmRpZaWGiy0sNAdmki7ypNjqUMYpmOrRyGbc2ShjFMQhjVMB6mHFqZbuFBY7KCT6CRWp4tiL1adMbIQ7fiO30+87jgbhTTY8rfMW/Oef4EGvWZyLXu58lG35Cddwyp2Bb2mW/jqqq2JB8IFE9tfxD7wXq50R/HuN6jb6faBQe9RPxL95NLt0hMTiBdGHkfpGEwTrpz0mUadRDkK2NuWkow2p6YYFTsfbXnfwMy6OMYIVe5caB9O0Ofkf8APIYhhBgd5Uaetxqo1dqCZkGnWOts4pgMezfnoL+fhYTYmg2FQOjVCjOnWU2frRZmVM48UK3BNtCFOl9Yylw9HqhyO2FZQR4jf3Gn1M2lekEQWAGttBbnMWdrti4Mmm7kdx+0y8qg0zD1G/oPOG9QsbneJMsSg7y4MuBmYE972mVMXAjRj52+kyoZYGL759BBordh5an0EPG972i6bWVj4k5R6eMq7LxtJaqVEcXSorIw+FgRPEsdQalUqU371N2RvUG1/wA57dmnmf7RMH1eKSqBpXp3P40srfQpN4s1yLGLYwnMUxlFMYtjCYxLGBCZYMC8gMmw7NJAzSQOoVo1DJJNuZytHoZJIDFaDiSOre+2R7+mUy5JFjE4LTyYWpVO7dhfIDebfhjWROdpJJG3TYFr06i/DnHqv/l5OGtmrUx53+QvJJH6y6a8kkkw0wsalmzeB+8xjJJI1FQWkklGRgG/iL7/AGM2WM7nuJJJKjW3hXkkkaSQtJJA2eGTKgHjufUxskkMsPHroD7TEc6KPK/z1kkmgN5yv7RaAbCK/jTqoR6MCpH1B9pJJZ7SvLmMWxkkmgpjFky5JKQJMgMkkC7y5JIH/9k=">
          <span> alaa ibrahim</span>

        </div>
    
      <div>
        <font-awesome-icon class="icon" :icon="['fas', 'quote-left']" />
        <pre>
Lorem ipsum dolor sit amet consectetur.
 elit, Quis amet perspiciatis quam 
 quisquam qui facere hic vero 
 accusantium? Laborum, quam
        </pre>
        <div class="cont-star">
            <img
              class="star"
              src="https://img.freepik.com/free-vector/start_53876-25533.jpg"
            />
            <img
              class="star"
              src="https://img.freepik.com/free-vector/start_53876-25533.jpg"
            />
            <img
              class="star"
              src="https://img.freepik.com/free-vector/start_53876-25533.jpg"
            />
            <img
              class="star"
              src="https://img.freepik.com/free-vector/start_53876-25533.jpg"
            />
            <img
              class="star"
              src="https://img.freepik.com/free-vector/start_53876-25533.jpg"
            />
          </div>
          <img src="data:image/jpeg;base64,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">
          <span> norhan said</span>

        </div>

    </section>

</template>

<script>
export default {
  // script code هنا لو تحتاج إضافة أي أكواد جافاسكريبت أخرى
}
</script>

<style scoped lang="scss">
.review{
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 35px;
  justify-content: space-evenly;
  // background-color: red;
  >div{
    width:350px;
    height: 370px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    // border-radius: 6px;
    // box-shadow: 0 0 15px rgb(77, 73, 73);
    // clip-path: circle();

    pre{
      font-weight: 600;
      color:var(--paragraph);
      margin-top: 15px;
      
    }
    >img:nth-child(4){
      width: 60px;
      height: 60px;
      clip-path: circle();
      margin-top: 15px;
      margin-bottom: 15px;
    }
    span{
      text-transform: capitalize;
      color: black;
      font-size: 18px;
      font-weight:600;

    }
    .icon{
      margin-top:15px !important;
    }
    .cont-star{
      width: 120px;
      height: 20px;
      display: flex;
      // background-color: red;
      justify-content: center;
      .star {
        width: 30px;
        height: 30px;
        // margin-left: -5px;
      }
    }
    

  }
}
 /* media => ipad */
 @media(max-width:799px){

.review{
min-height: 400px;
>div{
  margin-top: 15px;
}
}



}
</style>
