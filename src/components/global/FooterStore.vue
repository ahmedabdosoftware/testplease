<template>
<!-- <div class="footer">
    <div>
        <div>
            <span>gndra</span>
            <pre>
The fabric is very soft and comfortable 
The design is simple 
</pre>
        </div>
        <div>
            <div>
                <pre>
The fabric is very soft and comfortable
The design is simple
                </pre>
            </div>
            <div>
                <input type="text" placeholder="     injoy with our offers">
                <button>supscribe</button>
            </div>
        </div>
        <div>
            <span>
                designer
            </span>
            <div>
                <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUAAAD///+4uLiFhYUhISGZmZnh4eFSUlKurq5AQEDu7u739/fW1tbz8/P29vZ6enpZWVmnp6c4ODjJycmRkZGzs7NMTEwQEBAoKCjq6uoyMjLGxsZubm7T09Pc3NxjY2McHByAgIBFRUWVlZUXFxeLi4ssLCyfn59wcHANDQ2PSzMNAAAI4klEQVR4nO3dW0PiOhQF4HbkjggFUZH7Xf//HzwgetRkJ9lJVnZhputxHqZ8Utpcd7L8b09W9gdInkp4+6mEt59KePuphLefSnj7qYS3n0p4+6mEt59KePsREvYa96PpuHWsbx+39WNrPB3dN3oyl04uvB8fZ+1aRmU1XG7H96k/QELhw/zYfyFpv7ObHecJv89Ewt7obsDAfad5N+qk+SgphIvWYOXFu+S5WTQSfBq4cHJ8DdB95VCHI7HCTrGJ4F3SLibQz4QUzmfRvEuWI+CnwgmLmLtTzWsB+1wgYacO5F3yCHq2QoSdO7jvnDXECBD2HpP4ztkDjPHCbTLfOdvShX92SYGndsCfUoWLp8S+c54W5QnT/QB/Z1+ScM7pOGBSi2gChAvTvCFMuRMXLtqiwCwbhnaVA4VHYd85R0Hhw7IE4KlB/iAlXCDb2D55CXlvBAj/lOQ7J+D17y/E9yJ8Uk8v7JcKzLJ+aqHfCFqKNJMKu9JvQSrtbjph71C27iMHr16jj7BDD87Lp+ZD9BBeDdCPyBdeyS16yYE/0cEWdstqyNB5Zbfg2MJh2SYlQ7SwnLa2LUusULa7ywuzU8wTltEddIfXYWQJp2VbDJmihB30J2vu60VrfErrM8VHWt5PM85rkSNEPkZX/an5Vdb0/d84D1SGENhfWtrvK28hpy/lFuK69APXcJm/kNHpdwpxP0L3hwkQun+KTmH8xPwlbcZTIUS4iRWiRmUGnG5riNA5cuMQNkBA3tBDkDBzrE9xCEGzZzUWMFD4FCMsMEDXnzlOmNnXbViFPRCQO8gZKMys3WGr8A0DfGUCg4VvocI5Bsgfig8VZvNAIegxw/4Kw4W2h41FiGqu8RdwBQttt4lFiBo85A9RhwstryOzsAUCeswzhAuzVoAQtRTIY5VhhHDnL0S97Llv+0ih+Q9pFMJGuD1mimKEB18hrN/rM90XIzQ+Tk1C2II12zhDMdi0f2TzHHMh0zvRIEQ1Z2xr0nrgmRBDw8YgxA3im4dto+5JIoZhflqI6lRklhfVAneNz9BdDFoIHMU3tqdgr6P/Q98utBC4rtIo3OOu8ZkXvnAEvKxRmGA6i1yFSgqRq4IkheSbiRJ2kYt/JYUvVPuJEiJvUlEheZtSQujSNVEhdZtSwqjGkxpR4TNPeA+9qKgwI2a3CCF2AamskBiZJYTYBrGskJgU1oXANuk5skKibaoLwQsvhIX6NLouBLcXjcI19jqf0bujuhAw6Ts71r+yNW4gmG7rSo6AXqk+JawJO4BRxLFJ5QhgL9xOm0zXhIjxC/PwrD2I3e7aWIYmRHRMQ4WIcQ3t2poQ0SgNFSJ2AmhNU02I2FARKHxA9NoGLmFvBbhKoHACuHS2Ut/5qhBylUAhZmmLWjdEFUKGggOFmE6N2r1QhZBZw0AhZq5EvbgqhFRICBRium1qFQZVCGktBgoxbfG1QwjZfRcoxCzfUV8XqhCy4jlQiNnbqHaCVSFkFCpQiBlcUEejVCHkImHCB8i1M010PULU8IldiLlKmBC1WldptilCSKMtUIgaIFKabYoQ83cME6IWYSkLeBQhZuo5TIgaiVZGhhQhpvFbb3zHuH630/idCWpCSGl6K0LcKpOvGEel0owmZtpITZK79GeER4Qz112KemJ/R15of9Jg3hY/Iy+0vy3gmylLECpjwoqwC7+evFBZrpCkXfoz8kJV9M8J4cUvxIXqYmFVCC/1KC5UV9KqQtBWp++IC9VNUKoQvmJQXKjOAqtC+KpPcaG6LUEVwgtEiAvVtQqqEN4wFRe6ZmbgzTZxoTqRr82Qovbff0VaqC3G0ISo2vhfkRbOnEJ0eW5poVYAXBNCFwhn8kJtmbAmRD9MpYXaZkB91Rd4N5KwUN9WrQvBjxphofagIYRj7CWFhfrgpS4EDygKC/WlkMQqaOwlhYUER/8nbKVgWSGx4YIQYqtZywqJqxFC1Gyz8ZoJhUTNT2rPDLTes6hQW5hoEEL7+aJCauKSEkInL0SFVMU0cocl8jaVFFI3KS1EzaifIykkZ2NJIXJjkKSQnFGn93IDx4UFhXRBLFoI3IIoKKRLaxqqRuD2OssJ6e34JiHuWSMnNKziMQi7sOPUxIQ7Q6kfU30a2IFjYsJHw3VMQli7RkxoOp/VWCcK1UuUEhprGRmFqC9RSmg8Ytdcrw30JQoJzeWozELQLJSQ0FyH2VI3EfMRZISWMyAtwg5kZ4KI8NlSSttWvxTS1xcR2mozWqvsIqYwJITWAwSsQsRMm4TQekqpvdo1oASAgNB+4oxdCOjsCwjtFfsdNdnjJ6LSCx0VHFwnB0QPuyUXkgNsHsLo5mlyobFByhRGz9OkFjrLobtPYYkcd0sstBacZwojazmkFR7cB8wxzgqKm/ZOW/uScUAw57ynqFfGrmYIol3PKfXDEabbhBWZNefDs4T49e2QOI5f8RJe2QGWlxx4tdB5wnwCrRYJybPrVe8nBJeLRMR1xJmv8OrOQGSdfeglLPXQeD38Y+T5QvSSvqh41LzzEEKn9+Pisx3eR3g1N6pX1UIv4ZU8bvi/QX8hfJ17SKwja9HCfPFesu+d+x4MFeadcg/oHnqcGx8oLPeIbu5h3HFC3By/d0xz9WhhaY9UdkstWljOj3HI7ExAhClOGHHFMgmaRJiPYGuKWHn3fAsChHkXvVPRlqXH2WYw4elrhBdgMOQl6BEDEOZdmV/jPvwLjBWeGnHQnQtkmh7HCyYQnm5V5LE7emoxNyhGmOdFup9jzeMAzITCvNtKNNZYRP0AP4MQnoxFgrcjxIcSnjJFlIz/TtuvI28JTJjnc9zGxbfgFoweoDDPey1Ei3xYePdybYEKT2k8xh0FvdszJj29ghaestiH/iTbe99BGEYSCE+ZjN9WnrrVrBXZeDEkjfCU7qTV574md/2igXk1EEkmvGQ+Xm9sM/a1zXo8Sob7SGLhR3qL+bi+ni2bT5v28HXY3jw1l7N1fTxaQB+ahkgIf6bbTfuN6ZEWyqcS3n4q4e2nEt5+/n7hf+Bkl1eK4fVUAAAAAElFTkSuQmCC">
                <img  src="data:image/png;base64,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">
                <img  src="data:image/png;base64,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">
            </div>
           
        </div>
        <div>
            <span>caliam</span>
            <span>The design is simple</span>
        </div>
    </div>
    <div>
        <p> 2023.ahmed abd elmohsen - HTML CSS JS ecommerce</p>
        <p>very soft and comfortable</p>
    </div>
