import React from "react";
import Topo from './Componentes/Topo';
import Produtores from "./Componentes/Produtores";

export default function Home(){
    return <Produtores topo={Topo}/>
}