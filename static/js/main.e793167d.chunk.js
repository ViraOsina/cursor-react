(this["webpackJsonpcursor-react"]=this["webpackJsonpcursor-react"]||[]).push([[0],{18:function(A,e,C){},27:function(A,e,C){},28:function(A,e,C){},37:function(A,e,C){"use strict";C.r(e);var I=C(2),i=C.n(I),t=C(19),n=C.n(t),a=C(17),c=(C(18),C(20)),Q=C(11),g=C.p+"static/media/verified.23524915.svg",r=C(1);function s(){return Math.floor(1e3*Math.random())}var k=function(A){return Object(r.jsxs)("div",{className:"post_hw17",children:[Object(r.jsxs)("header",{className:"header_hw17",children:[Object(r.jsx)("div",{className:"header_icon_hw17",children:Object(r.jsx)("img",{src:A.authorIcon,alt:"authorIcon"})}),Object(r.jsxs)("div",{className:"header_content_hw17",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{className:"name_hw17",children:A.authorName}),Object(r.jsx)("span",{className:"verified",children:Object(r.jsx)("img",{src:g,alt:"verified"})}),Object(r.jsxs)("span",{className:"header_additional",children:[A.authorNickname," - ",A.date]})]}),Object(r.jsx)("div",{className:"content_hw17",children:A.content})]})]}),Object(r.jsx)("main",{className:"body_hw17",children:Object(r.jsx)("div",{className:"image_hw17",children:Object(r.jsx)("img",{src:A.image,alt:"post_image"})})}),Object(r.jsx)("footer",{className:"footer_hw17",children:Object(r.jsxs)("div",{className:"icons_hw17",children:[Object(r.jsx)("div",{className:"footer_icon_hw17",children:Object(r.jsxs)("span",{className:"footer_value",children:[" ",Object(r.jsx)(Q.a,{})," ",s()]})}),Object(r.jsx)("div",{className:"footer_icon_hw17",children:Object(r.jsxs)("span",{className:"footer_value",children:[" ",Object(r.jsx)(Q.c,{})," ",s()]})}),Object(r.jsx)("div",{className:"footer_icon_hw17",children:Object(r.jsxs)("span",{className:"footer_value",children:[" ",Object(r.jsx)(Q.b,{})," ",s()]})}),Object(r.jsx)("div",{className:"footer_icon_hw17",children:Object(r.jsx)(c.a,{})})]})})]})},o=[{id:0,authorName:"Anakin Skywalker",authorIcon:"https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",authorNickname:"@dart_vader",content:"WTF? Who is Ray? Why she is Skywalker? Luke...?",image:"https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",date:"26 Feb"},{id:1,authorName:"Yoda",authorIcon:"https://www.liveabout.com/thmb/OHyay7RPSFHxasgJ9_Okz1Jhu-Q=/1167x1167/smart/filters:no_upscale()/yoda-56a8f97a3df78cf772a263b4.jpg",authorNickname:"@yoda",content:"Have you seen my little one's movie debut?",image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bbyoda-1575303784.jpeg?resize=980:*",date:"01 May"}];var d=function(){return Object(r.jsx)("div",{className:"container_hw17",children:o.map((function(A){return Object(I.createElement)(k,Object(a.a)(Object(a.a)({},A),{},{key:A.id}))}))})},l=C(16),f=(C(27),C.p+"static/media/contact-book.38d43d01.png"),j=[{id:1,firstName:"Barney",lastName:"Stinson",phone:"+380956319521",gender:"male"},{id:2,firstName:"Robin",lastName:"Scherbatsky",phone:"+380931460123",gender:"female"},{id:3,firstName:"Unknown",lastName:"number",phone:"+380666666666"},{id:4,firstName:"Lily",lastName:"Aldrin",phone:"+380504691254",gender:"female"},{id:5,firstName:"Marshall",lastName:"Eriksen",phone:"+380739432123",gender:"male"},{id:6,firstName:"Ted",lastName:"Mosby",phone:"+380956319521",gender:"male"},{id:7,firstName:"Tracy (The Mother)",lastName:"McConnell",phone:"+380688953248",gender:"female"},{id:8,firstName:"Victoria",lastName:"the baker girl",phone:"+380932574895",gender:"female"},{id:9,firstName:"The Captain",lastName:"",phone:"+380976589521",gender:"female"}];function u(A){return Object(r.jsxs)("div",{className:"filter_box",children:[Object(r.jsxs)("label",{htmlFor:"male",children:[Object(r.jsx)("input",{onChange:A.onChange,type:"checkbox",id:"male",name:"male",value:"male"}),"Male"]}),Object(r.jsxs)("label",{htmlFor:"female",children:[Object(r.jsx)("input",{onChange:A.onChange,type:"checkbox",id:"female",name:"female",value:"female"}),"Female"]}),Object(r.jsxs)("label",{htmlFor:"not_specified",children:[Object(r.jsx)("input",{onChange:A.onChange,type:"checkbox",id:"not_specified",name:"not_specified",value:"undefined"}),"Not specified"]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{})]})}function b(A){return Object(r.jsxs)("div",{className:"contact_box",children:[Object(r.jsxs)("div",{className:"content_box_user",children:[Object(r.jsx)("img",{src:f,className:"user_hw18",alt:"user"}),Object(r.jsx)("span",{children:"".concat(A.contact.firstName," ").concat(A.contact.lastName)}),Object(r.jsxs)("span",{className:"gender_icon_hw18",children:[" ","male"===A.contact.gender?Object(r.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/1340/1340619.png",alt:"male_icon"}):"female"===A.contact.gender?Object(r.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/866/866954.png",alt:"female_icon"}):Object(r.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/984/984199.png",alt:"male_icon"})]})]}),Object(r.jsx)("p",{children:A.contact.phone}),Object(r.jsx)("hr",{})]})}var K=function(){var A=Object(I.useState)(j),e=Object(l.a)(A,2),C=e[0],i=e[1],t=Object(I.useState)(""),n=Object(l.a)(t,2),a=n[0],c=n[1];return Object(I.useEffect)((function(){document.querySelectorAll('input[type="checkbox"]').forEach((function(A){A.checked=!0}))}),[]),Object(I.useEffect)((function(){var A=new RegExp(a,"gi"),e=j.filter((function(e){return Object.values(e).some((function(e){return e.toString().search(A)>=0}))}));i(e)}),[a]),Object(r.jsxs)("div",{className:"inner_box_hw18",children:[Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAM6CAYAAACvpxVtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAACWVSURBVHhe7d0JlFx1nejxfwhbwAQCJiBJBEFREnF7I4g+lpGwjDOOPBj0CCpBUccZCQf0HHEE9Z1xAWeMSjwuDAieMQ4IMoP4ZHVcx8CAyBYYF0AgCYuiIYEESEJe/25utZ3Q3en8cqu60v35cOp03erqhXT3/db//7+3asyaHgUY9VavXlNWrnqmrFq1ptgtMBSbZUAeeOCBsmDBgnL//fdXbx977LGycOHC6m1cwtKlS6u3AMNt/PgJ1dsddphQxk/YoUzo2d5nnxllypQpZerUaWXK1KnV9uZmswjIz372s97LHXfcIQ7AiBORmT59Rtlv/9eU/fc/oLp0u64MSAQiQnHxxReXK6+8UjCAUSeCcthhR1SXmT2XbtRVAYkRxlVXXVUuuugi0QCotWJy9DHHdtXIpCsCEiONuERAABjYPtNnlFknvKuKyXAbtoBEMP75n/+5uh6L4gAM3ZQpU6u3s2efNmwx6XhAYpRxyimniAZAQyImwxGSjgUkghHhME0F0B6xPnLW2XPK1KlrRyft1pGAxFRVa7oKgPaK0cjJs0+tt9qnrQGJUceJJ55YHZILQOfEtNY35l3S1tHIFvVbANgobQvIueeeWw499FCjD4BhsGjRwvKmvz6ifP3C8+tbmteWKawzzzyz/Mu//Eu9BcBwmjXrpPKRMz5WbzWn0YDE2eOzZs1ypBVAl4kTEL/0pfMaXRNpLCCxYH700Uc7vwOgSzW9sN7IGoh4AHS/WBd52/HHVi9/0YRNHoGIB3TG7nu+qOy08+Tq9SRWrlxZnlyxvCx64N7yyEOL63vA0DQ1EtmkgIgHtN+4cduXP3vtwWXcdtvXt6zrD4/+rnq74Bf/XVb0RAWGoomIpAMiHtB+G4pHX8seW1Ju/NkPy6pVK+tbYHARkSu+e3XvKyZurHRAZs6c2XXneEyePLk85znPqa7vueeevdvbb7/hP77hcvvtt5fbbrutPPLII/UtI9/EnSdVbyfvOqVstdVW1fWRKkYHjzy4KL1Tf8WrX9fz77RbvbVhd/9qQbn7l3fWWyNX/E3HPij+zrvVww8/XL2Nv+3W9Xvuuac88cQT1fVuEc+f9Y1536q3Nk4qIN1ynkf88uy7777lZS97WfW2m0MxmAfuf6CcetqpZcWKFfUtI9dee88oe714er01OqxY/kSZ/6NrNzoiMfo4cOYb6q2hWbVyZfnxdf9vRI9C3vSmN5Xjjz9+s/17j4C0HjjG24jKcMueJ7LRAYkzzD/60Y/WW50X0TjggAOqs9x32WWX+tbN2x//+MdywgknVAHZeuut61tHni17RhuvP/Koemt0yYwMYtH8xTNeUW8NXcRq2dIl9dbIEn//55xzThkzZkx9y+YvRifXX399+Y//+I9hnYk444yPlxNmvaveGpohH8Ybax1xGa5n1Y0RxllnnVXmzp1bjjvuuBETjxDRGDduXFm2bFl9y8g0fsKO9bXRZ8KEifW1odtyy9z0XhylNVK9bN+X1ddGjtiXxajqggsuqPZxMTU3HM45Z051eO/GHOI75IDEgnlcOv1a5a1wxCWuj0QRkJ132rmsWrWqrF69ur515InDTkerFcsfr68NXXYaaqQeiRV/H5MmTxpRo4/1xT7u1FNPLV/72tc6HpLYt//d351UXYZqSAGJUUdrBNIpUeWRHo6WLbfcsrxgzxdU10dyQGItYNEDv623Ro84Z+O+e39dbw3d0sdy01BxNNZIFAdctPOpybtJ7P8iJLH/i4OBOuWuOxdUlxiNDMUG10AiGq9+9avrrc6IBbKYphpNLrnkkvLZz362jB8/fkSvg4S99l67iD5p1916dgoj+/81ovnLO29N79QPPPQNQzqEt2VxT6DvuOXGemtk2W677crnP//5MmXKlPqW0eOb3/xmmTdvXr3VGT/44fwNBnuDAYlpq049OWJU94wzzujqQ/Pa5dZbb60eccTwfNttt61vZbSLQ55f/dpD6q3BRaxumv/Dnrcjcwpr0qRJ5Utf+lIVktEoFttPP/30ji20D+Xw3kGnsC6++OKOxSOmqWKBfDTGI0ybOq3sMnmX8swzz9S3QCl/fPR3GxxRRDjicstNPxux8QgvfOELq4NNRqvWtP5rXvOa+pb2uuGG+dVlMIOOQGLqqhPrHkcddVR597vfXW+NThGOGJ5fccUVo/YRFgOLaayY+pvU5+TLWFu5/55f9a6vxDkgI1m8VMSxxx5bb41unZrSijPVf/ijgSMyYEBi9HHKKafUW+0Rax1hU9c74uiMP/zhDyX+VyZMWHtK/mCPVOJ+Dz30UHn00UerBeznPve5Zeedd17n6I64z+9///vyyMOPlC22WDtQm7zL5LLTTju15SiQ+Jw33nhj+eiZHy1jthi5R5mw6batH2A8OYJHG/2JB1gvetGL6q3OePrpp6vDWmNf8OSTT/bsC8aW8eOfUy1s77rrrhvcF8QDwyVLlpSnnnqq2h5gdzuoMT3/jR07tkzYYcI609sRkdDukJx99pxy9DH9h3vAgLR79NHUQnn8AK+55prqzPj4X3n3SWtHMocfcXj1dn1xlNN3vvOd6h89TuCLOMS02Yknnlj233//6vPFff7t3/6tXHrppeXxZY+XsVuOrT52jz32KG9729uqExkjPE2LX9CPfexjXgYY1hPTN3Foaye0nhHiP7//n+WK715R7r3n3rJ8xfIqBmPGbFG23nqrsuOOO1b7yJg9eclLXtJvSGI/En/Ljz/+eNm6Plhki7FDPnOiV3zduMSI8+Uvf3l1oE1f7R6NDDYK2fj/GwDoMfbjPerrvWL6Ki7t0uRhunFkQjw3Vzx6X7RoUfWoIIaL02dMrx4V/PrXvy5XXnllef7zn18N/+Jop7j/7rvvXk466aRq+uqmm24qdy64sxz4vw+snnzxxz/+cfnUpz5V3eeDH/hg2Wf6PtXn/elPf1puueWWcvBBB/c+aWOTYm47pt5uuOGGEX0+CGysGPXHpd3uu+++6kjQq6++utoHxj4lprF2mrhT/eSs21f7mt/97nflzjvvLD/4wQ+qKfQYhaz/xKAx7bV48eLy4he/uNx9z93VyCZmPeKEvY25xCzI83Z9Xpm408Ry//33l912222dEU8cgLR8+fLyP//zP/UtzVq2bGmZOmVa9ZK46+t3CiueZ2rBggX1VrPiCILYgTchvvXPnP2Z8pOf/qS8853vrHb6p3/o9Op9f3Ps31Tzhv/wD/9QrrrqqhKd/Ku/+qty/vnnl+9+97vVfOrzd39+eWb1M+Uzn/lM+d73vlfmnjO3vOp/vao6HyOGhV+c+8Wy3/779a6BfOITn6ier+aiiy5q29Fi8cv4xS9+sVx77bX1LUBMX8U0VjvFDv/9739/+c1vflNtx3rqwQcfXP7iyL8ou++xexWIiElMScUDyWuvubbccust1X1PeMcJ5X1/9751duwx9fXE8ifKL27+RZn7xbnVbTEVlfGCF7ygOoQ5HgC//vWvr25r7Zda4hDfeHLGdhjokN5nTWHFYbvtikf8ArznPe+ptzbdz3/+83LlVVdWI4n+frnih/WWt7ylzDphVjWCiOAcc8wx5atf+eraE2R60hk77MeWPFY98n/upOdWHzNjxoyyww47lJt/cXP1COKeu++pLvGII9ZB2nlmaETvrW99azX6Ada+dES74xFiXTP2E/H3H5cvfOELZfbs2eWxxx6r1kTnzJlTPQCd/7P51WL+WWefVa2dTps2rfzZq/+s/ix/EvuSLcduWRY/uLi6no1HiJmWlU+vrGYmqmfzve3ZoYgH5u3aNw10SO+zRiBx5FW7pq+afBQRjwJOmX1KGT9hfDn77LOraaj43vuOQEI8IuhnkFWJH8bXL/x6Of9r51ehiV+WEFNg3/jGN8q3vvWtKiStJzmMX7AY3sZie7vFI41PfvKTXffaAdBJsUOMcx86EZAQU0atUURMF8XTOMXUUCxgx4O7iEC8P/YLsYD+9re/vZqa6u/7u/s3d5enVz5dHbQTzzSxKeIBbsx83HH7HdUszuXfubwcf9zao1hbB/mEeGr4k08+ud5q1qxZ7yofOWPdFY9njUBivaAdYt2jqV+CCEJMOd3723urEc0222xTv+fZ4r79BSTiEdNUF1x4QTnwwAOrUUyIX4677rqrOrIr1keOOOKIcuSRR1aXWPf493//946cGxOvcRKjJRjNmtxvDEVMW8V5WHGJ2ZiYdYgjruL7+OAHP1j+/u//vtqBxwO7mAqP0Uknv7+WGNmU6Nx6B3/F1Hq7ngbqsssuqdZD+lpnET3WCtox+oh/4Hjk3pT44X3kIx+pwjFxx4nl1ttuLTfffHP51a9+VcUiHjlEIPbZZ59qmutf//Vfq7NYWwvf8Sgiav7Vr361Whf5wAc+0Pu+mNKKQ2lj8Sxed+CQQw6phrX77bdf9UOLUUnc95WvfGXvI5V2iM8dw+gYaf3yl7+sb4XRI57ifKATB+PvvDUlFNerv8Wex4nPrFk7VRTbcVnzzNr79W73+bjqY/oRawtxiQNv4ulT3vue95bXvva11f4mppbf+MY3VlPZhx9+eHnpS19af9Sztc5Ni/3Spi4LxPPjxb9FPI3JHi/YozqUN7639ddBQjz4jNcXiQX7JsXMzIEHHVKmTp1W37LeCKRdo48m4xEiDjGdFAtaMYr45rxvVkdDhFjUist//fS/qkWvb3/729XwMaa4QvzyXHbZZeUrX/lKecMb3lAN9+KVzeL2+GHHUDV22nHbuG3HVb9kMXSNyw477lAFpukfzEDia8cIa7heHwCGS/zOD7ZeuuSPS6ojphYvWlxdVq9aXVY8uaK6LV7hM45Kiv1ErGHGbbFAHmKnHtsPLn6wistgYgcd65HbbLtNNb0dITnttNPKpZdcWv7yL/+yvO51r6vv2b/YZ8T+ZI/d96j2RXFpxWljLxGuOJckHsTG6GhDJ1Q2udbc12XfXncqbp01kL333ruaA2xS/CLEkwQ2KX4xHn7o4erRRsv8+fOrtZC/fe/fVttv+j9vKpMnTa4evcf7Yr4yhqLf//73qxFG/FAOO+yw3umv2FnH0Q2vetWrqqOyYnga7z/ooIOqX8YQazgPPvhg+ad/+qeOHFLY1+c+97ly3XXX1Vswcg1ln7Fo4aLy2NLHytgt1s7/77nXntUDv3iGiRCHusaO9re//W21E49Zg1jsjunnuF/siPd64V7VTn5D4m8+ZiNi3xFrH7E2GTMSGxLRipHH9OnTq6mwEA96M+IorHiQG9977KOG4h//8R+rkUiTYorv5zf/aTTVG5CY74tn3m1aJw6/CzFVFQte73rn2pdknHnY2kftEYa4tIaxMZ0VcYjr64tD+OJRRTzFSYxs4t8kpssiWCHWROIRyZFHHNnziaubOirONo3vC0aqoZ4jFiOJWH9onXux2/N2q0YgMcUTf9u77rJr9b6HHn6omnqJB48TJ06s/rbjoJh44BhPRRIPJIcins4k9mWxFjqUeITY58R5aBGSVqiG+vX6il10fK6I5b4v23fITygZR27F6Q1Ni8N547De0BuQ2Pk2/XK17Rh9DKQ19dT6xx3oKdFjNBEnAvUXkJhXbD1FSUQjfhmXP7G89yiHCMj454wva2KydZh0+imdoRPiZLiIx1BfPK415dz6O44dc2tH29qOB3lxnlfvdo+4T+vjNnZnHqOHiFJ/+46BxNeKfUgcjdXa3lit7zWm1SNEG/P12zEKOXn2qWX27NOq670BacfrfsSwb6+99qq3aFJMZ11++eXVYXuwuYpgxAPNuNC8OLEwHnA2qe9Jhb0BaXr9Iw4ni9f3oL0iILHGE78orZg4d4RuFI+gQ+wb4kihiMdQRxzkNX2Get91kCogsdATT1/SpJi68qhieERAYjoPukUsYrcCQmfF0y/Fs5U3qfVyt1VA4vyPeLGWJnVq8RyAgcUDyje/+c31VjO+/OXzyszDjlh7HkiceNekGJaKB8Dwi5Ff01OFCxetfTaOKiBNPzVHp16zF4ANa3qffFd9XksVkKaffdeRVwDdo+l9cus5saqAxAk5TXJkBUD3iH1ykwcxxImVoQpIk4fvigdA92lyXXrp0rWDjsZHIA7VA+g+Tb6K6jpTWACwsRqfwmrXa4UDkNfky922mtH4CMT5HwDdpx37ZgEBGAVar7raJGsgAKNAvMBW0wQEgBQBASBFQABIERAAUgQEgBQBASBFQABIERAAUgQEgBQBASBFQABIERAAUgQEgBQBASBFQABIERAAUgQEgBQBASBFQABIERAAUgQEgBQBASBFQABIERAAUgQEgBQBASBFQABIERAAUgQEgBQBASBFQABIERAAUgQEgBQBASBFQABIERAAUgQEgBQBASBFQABIERAAUgQEgBQBASBFQABIERAAUgQEgBQBASBFQABIERAAUgQEgBQBASBFQABIERAAUgQEgJQtVq9eU18FgKHbYvmKVfVVABg6U1gApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiDAqPTCF+5VXyNLQIBR6Te/ubu+RpaAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqADGDixIn1NQD6IyADWLJkSdlx4o71FgDrE5ABrFmzpiz545J6C4D1CQgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAJAiIACkCAgAKQICQIqAAIwCY8aMqa81p/GAPPHEE/U1AEayxgPy+OOP19cA6BYPP/xwfa05jQekHd8kAJumbQEZP35CtdGERx55pL4GQLe455576mubbsKEtc2wiA5AShWQCTs0NwK5/fbb62sAdIsmZ4das1aNT2HFPJsjsQC6R+yTm5zCmjp1WvW2CsjUKWs3mtLkNwrApml6n7zOGsiUqVOrjabcdttt9TUAhtv8+fPra82YMmVtM+oRSLMBsQ4C0D2a3ie3Bh31CKTZKaz4Zp0PAjD8Yl/c9BTWPvvMqN5WAdl//wOqjSZdd9119TUAhkvT01dh+vQ+AYkFkabXQS6//PL6GgDDpel9cax/rHMYb9jnJWuL0pQ4bMxaCMDwiX1w088O0hp9hN6A7L//a+przZk3b159DYBOa8c+eL8+regNyH5tWAeJ+hmFAHReu/a/fdfMewMSw5Imz0hvMQoB6Lx27Htj/aN1BFboDUg4+phj62vNiQJef/319RYA7RZHwbZl9PGadWeq1gnIYYcdUV9r1rnnnuv5sQA6IPa17Zr5OfrodQcZ6wQk5rbaMY0VJ7KYygJov9jXtuN1mWL6av1zBtcJSJh14rvqa82KY5FNZQG0T0xdtescvPWnr8KzAnLM0W+urzVvzpw5nuIEoA3aPdMz++TT6mt/MmbpsqfX1Nd7ve34N5cbbmj+9Pewyy67lLlz55btt9++voVus+aZNWXBggXl+huuL4sXL65uW7lyZfWWkW2LLbYoEydOLK94+Suq7QNee0DZZpttqut0r1j3OPnkk9v2AD3Wx7/05fPqrT/pNyARj4hIu+y7777lrLPOqrfoJmPGjCl33XVX+fCHP1zFY/Xq1fV7GC3id2C7cdtV19/73veW444/rrpOd4qf1+mnn97Wl9H4xrxv9fucic+awgpxx/7u3JQ4vOxzn/tcvUU3iV/GWKtauHCheIxSa9asKU8sf6K6zL9+vtFnl4qfU1xiX9rOePS3eN7Sb0AAYEMGDMjJs0+tr7VHHC0Q5TQS6T677757GTduXL3FaBRrIXF53q7Pq97SXVatWlU++9nPVpdrr722vrU9Zs9+9uJ5S79rIC3tXEzva8899yxnnHFGtcDO8FuxYkW59JJLy09++pPe48njF5aRL2IxYfyEMn3G9Gr7He94R5k2bVo1VUJ3ePTRR8uZZ55Z7rvvvvqW9ompq1j/GMigAWn3YnpfEY9Pf/rTItIlnnnmmerIjqeeeqp3m5Ev1sC22mqr3qMkt956a/HoEvFziPXj2E8uXbq0vrW9fvjD+YO+VtSgAQkf+tBp5bJvX1JvtVf80h533HHlqKOOqm8BYNmyZdU5Htdcc03vg7p2i+dGPPvsOfVW/zYYkCjdIQcf0PM/0JnihZkzZ1YhMRoBRrOIxS2/uKVccOEF5YEHHqhvbb848mrevEs2+Eq1GwxIuPCC88onP/l/663OiHhERA499NBqWA0wGsRUVaxDLrhjQbn025dW52V1+pD6GHkM5dnZhxSQ8L73nVS9ve7aq6u3nTJ58uTylre8pRx04EFl3HbjxAQYcVrRiINWbrrppvKjH/2o3HvvvR1ff2pFY0NTVy1DDkhr0eav33hEWbRoYXW9k3beeefy+j9/fZnx0hk9w6spZfz48WW77bYrY8eOre8BsHmIEUUEI/arEY0YZdx44409+9ZF1W3Dceh0a9qqur6BqauWIQekpZNHZg1k1113LVN7/gf33nvvaqorRikRlG233bY6aiTE2y233LK6tI5pj0uMYFqjmNb1+G9Nz39DEfdf/1FBf7eF9W8fyv0Guj6Qodynpb/7bszX29DHZ2Q/fmM+bmO+76Het+9tA32uwWQ+JsTHhczHhuzXbdmUj9+Y772/r7MxX3tDH78xn6ul78f0fdu6xJGKrUsc9h6XlU+vLE89/VR58sknq/s/vuzx8vAjD1fRuP/++6unC4rnr1qyZEnvPmq4fOeKq9Z5tcGh2OiAhOFYExlInPAWo5D4h580aVLvCXARkFZQIiJxaGLrBxSX+GVoXcJgv1Ct+wz0/r4G+zwtm/K1Bnt/631h/fev/zVb2/E2fuH7fuxA1v8c62t9jsG+t8E+PrS+Rlzi5zTQ5+p7+0Df10C3r29T7xe3h8HeFwb6Gut/fOvrrP/1Brq9r7i9779b3/sO9Pn66u8+Yf37tfT3OVqG8rFhoPcPZrCv29dA9xvsa7fe19K6T3V7z9XWg834u4n3td62ohGji6effroaYcTbeCqY1tPBtEYdrSOp4r79fQ+dFieOD3bC4EBSAQmf+MTHy9cvPL/e6h4RihAjkviBx6HB3fADAkaHvgGKgCxfvrwKR+jG5xXLxiOkAxJiYb3Ti+oANGPmYUeUL/fzNO1DtUkBiaFYrIfcddeC+hYANgex3jFv3rfK+An5lzHfpBWbCT1fOJ4nZWMXXgAYPk3EI2zykr+IAGw+mopHaOSYsVZEhnLmIgDDI/bRTcUjbNIaSH/OOWdOmXuO1/gA6CazZr2rfOSMj9dbzWg8IKGbzhMBGM3Gj59QZp9yak9A1j4dVZPaEpCwaOHCcvzxxw7L054AsPbpSb78lfPatkbdtvPm47lUvnPF1dZFAIZBTFld0bMPbucBTsP3xCsAbNbaNoXVV7yiYSyum84CaK+Ytjr7M3Oq1zNvt44EJMRZ6xdeeJ4jtADaJJ7X6sRZJzV2mO6GdCwgLbG4fs7cOR17nXWAkS5GG/EiUEN9HY+mdDwgLa2QBDEB2DitKaoYdXRiuqo/wxaQvloxufaaq8uyZWtf+RCAdcU5Hccc8+Zy9DF/0xVPH9UVAWmJkMQrHl522SXVWwDWjjZmzjy8iken1jeGoqsC0peYAKNZt0ajr64NSF/Lli4td961oArJf99wfbnzzgWmuoARI6ampk+fUU1LzTzs8DK95223RqOvzSIg/WlFJc4tWbjwgWrEsrQnKnE7QDeKczSqt1OnlqlTp1XhiGhM7fDRU03ZbAMCwHAq5f8D1V2Lu1aTNZsAAAAASUVORK5CYII=",alt:"background",className:"inner_box_hw18_img"}),Object(r.jsxs)("div",{className:"container_hw18",children:[Object(r.jsx)("h2",{className:"title_hw18",children:"Contacts"}),Object(r.jsx)("input",{className:"search_input",placeholder:"SEARCH",type:"search",name:"search",onChange:function(A){c(A.target.value)},value:a}),Object(r.jsx)(u,{onChange:function(){var A=document.querySelectorAll('input[type="checkbox"]:checked'),e=[];A.forEach((function(A){e.push(A.value)}));var C=j.filter((function(A){return!(A.gender||!e.includes("undefined"))||e.includes(A.gender)}));i(C)}}),C.map((function(A){return Object(r.jsx)(b,{contact:A},A.id)}))]})]})},m=C(10),x=C(3);C(28);function p(){var A=function(A){document.querySelectorAll(".link").forEach((function(A){A.style.color="rgb( 36, 42, 29);"})),A.target.style.background="rgba( 49, 78, 15, 0.45);"};return Object(r.jsxs)("div",{className:"navigation",children:[Object(r.jsx)(m.b,{className:"link",to:"/home",onClick:A,children:"Home"}),Object(r.jsx)(m.b,{className:"link",to:"/twitter_post",onClick:A,children:"Homework 17"}),Object(r.jsx)(m.b,{className:"link",to:"/contact_list",onClick:A,children:"Homework 18"})]})}var h=function(){return Object(r.jsx)(m.a,{children:Object(r.jsxs)(i.a.Fragment,{children:[Object(r.jsx)(p,{}),Object(r.jsx)(x.a,{path:"/twitter_post",component:d}),Object(r.jsx)(x.a,{path:"/contact_list",component:K})]})})},q=function(A){A&&A instanceof Function&&C.e(3).then(C.bind(null,38)).then((function(e){var C=e.getCLS,I=e.getFID,i=e.getFCP,t=e.getLCP,n=e.getTTFB;C(A),I(A),i(A),t(A),n(A)}))};n.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root")),q()}},[[37,1,2]]]);
//# sourceMappingURL=main.e793167d.chunk.js.map