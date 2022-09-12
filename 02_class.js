class Uno {
    constructor() {
        this.a = null;
        this.b = null;
    }

    guardar1() {
        return this.a;


        // crea metodos para consultar y editar las propiedades
    }
}




class Dos {
    constructor(nombre1, apellido2) {
        this.nombre1 = nombre1;
        this.apellido2 = apellido2;
    }

    guardar() {
        let nombre1 = document.getElementById("nombre1");
        let apellido2 = document.getElementById("apellido2");
        this.nombre1 = nombre1.value;
        this.apellido2 = apellido2.value;
    }

    // crea metodos para consultar las propiedades
}
class Uno extends Dos {
    constructor() {
        super();

    }

    mostrar() {
        this.anuncio = "Juan: " + this.apellido + ", Torres: " + this.nombre + ",Juanes"
    }

    mostrar2() {
        this.anuncio2 = "Torreses :" + this.apellido2 + ",Siuuu" + this.nombre2 + ",DelMonte"
    }
}

export { Uno, Dos }