</div> -->

<div class="footer_section">

<!--======================================= FOOTER TOP SECTION START =========================== -->
        <div class="subscriber_head">

            <h1 id="free_daily_updates">Free Daily Updates</h1>

            
            <form action="" class="subscriber_search_box" method="get"  >
                
                <input class="subscriber_search_bar" type="text" placeholder="Search for datasets, APIs, ">

           
                <button class="subscriber_button" type="submit" >Subscribe</button>
        </form>

        </div>

        
<!--======================================= FOOTER TOP SECTION ENDS =========================== -->

<!--======================================= FOOTER MID SECTION START =========================== -->

        <div class="subscriber_mid">

        <div class="first_para">
            <div class="footer_logo"><h1>simba</h1></div>
                    <div class="footer_para">
                        <h3 id="footer_first_head">Start Your Jounery Now</h3>
                        <br>
                        <h5>Michael-Miller99@gmail.com</h5>
                        <h5>www.Devlop-Security.com</h5>
                   
                    </div>
                </div>   
                <div class = "vertical2"></div>   <div class = "horizontal"></div> 
                <div class="middle_para">
                
                    <div class="footer_About">
                        <h4 class="footer_About_para"><a class="footer_About_head" href="#">About</a>
                        </h4>
                        <h5 class="footer_About_para"><a class="footer_About_links" href="">Terms of use</a></h5>
                        <h5 class="footer_About_para"><a class="footer_About_links" href="">Privacy Policy</a></h5>
                        <h5 class="footer_About_para"><a class="footer_About_links" href="">Risk Of Factor</a></h5>
                        <h5 class="footer_About_para"><a class="footer_About_links" href="">Risk Of Factor</a></h5>


                    </div>

                    <div class="footer_About">
                            <h4 class="footer_About_para"><a class="footer_About_head" href="#">Policies</a></h4>
                            <h5 class="footer_About_para"><a class="footer_About_links" href="">Terms of use</a></h5>
                            <h5 class="footer_About_para"><a class="footer_About_links" href="">Privacy Policy</a></h5>
                            <h5 class="footer_About_para"><a class="footer_About_links" href="">Risk Of Factor</a></h5>
                            <h5 class="footer_About_para"><a class="footer_About_links" href="">Risk Of Factor</a></h5>
                    </div>

                    <div class="footer_About">
                        <h4 class="footer_About_para"><a class="footer_About_head" href="#">What's New</a></h4>
                        <h5 class="footer_About_para"><a class="footer_About_links" href="">Terms of use</a></h5>
                        <h5 class="footer_About_para"><a class="footer_About_links" href="">Privacy Policy</a></h5>
                        <h5 class="footer_About_para"><a class="footer_About_links" href="">Risk Of Factor</a></h5>
                        <h5 class="footer_About_para"><a class="footer_About_links" href="">Risk Of Factor</a></h5>


                    </div>

                    <div class="footer_About">
                            <h4 class="footer_About_para"><a class="footer_About_head" href="#">Legal</a></h4>
                            <h5 class="footer_About_para"><a class="footer_About_links" href="">Terms of use</a></h5>
                            <h5 class="footer_About_para"><a class="footer_About_links" href="">Privacy Policy</a></h5>
                            <h5 class="footer_About_para"><a class="footer_About_links" href="">Risk Of Factor</a></h5>
                            <h5 class="footer_About_para"><a class="footer_About_links" href="">Risk Of Factor</a></h5>
                    </div>


                </div>

                

                
                <div class = "vertical"></div><div class = "horizontal2"></div> 

            <div class="last_para">

                <div class="footer_last">
                    <p class="quick_signup">Quick Signup</p>
                    <h5 id="free_daily_updates">This 3 Minute Will Take Your Newslatter To Harry Potter House So Dont Forget To Subscribe</h5>
                    <form action="" class="footer_form_mid" method="get"  >
                
                        <input class="footer_mid_subscribe_bar" type="text" placeholder="Search for datasets, APIs, ">
        
                   
                        <button class="footer_mid_subscriber_button" type="submit" >Subscribe</button>
                </form>
                </div>

                <div class="contacts">
                    <h4>Connect: +20 1152449706
                  
                    </h4>
                    <div class="icon_section">
                    <a class="footer_mid_icons" href=""><i class="fab fa-twitter footer_mid_icons_inner"></i></a>
                    <a class="footer_mid_icons" href=""><i class="fab fa-instagram footer_mid_icons_inner"></i></a>
                    <a class="footer_mid_icons" href=""><i class="fab fa-linkedin footer_mid_icons_inner"></i></a>
                    <a class="footer_mid_icons" href=""><i class="fab fa-youtube footer_mid_icons_inner"></i></a>
                    <a class="footer_mid_icons" href=""><i class="fab fa-twitter footer_mid_icons_inner"></i></a>
                </div>
                </div>

            </div>

        </div>

