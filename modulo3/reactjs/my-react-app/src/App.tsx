
import AreaPentagono from "./components/SumaForm";
import ListaPosts from "./fetch/ListaPosts";
import FormularioBasico from "./formularios/FormularioBasico";
import FormularioZod from "./formularios/FormularioZod";
import ListaUsuariosPaginado from "./formularios/ListasUsuariosPaginado";
import { GaleriaDiferida } from "./useTransition/galeriaDiferida";

export default function App() {

  return (
    <>
     

     <GaleriaDiferida/>
     <FormularioBasico/>
     <AreaPentagono/>
     <FormularioZod/>
     <ListaPosts/>
     <ListaUsuariosPaginado/> 
   
    </>
  );
}