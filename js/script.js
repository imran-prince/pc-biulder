function productchoice(id,price,at,tx)
{ 
     document.getElementById(id).innerText=price
     totalcost()   
}
document.getElementById('apply-btn').addEventListener('click',function(){
        const prm= document.getElementById('promo-input')
        const pm=prm.value
        if(pm=='imran')
        { 
             const aft= document.getElementById('total-price')
             const aftxt=parseInt(aft.innerText)
             aft.innerText=aftxt-100
             document.getElementById('applied-text').style.display='block'
             document.getElementById('nt').style.display='none'
              prm.value=''      
        }
    })

 

 
function btn(bid,tid,p)
{
    document.getElementById(bid).addEventListener('click',function()
    {
        productchoice(tid,p)

    })
}
function txt(tid)
{
    const txtt=document.getElementById(tid) .innerText
    const txt=parseInt(txtt)
    return txt
}
function totalcost()
{
    const mp=txt('memory-cost')
    const bp=txt('best-cost')
  const sp=txt('storage-cost')
   const dp=txt('delivery-cost')
   const t=mp+sp+dp+bp
   document.getElementById('total-price').innerText=t

}
btn('eightGB','memory-cost',100)
btn('sixteenGB','memory-cost',200)
btn('ssd1','storage-cost',300)
btn('ssd2','storage-cost',500)
btn('ssd3','storage-cost',800)
btn('free-delivery','delivery-cost',0)
btn('paid-delivery','delivery-cost',100)
//  btn('',0,'applied-text',10)

 
 