<!--======================================= FOOTER MID SECTION ENDS =========================== -->

<!--======================================= FOOTER LAST SECTION START =========================== -->
    <div class="subscriber_last">



        <div class="footer_logo_last"><h1>simba</h1></div>
        <div class = "vertical3"></div>
        <div class = "footer_last_mid_para"><p id="unleash">Unleash The Power Of Security And Development</p></div>
        <div class = "footer_last_last_para">
            <p class="copyright2">COPYRIGHT 2022 &copy; All right reserved</p>
            <p class="copyright2">ALL Trademark are registered to their respective owners bros</p>
        </div>

    </div>
<!--======================================= FOOTER LAST SECTION ENDS =========================== -->

</div>

</template>
<script>

export default{
    name:"FooterStore",

}

</script>



<style scoped  lang="scss">


.footer_section{

margin: 0 auto;
}

/* ===============================  FIRST = F O O T E R  ==================================== */

.subscriber_head{

background-color:black;
/* display: flex; */
display: grid;
text-align: center;
width: 100%;
height: 90px;
grid-template-columns: 1fr 1.5fr 0.5fr;
grid-template-areas: 
"head input subscribe";
/* align-items: center;
justify-content: center; */
/* display: flex; */
/* margin: auto; */

}

.subscriber_search_box{

margin: auto;
display: flex;
width: 100%;
grid-area: input;
}

