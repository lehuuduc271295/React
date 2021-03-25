import React , {Component} from 'react';

class Product extends Component {

    
    constructor(props){
        super(props);
        this.muahang1=this.muahang1.bind(this);
    }

    muahang(text){
        alert(" da mua : "+text);

    }   
    muahang1(){
        alert("da mua "+ this.props.name);
    }
    muahang2=()=>{
        alert("da mua  roi ne : "+this.props.ten);
    }
    
    render(){
       
        return(
           
           <div>  
                        
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="thumbnail">
                            <img alt={this.props.ten} src={this.props.image}/>
                            <h2>{this.props.ten}</h2>
                            <h3>{this.props.gia}</h3>
                            <p>Ma : {this.props.maso}</p>
                            <p>{this.props.children}</p>
                            
                            <button type="button" class="btn btn-danger" onClick={()=>this.muahang(this.props.ten)}>mua hang </button>

                            <button type="button" class="btn btn-danger" onClick={this.muahang2}>mua hang </button>
                        </div>
                       
                       
                    </div>
                 
            </div> 
            

        );
    }
}

export default Product;