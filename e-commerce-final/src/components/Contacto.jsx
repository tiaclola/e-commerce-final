const iniciarSesionEmailPass = async (email, password) => {
  try {
    // lógica para iniciar sesión (ej: Firebase)
  } catch (error) {
    console.error(error);
  }
};

function Contacto () {

    return(
    
        <div className='d-flex flex-column  justify-content-center  align-items-center '
            style={{ minHeight: '60vh', marginTop: "20px" , color: 'black' }}>

            <form action="https://formspree.io/f/manyngrb" method="POST"  className="w-100"
    style={{ maxWidth: "600px"}}>
                <fieldset className="border p-3 rounded-3" style={{backgroundColor:"lightblue"}}>
                    <legend>
                    <h3>Formulario de Contacto</h3>
                    </legend>

                    <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nombre de la persona"
                        className="form-control"
                        required
                        minLength="3"
                        maxLength="10"
                    />
                    </div>

                    <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Apellido</label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        className="form-control"
                    />
                    </div>

                    <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="usuario@cuenta.com"
                        className="form-control"
                        required
                    />
                    </div>

                    <div className="mb-3">
                    <label htmlFor="message" className="form-label">Mensaje</label>
                    <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="3"
                        className="form-control"
                    ></textarea>
                    </div>

                    <div className="mb-3">
                    <input type="reset" value="Restablecer" className="btn btn-secondary me-2" />
                    <input type="submit" value="Enviar" className="btn btn-secondary" />
                    </div>
                </fieldset>
            </form>

        </div>
    )
}

export default Contacto;