.subscriber_search_bar{

/* width: 450px; */
/* display: block; */
width: 100%;
max-width: 100%;
font-family: inherit;

/* max-width: calc(100% - 50%); */
color: #435978;

font-weight: 500;
border-radius:50px 0px 0px 50px;
border: 0px;
padding: 15px 0px 15px 20px;

font-size: 14px;
background: #F0F4EF;






}

.subscriber_head h1{
font-size: 1.5rem;
font-weight: lighter;
color: white;
margin-top: auto;
margin-bottom: auto;
font-family: sans-serif;
grid-area: head;
text-align: right;
margin-right: 10px;

}

.subscriber_button{
border: 0px;
width: 150px;
max-width: 100%;
font-size: 700;
padding: 15px;
font-size: 1rem;
color: white;
letter-spacing: 4px;
grid-area: subscribe;
font-family: sans-serif;
background: #2cb95b;
background-color: rgb(127, 6, 6);

cursor: pointer;
margin-top: auto;
margin-bottom: auto;

font-weight: 500;
border-radius: 0px 50px 50px 0px;
outline: 0;
transition: all 0.2s;

}

/* ===============================  FIRST = F O O T E R = ENDS ==================================== */




/* ===============================  MID = F O O T E R  ==================================== */
.subscriber_mid{
background-color:black;
color: white;
width: 100%;
/* height: 180px; */
height: 200px;
display: grid;
grid-gap: 25px;
grid-template-columns: 0.9fr 0.01fr 1.6fr 0.01fr 1fr;
grid-template-areas: 
"first line second line2 last";
}


