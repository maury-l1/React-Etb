import React, { useState, useRef, useEffect } from "react";

function Contacto() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [enviado, setEnviado] = useState(false);

    const nombreRef = useRef(null);

    useEffect(() => {
        nombreRef.current.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ nombre, email, mensaje });
        setNombre("");
        setEmail("");
        setMensaje("");
        setEnviado(true);
        nombreRef.current.focus();
    };

    return (
        <section className="bg-red flex flex-col items-center py-12">
            {/* Encabezado */}
            <div className="bg-orange w-full h-16 flex justify-center items-center mb-8">
                <div className="w-3/5 flex justify-start">
                    <h1 className="text-amber-50 text-4xl font-bold">Contacto</h1>
                </div>
            </div>

            {/* Formulario */}
            <form
                onSubmit={handleSubmit}
                className="bg-red w-3/5 flex flex-col space-y-6"
            >
                <div className="flex flex-col">
                    <label htmlFor="nombre" className="text-white mb-2">
                        Nombre:
                    </label>
                    <input
                        id="nombre"
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        ref={nombreRef}
                        placeholder="Tu nombre"
                        required
                        aria-label="Nombre completo"
                        className="p-2 rounded-md border border-gray-300"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="text-white mb-2">
                        Email:
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Tu correo electrónico"
                        required
                        aria-label="Correo electrónico"
                        className="p-2 rounded-md border border-gray-300"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="mensaje" className="text-white mb-2">
                        Mensaje:
                    </label>
                    <textarea
                        id="mensaje"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                        placeholder="Escribe tu mensaje"
                        required
                        aria-label="Mensaje"
                        className="p-2 rounded-md border border-gray-300 h-32 resize-none"
                    ></textarea>
                </div>

                <button
                    role="button"
                    aria-label="Enviar mensaje de contacto"
                    tabIndex={0}
                    keyPress={(e) => {
                        if (e.key === "Enter" || e.key === " ") handleSubmit(e);
                    }}
                    type="submit"

                    className="bg-orange-500 text-amber-50 px-6 py-2 rounded-md w-32 hover:bg-orange-600 transition-colors flex justify-center items-center cursor-pointer"
                >
                    Enviar
                </button>

                {enviado && (
                    <p className="text-green-300 mt-4 font-semibold">
                        ¡Gracias! Tu mensaje ha sido enviado.
                    </p>
                )}
            </form>

            {/* Información de contacto */}
            <div className="bg-red w-3/5 mt-12 flex flex-col space-y-2 text-amber-50">
                <h2 className="text-2xl font-semibold">Horario de atención</h2>
                <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                <p>Sábados: 10:00 AM - 2:00 PM</p>
                <p>Domingos: Cerrado</p>
                <p className="mt-2">¿Tienes dudas o consultas? Completa el formulario y te responderemos a la brevedad.</p>
            </div>
        </section>
    );
}

export default Contacto;