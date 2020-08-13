import React from 'react';

class App extends React.Component {
  show = () =>
  {
    let a = document.querySelector('#text').value;
    document.querySelector('.face p span').innerHTML= a;   
  }

  change = (color) =>
  {
    console.log("invoked");
    document.querySelector('.face p span').style.color=color;
  }

  changeStyle = (style) =>
  {
    let a= document.querySelector('#text').value;
    document.querySelector('.face p span').innerHTML= a;   
    document.querySelector('.face p span').style.fontStyle=style;
  }

  changeWeight = (style) =>
  {
    let a=document.querySelector('#text').value;
    document.querySelector('.face p span').innerHTML= a;   
    document.querySelector('.face p span').style.fontWeight=style;
  }

  render()
  {
  return (
    <main>
    {/* <!-- DESCRIPTION --> */}
    <div class="description">
        <h1>TEXT EDITOR</h1>
        <p>Little Text Editor-Change font color and font style of your own </p>
    </div>


    {/* <!-- COLOR PALATTE --> */}
    <div class="colors">
     <button class="red" onClick={() => this.change('#000080')}></button>   
     <button class="yellow" onClick={() => this.change('#FA8072')}></button>   
     <button class="blue" onClick={() => this.change('#CD5C5C')}></button>   
     <button class="pink" onClick={() => this.change('#FF00FF')}></button>   
     <button class="purple" onClick={() => this.change('purple')}></button>  
     <button class="teal" onClick={() => this.change('#008080')}></button>  
     <button class="black" onClick={() => this.change('black')}></button>  
    </div>
    
  <div class="styles">
    <button class="bold" onClick={() => this.changeStyle('normal')}><i class="fab fa-neos"></i></button>   <br/>
    <button class="italic" onClick={() => this.changeStyle('italic')}>  <i class="fas fa-italic"></i></button> <br/>
    <button class="underline" onClick={() => this.changeStyle('oblique 60deg')} style={{padding: "1.5em 1.7em;"}}>/</button>  
    <button class="underline" onClick={() => this.changeWeight('bold')} style= {{padding: "1.5em 1.7em;"}}><i class="fas fa-bold"></i></button>  
   </div>

    {/* <!-- FACE REVEALS --> */}
    <div class="text">
        <textarea  id="text" cols="100" rows="7" placeholder="insert text here"></textarea>
    </div>
    <div class="show">
        <button onClick={() => this.show()} id="show">SHOW TEXT</button>
    </div> 
        <div class="face">
        <p><span> </span></p>
    </div>
    </main>
  );
  }
}

export default App;
