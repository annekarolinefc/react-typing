//Compontente da Aplicação

//importar a biblioteca
import React from 'react';
 const App = () => {
     return (
         <div className="container">
             <div className="valid-keys">
                <div className="matched">Ann</div>
                <div className="remainder">e</div>
             </div>
             
             <div className="typed-keys">asfemerasf</div>

             <div className="completed-works">
                 <ol>
                     <li>cidade</li>
                     <li>carro</li>
                     <li>profissional</li>
                 </ol>
             </div>
         </div>
     )

 }

 //exportar o componente
 export default App;