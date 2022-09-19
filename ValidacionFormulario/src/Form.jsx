import React, { useState } from "react";
import AlertError from './AlertError'
import { Footer } from './Footer'

function Form(params) {
    
    const [name, setName] = useState("");
    const [movil, setMovil] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if([name, movil, email, birthday].includes("")){
            setError(true);
            return;
        }

        setError(false);

        setName("");
        setMovil("");
        setEmail("");
        setBirthday("");

        okModal();
    }

    const okModal = () => {
        Swal.fire({
            title: "ENVIADO CON EXITO !",
            icon: "success",
            confirmButtonText: "Cerrar",
        });
    }

    return(
        <>
            <form className="from-gray-light mt-11" onSubmit={handleSubmit}>
                <div className="flex flex-row">
                    <div className="basis-1/2 fond">
                        <div>
                            <div className="mt-1 max-w-md text-left">
                                <span className="font-black">👽 Nombres : </span>
                                <input type="text" className="mt-2 block w-full rounded-md border-gray-300
                                    shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" id="name" placeholder="Escriba aquí ..." value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="mt-4 max-w-md text-left">
                                <span className="font-black">📱 Celular / WhatsApp : </span>
                                <input type="text" className="mt-2 block w-full rounded-md border-gray-300
                                    shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" id="movil" placeholder="Escriba aquí ..." value={movil} onChange={(e) => setMovil(e.target.value)}/>
                            </div>
                            <div className="mt-4 max-w-md text-left">
                                <span className="font-black">✉ Correo Electrónico : </span>
                                <input type="text" className="mt-2 block w-full rounded-md border-gray-300
                                    shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" id="email" placeholder="Escriba aquí ..." value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="mt-4 max-w-md text-left">
                                <span className="font-black">🎉 Cumpleaños : </span>
                                <input type="date" className="mt-2 block w-full rounded-md border-gray-300
                                    shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" id="birthday" placeholder="Escriba aquí ..." value={birthday} onChange={(e) => setBirthday(e.target.value)}/>
                            </div>
                            <div className="mt-6 max-w-md">
                                <button type="submit" className="bg-purple w-full text-white hover:bg-blue-800 font-bold py-2 px-4 border-b-4 border-blue-700 rounded" id="send">Enviar</button>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/2 fond">
                        <div className="mt-1 max-w-md text-left">
                            <span className="font-black">👽 Nombres : </span>
                            <span className="font-black" id="name-results">{name}</span>
                        </div>
                        <div className="mt-4 max-w-md text-left">
                            <span className="font-black">📱 Celular / WhatsApp : </span>
                            <span className="font-black" id="movil-results">{movil}</span>
                        </div>
                        <div className="mt-4 max-w-md text-left">
                            <span className="font-black">✉ Correo Electrónico : </span>
                            <span className="font-black" id="email-results">{email}</span>
                        </div>
                        <div className="mt-4 max-w-md text-left">
                            <span className="font-black">🎉 Cumpleaños : </span>
                            <span className="font-black" id="birthday-results">{birthday}</span>
                        </div>

                        {error && (
                            <AlertError>
                                <div className="mt-20 max-w-md text-left card mb-14">
                                    <span className="font-black text-lg" id="message">
                                        <p className="text-violet">🔥 Todos los campos son obligatorios 🔥</p>
                                    </span>
                                </div>
                            </AlertError>
                        )}
                        {!error && (
                            <AlertError>
                                <div className="text-9xl pt-14 mr-12 mb-10">💻</div>
                            </AlertError>
                        )}

                        <div className="max-w-md text-center">
                            <Footer />
                        </div>
                    </div>
                </div>
            </form>
        </>
    )

}

export default Form;