import React,{Component} from'react';

class Form extends Component{

    constructor(props){
        super(props);
        this.state={
            username:'',


        };
        this.onHandlechange=this.onHandlechange.bind(this);
        
        this.onHandleSubmit=this.onHandleSubmit.bind(this);
    }


    onHandlechange(event){
       var target=event.target;
       var name=target.name;
       var value=target.value;
        

    }
    
    onHandleSubmit(event){
        event.preventDefault();
        console.log(this.setState);

    }
    render(){


      
        return(
            


            <div className="container-fluid">
                
                <div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        
                        <div className="panel panel-primary">
                              <div className="panel-heading">
                                    <h3 className="panel-title">Form Panel title</h3>
                              </div>
                              <div className="panel-body">
                                  
                                  <form onSubmit={this.onHandleSubmit}>
                                      <legend>Form title</legend>
                                  
                                      <div className="form-group">
                                          <label >label</label>
                                          <input type="text"  onChange={this.onHandlechange}
                                          className="form-control" name='txtname' placeholder="them ten"/>
                                      </div>
                                      <div className="form-group">
                                          <label >label</label>
                                          <input type="password"  onChange={this.onHandlechange}
                                          className="form-control" name='password' placeholder="mat khau "/>
                                      </div>
                                  
                                      
                                  
                                      <button type="submit" className="btn btn-primary">xac nhan</button>___
                                      <button type="reset" className="btn btn-default">Xoa </button>
                                  </form>
                                  
                                    
                              </div>
                        </div>
                        
                    </div>
                </div>
                

            </div>
        )
    
    
    }
}


export default Form;