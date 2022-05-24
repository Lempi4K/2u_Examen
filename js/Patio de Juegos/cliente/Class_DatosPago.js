function Class_DatosPago(){
    var priv_total = 0.0;
    var priv_envio = 0;
    var priv_direccionEnvio = "";
    var priv_cliente = "";
    var priv_producto = "";
    var priv_precio = 0.0;
    var priv_descuento = 0.0;
    var priv_tarjeta = "";
    function DatosPago(){
        //Setters y Getters
        this.setTotal = function (total){
            priv_total = total;
        }
        this.getTotal = function (){
            return priv_total;
        }

        this.setEnvio = function (envio){
            priv_envio = envio;
        }
        this.getEnvio = function (){
            return priv_envio;
        }

        this.setDireccionEnvio = function (direccionEnvio){
            priv_direccionEnvio = direccionEnvio;
        }
        this.getDireccionEnvio = function (){
            return priv_direccionEnvio;
        }

        this.setCliente = function (cliente){
            priv_cliente = cliente;
        }
        this.getCliente = function (){
            return priv_cliente;
        }

        this.setProducto = function (producto){
            priv_producto = producto;
        }
        this.getProducto = function (){
            return priv_producto;
        }

        this.setPrecio = function (precio){
            priv_precio = precio;
        }
        this.getPrecio = function (){
            return priv_precio;
        }

        this.setDescuento = function (descuento){
            priv_descuento = descuento;
        }
        this.getDescuento = function (){
            return priv_descuento;
        }

        this.setTarjeta = function (tarjeta){
            priv_tarjeta = tarjeta;
        }
        this.getTarjeta = function (){
            return priv_tarjeta;
        }

        //Funciones
        this.PrecioTotal = function(){
            this.setTotal(((this.getPrecio() * (1 - this.getDescuento()))  + this.getEnvio()).toFixed(2))
            return this.getTotal();
        }
        this.Resetear = function (){
            this.setTotal(0.0);
            this.setEnvio(0);
            this.setDireccionEnvio("");
            this.setCliente("");
            this.setProducto("");
            this.setPrecio(0.0);
            this.setDescuento(0.0);
            this.setTarjeta("");
        }
        this.toString = function(){
            return "Variables del objeto: \n" + 
            "Total: " + this.getTotal() + "\n" +
            "Envio: " + this.getEnvio() + "\n" +
            "Direccion del Envio: " + this.getDireccionEnvio() + "\n" +
            "Cliente: " + this.getCliente() + "\n" +
            "Producto: " + this.getProducto() + "\n" +
            "Precio: " + this.getPrecio() + "\n" +
            "Descuento: " + this.getDescuento() + "\n" +
            "Tarjeta: " + this.getTarjeta();
        }
    }
    return new DatosPago()
}