.first_para{
// background-color: red;
height: 180px;
margin-left: 10%;
margin-bottom: auto;
margin-top: auto;
grid-area: first;
// font-family: "Dancing Script", cursive !important;
.footer_logo{
    // color: black;
    // background-color: #2cb95b;
    height: 50%;

}
}

#footer_first_head{
font-weight: lighter;
}

.vertical {
    border-left: 1px solid #0000004d;
    height: 156px;
    grid-area: line;
    margin-top: auto;
    margin-bottom: auto;    
    /* position: absolute;
    left: 21%;
    bottom: -23%; */

    
}

.vertical2{
    border-left: 1px solid #0000004d;
    height: 156px;
    grid-area: line2;
    margin-top: auto;
    margin-bottom: auto;
/* position: absolute;
left: 21%;
bottom: -23%; */

}

.middle_para{
grid-area: second;
display: flex;
}

.last_para{
grid-area: last;
}

.footer_About{
/* margin: auto; */
margin-top: auto;
margin-bottom: auto;
margin-right: auto;
margin-left: auto;

}
.footer_About_para{
margin-top: 10%;
margin-bottom: 10%;
}

.footer_About_head{

color: white;
}

.footer_About_links{
    
color: white;
font-weight: lighter;
}











.last_para{
margin-top: auto;
margin-bottom: auto;
}

.footer_form_mid{

margin-top: 3%;
display: flex;
width: 100%;
}

.footer_mid_subscribe_bar{

/* width: 450px; */
/* display: block; */
width: 100%;
max-width: 100%;
font-family: inherit;

/* max-width: calc(100% - 50%); */
color: #435978;

font-weight: 500;
border-radius:50px 0px 0px 50px;
border: 0px;
padding: 15px 0px 15px 20px;

font-size: 14px;
background: #F0F4EF;



}
.footer_mid_subscriber_button{
border: 0px;
/* width: 150px; */
width: 100px;
max-width: 100%;
font-size: 700;
padding: 13px;
font-size: 1rem;
color: white;
letter-spacing: 1px;
grid-area: subscribe;
font-family: sans-serif;
// background: #2cb95b;
background-color: rgb(127, 6, 6);
cursor: pointer;
margin-top: auto;
margin-bottom: auto;
/* margin-left: 1%; */
margin-right: 2%;
font-weight: 500;
border-radius: 0px 50px 50px 0px;
outline: 0;
transition: all 0.2s;


}

.subscriber_button:hover{

background: rgb(0, 140, 255);


}

.footer_mid_subscriber_button:hover{

background: rgb(0, 140, 255);
}

.footer_mid_icons{
margin: 2%;
/* margin-left: 2%; */

}

.footer_mid_icons_inner:hover{

color: #006aff;
}

.quick_signup{
font-size: 1.4rem;
font-weight: lighter;
}

.footer_last{
margin-bottom: 4%;
}


.footer_mid_icons_inner{

font-size: 2rem;
color: blue;
/* border: 1px solid blue; */
}

.icon_section{
/* you can either set it to flex or block */
display: block;

margin-left: 15%;
}



