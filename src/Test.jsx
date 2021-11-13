import React from 'react'
import "./testcss.css"
import { useSelector } from 'react-redux';
export default function Test() {
    const cartItem = useSelector((state) => state.Reducer.cartItemAdded);
console.log('cartItem :>> ', cartItem);


    return (
        <div>
            <div class="card">
    <div class="row">
        <div class="col-md-8 cart">
            <div class="title">
                <div class="row">
                    <div class="col">
                        <h4><b>Shopping Cart</b></h4>
                    </div>
                    <div class="col align-self-center text-right text-muted">3 items</div>
                </div>
            </div>
            {/* <div class="row border-top border-bottom">
                <div class="row main align-items-center">
                    <div class="col-2"><img class="img-fluid" src="https://i.imgur.com/1GrakTl.jpg"/></div>
                    <div class="col">
                        <div class="row text-muted">Shirt</div>
                        <div class="row">Cotton T-shirt</div>
                    </div>
                    <div class="col"> <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a> </div>
                    <div class="col">&euro; 44.00 <span class="close">&#10005;</span></div>
                </div>
            </div> */}
            {/* <div class="row">
                <div class="row main align-items-center">
                    <div class="col-2"><img class="img-fluid" src="https://i.imgur.com/ba3tvGm.jpg"/></div>
                    <div class="col">
                        <div class="row text-muted">Shirt</div>
                        <div class="row">Cotton T-shirt</div>
                    </div>
                    <div class="col"> <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a> </div>
                    <div class="col">&euro; 44.00 <span class="close">&#10005;</span></div>
                </div>
            </div> */}

            {cartItem.map((item)=>   <div class="row border-top border-bottom  p-3 ">
                <div class="row main align-items-center">
                    <div class="col-2"><img class="img-fluid" src={item.img}/></div>
                    <div class="col">
                        <div class="row text-muted text-truncate">{item.name}</div>
                        
                    </div>
                    <div className="d-flex">   <button className='btn btn-success'>-</button>
                   
                   <h2  classname="">1</h2>
                   
                   <button className='btn btn-danger' >+</button> </div>
                 
                    {/* <div class="col">&euro; 44.00 <span class="close">&#10005;</span></div> */}
                </div>
            </div>)}
         
            {/* <div class="back-to-shop"><a href="#">&leftarrow;</a><span class="text-muted">Back to shop</span></div> */}
        </div>
        {/* <div class="col-md-4 summary">
            <div>
                <h5><b>Summary</b></h5>
            </div>
        
            <div class="row">
                <div class="col">ITEMS 3</div>
                <div class="col text-right">&euro; 132.00</div>
            </div>
            <form>
                <p>SHIPPING</p> <select>
                    <option class="text-muted">Standard-Delivery- &euro;5.00</option>
                </select>
                <p>GIVE CODE</p> <input id="code" placeholder="Enter your code"/>
            </form>
            <div class="row">
                <div class="col">TOTAL PRICE</div>
                <div class="col text-right">&euro; 137.00</div>
            </div> <button class="btn">CHECKOUT</button>
        </div> */}
    </div>
</div>
        </div>
    )
}
