//import logo from './logo.svg';

import React ,{Component} from 'react';
import Product from './conponents/Product';
class App extends Component{
      constructor(props){
        super(props);
          this.themsanpham=this.themsanpham.bind(this);
          this.state={ product :[
          {
            maso:"123",
            ten:"Movado 1",
            image:"https://tse1.mm.bing.net/th?id=OIP.xbL2Qy0dzi7xI-1Bi6w6JQHaKz&pid=Api&P=0&w=300&h=300",
            gia:1000,
          },
          {
            maso:"123s",
            ten:"rulex 112",
            image:"https://tse3.mm.bing.net/th?id=OIP.vMXBHIXVoysU1DsSMP1tHgHaOJ&pid=Api&P=0&w=300&h=300",
            gia:15000,
          },
          {
            maso:"12345",
            ten:"Movado 2",
            image:"https://tse4.mm.bing.net/th?id=OIP.hXAVbsy5QrD37-704JWN0gHaK8&pid=Api&P=0&w=300&h=300",
            gia:"15221",
          },
          {
            maso:"4444",
            ten:"Movado 2",
            image:"https://tse3.mm.bing.net/th?id=OIP.lg1IjkD3uw-Gjku40jMeHgHaHa&pid=Api&P=0&w=300&h=300",
            gia:"1054",
          },
          {
            maso:"123",
            ten:"Movado 1",
            image:"https://tse1.mm.bing.net/th?id=OIP.xbL2Qy0dzi7xI-1Bi6w6JQHaKz&pid=Api&P=0&w=300&h=300",
            gia:1000,
          },
          {
            maso:"12345",
            ten:"Movado 2",
            image:"https://tse4.mm.bing.net/th?id=OIP.hXAVbsy5QrD37-704JWN0gHaK8&pid=Api&P=0&w=300&h=300",
            gia:"15221",
          },
    
        ] 

         }
      }
      themsanpham(){
        var ten=this.refs.ten.value;
        var maso=this.refs.maso.value;
        var gia=this.refs.gia.value;
        if(0!==1){
          // lam sao de them danh sach doi tuong vao state
        }
        alert("ten: "+this.refs.ten.value+", maso: "+this.refs.maso.value+", gia: "+this.refs.gia.value +"    sss "+this.refs.hinh.value);
      }

      
 render(){ 

   let valueInTable=this.state.product.map((result,index)=>{
     return (  
                      <tr key={index}>
                        <td>{result.maso}</td>
                        <td>{result.ten}</td>
                        <td>{result.gia}</td>
                      </tr>
     

     )
   })

    let cp=this.state.product.map((result,index)=>{
      return (
        
          <Product
            key={index}
             maso={result.maso}
             ten={result.ten}
             image={result.image}
             gia={result.gia}
             >
               hang cui bap
          </Product>
          

      );
    });
     return (
        
        <div>
          
            
            
            <nav className="navbar navbar-inverse">
              <a className="navbar-brand" href="true">Lap trinh reac js</a>
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="true">Trang chu</a>
                </li>
                <li>
                  <a href="#true">Dong ho  hieu</a>
                </li>
                <li>
                  <a  href="true">Dong ho thuong luu </a>
                </li>
              </ul>
            </nav>





            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                        
                     
                         
                    
                     
                        <div className="panel panel-danger">
                            <div className="panel-heading">
                              <h3 class="panel-title">nhan du lieu tu textfile</h3>
                              </div>
                                <div className="panel-body">
                                <div className="form-group">
                           <label >maso</label>
                           <input type="text" className="form-control" id="" ref="maso"placeholder="Nhap Ma so "/>
                           <label >ten</label>
                           <input type="text" className="form-control" id="" ref="ten"placeholder="Nhap ten san dong ho"/>
                           <label >gia san pham</label>
                           <input type="text" className="form-control" id="" ref="gia"placeholder="nhap gia "/>
                           <label >them hinh</label>
                           <input type="file" className="form-control" id="" ref="hinh"/>
                         </div>
                       
                         
                       
                         <button type="submit" className="btn btn-primary" onClick={this.themsanpham}>luu</button>
                            </div>
                        </div>
              </div>
              



              
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  
                
              
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Ma so</th>
                    <th>Ten san pham </th>
                    <th>gia </th>
                  </tr>
                </thead>
                <tbody>
                 {valueInTable}
                </tbody>
              </table>
              </div>
              </div>
         
            <div className="container">
            
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {cp}
              </div>
              
            
            
          </div>

        
          

             
             
             
      
          
        
        
        
</div>
     );
  }

}
export default App;