/* ====================================== MID = F O O T E R  ENDS ======================================= */





/* ====================================== LAST = F O O T E R  STARTS ======================================= */
.subscriber_last{
background-color:black;
color: white;
height: 70px;
width: 100%;
display: grid;
grid-gap: 25px;
grid-template-columns: 2fr 0.01fr 3fr 1fr;
grid-template-areas: 
"logo line3 mid-section copyright";
 
}


.footer_logo_last{

text-align: end;
margin-top: auto;
margin-bottom: auto;
}

.vertical3{
border-left: 1px solid #0000004d;
height: 15px;
grid-area: line3;
margin-top: auto;
margin-bottom: auto;
}

.footer_last_mid_para{

margin-top: auto;
margin-bottom: auto;

}

#unleash{

color: white;
font-weight: lighter;

}

.copyright2{

color: white;
font-size: 0.7rem;
font-weight: lighter;
}

.footer_last_last_para{

margin-top: auto;
margin-bottom: auto;
}

/* ====================================== LAST = F O O T E R  ENDS ======================================= */

/* -----------------------------MEDIA QUERIES----------------------------- */

@media only screen and (max-width: 992px) {

.subscriber_head{

    grid-template-columns: 0.5fr 2.5fr 0.5fr;
}
#free_daily_updates{
    display: none;
}

.quick_signup{
display: none;

}




}


@media only screen and (max-width: 768px) {

.subscriber_head{

    grid-template-columns: 0.1fr 1fr 0.1fr;
}

.subscriber_mid{
    grid-template-columns:1fr;
    /* grid-template-rows: 1.2fr 0.01fr 1fr 0.01fr 1fr; */
    grid-template-rows: 0.9fr 0.01fr 0.9fr 0.01fr 0.9fr;
    grid-template-areas:
    "first"
    "horizontal"
    "second"
    "horizontal2"
    "last";
    height: 100%;
    grid-gap: 0px;
}



.first_para{
    margin-left: 3%;
}

.middle_para{
    flex-wrap: wrap;
}

.last_para{
    text-align: center;
}

.footer_mid_subscriber_button{
    margin-right: 0;
}

.vertical{
    display: none;
}


.vertical2{
    display: none;
    
}

.vertical3{
    display: none;
}

.horizontal{
    border-bottom: 1px solid #0000004d;
    grid-area: horizontal;
}

.horizontal2{
    border-bottom: 1px solid #0000004d;
    grid-area: horizontal2;

    
}

.contacts h4{
    text-align: left;
    margin-left: 2%;
    margin-top: 2%;
    margin-bottom: 2%;
}

.contacts{

    margin-top: 3%;
    margin-bottom: 3%;
}

.icon_section{
    margin-left: 0%;
    justify-content: center;
}

.footer_mid_icons_inner{
    font-size: 3rem;
}

.subscriber_last{
    display: block;
    width: 100%;
    height: 100%;
    padding: 1%;
}

.footer_logo_last{
    text-align: center;
}

.footer_last_mid_para{
    text-align: center;
}

.footer_last_last_para{
    text-align: center;
}

.footer_last{
    margin: 0;
}


}



@media only screen and (max-width: 576px) {

.subscriber_head{

    grid-template-columns: 0.1fr 1fr 0.1fr;
}

.subscriber_mid{
    grid-template-columns:1fr;
    /* grid-template-rows: 1.2fr 0.01fr 1fr 0.01fr 1fr; */
    grid-template-rows: 0.5fr 0.01fr 0.5fr 0.01fr 0.5fr;
    grid-template-areas:
    "first"
    "horizontal"
    "second"
    "horizontal2"
    "last";
    height: 100%;
    grid-gap: 0px;
}


.horizontal{
    border-bottom: 1px solid #0000004d; 
    grid-area: horizontal;


}

.horizontal2{
   border-bottom: 1px solid #0000004d;       
   grid-area: horizontal2;

}


.middle_para{
    text-align: left;
}

.footer_About{


    margin-top: auto;
    margin-bottom: auto;
    margin-left: 8.4%;
    margin-right: 8.4%;
}

.footer_About_head{

    font-size: 1.4rem;
}

.footer_About_links{

    font-size: 1.6rem;  
}


#footer_first_head{

    font-size: 2rem;
}


