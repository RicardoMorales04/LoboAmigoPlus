class Negocio{
    constructor(id,data){
        this.bandera=0;
        this.id=id;
        this.nombre=data.nombre;   
  
        this.desc=data.desc;
       
       
        this.foto=data.foto;   
        this.userid=data.userid;
        this.calificacion=data.calificacion||0; 
        this.usuariosCalificacion = data.usuariosCalificacion || [];
    }
    set id(id){
        if(id!=null)
        id.length>0?this._id=id:bandera=1;
    }

    set nombre(nombre){
        nombre.length>0?this._nombre=nombre:this.bandera=1;
    }
   
    set desc(desc){
        desc.length>0?this._desc=desc:this.bandera=1;
    }

    


    set foto(foto){
        foto.length>0?this._foto=foto:this.bandera=1;
    }

    set userid(userid){
        userid.length>0?this._userid=userid:this.bandera=1;
    }

    set calificacion(calificacion) {
        this._calificacion = !isNaN(calificacion) ? parseFloat(calificacion) : this.bandera = 1;
    }
    

    get id(){
        return this._id;
    }

    get nombre(){
        return this._nombre;
    }


    get desc(){
        return this._desc;
    }

   

    get foto(){
        return this._foto;
    }
    get userid(){
        return this._userid;
    }
    get calificacion(){
        return this._calificacion;
    }

    
    get obtenerDatos(){
        if(this._id==null){
            return {
                nombre:this.nombre,
                
                desc:this.desc,
                
             
                foto:this.foto,
                userid:this.userid,
                calificacion:this.calificacion,
                usuariosCalificacion:this.usuariosCalificacion
            }
        }else{
            return{
                id:this.id,
                nombre:this.nombre,
               
                desc:this.desc,
               
                
                foto:this.foto ,
                userid:this.userid,
                calificacion:this.calificacion,
                usuariosCalificacion:this.usuariosCalificacion
            }
        }

    }
}

module.exports=Negocio;