.footer_para h5{

    font-size: 1.2rem;
}





}


@media only screen and (max-width: 502px) {



.subscriber_mid{

grid-template-rows: 0.9fr 0.01fr 2.5fr 0.01fr 0.3fr;
}




}


// .footer{
//     width: 100%;
//     min-height: 460px;
//     background-color: black;
//     display: flex;
//     flex-direction: column;

// }
// /* top footer */
// .footer >div:first-child{
//     width: 100%;
//     min-height: 400px;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-evenly;
// }
// .footer >div:first-child >div{
//     width: 24%;
//     height: 400px;
//     background-color: black;
// }
// /* first child in top footer */
// .footer >div:first-child >div:first-child{
//     span{
//         margin-top: 40px;
//         margin-right: 180px;
//         display: inline-block;
//         position: relative;
//         font-size: 40px;
//         font-weight: 600;
//         color:white;
//         text-transform: capitalize;
//     }
//     span::after{
//         content: "23";
//         position: absolute;
//         bottom: 25px;
//         color: green;
//     }
//     >pre{
//         margin-top: 20px;
//         color:white;
//         font-size: 18px;
//         text-transform: capitalize;
//         text-align: start;
//         padding-left: 50px;
//     }
// }
// /* second child in top footer */
// .footer >div:first-child >div:nth-child(2){
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//    align-content: center;

//     >div:first-child{
//         pre{
//         color:white;
//         font-size: 18px;
//         text-transform: capitalize;
//         text-align: start;
//         margin-left: -60px;
//         margin-top:-45px;
        

//         }
//     }
//     >div:nth-child(2){
//         width: 90%;
//         height: 20%;
//         display: flex;
//         justify-content: space-evenly;
//         input{
//             width: 65%;
//             height: 65%;
//             border: 2px solid  tan;
//             text-transform: capitalize;
//             font-size: 16px;
//         }
//         button{
//             background-color: tan;
//             width: 35%;
//             height: 65%;
//             color: white;
//             text-transform: capitalize;
//             background-color: green;
//             font-size: 18px;

//         }

//     }

    
// }
// /* thirst child in top footer */
// .footer >div:first-child >div:nth-child(3){
//     width: 15%;
//     height: 250px;
//     align-self: center;
//     display: flex;
//     flex-direction: column;
//     justify-content: start;
//     align-items: center;
//     >span{
//         color: white;
//         font-size: 17px;
//         text-transform: capitalize;
//         margin-top: 40px;
//     }
//     >div{
//         width: 55%;
//         height: 22%;
//         display: flex;
//         justify-content: space-evenly;
//         align-items: center;
//         img{
//             width: 30px;
//             height: 30px;
//             clip-path: circle();
//         }
        
//     }
    
// }
// .footer >div:first-child >div:nth-child(4){
//     width: 15%;
//     height: 250px;
//     align-self: center;
//     display: flex;
//     flex-direction: column;
//     justify-content: start;
//     >span:first-child{
//         margin-top: 40px;

//     }
//     >span{
//         color: white;
//         font-size: 18px;
//         text-transform: capitalize;
//         margin-bottom: 15px;
//     }
    
// }

// /* down footer */
// .footer >div:nth-child(2) {
//     border-top: 3px solid rgb(223, 212, 212);
//     width: 94%;
//     height: 60px;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     text-transform: capitalize;
//     font-size: 18px;
//     color: white;
//     align-self: center;
//     >p:nth-child(1){
//         margin-left: 15px;
//     }
//     >p:nth-child(2){
//         margin: auto;
//     }


// }

</style>