import { useTheme } from "@react-navigation/native";
import { createContext, useContext, useEffect, useState } from "react";
import { Appearance } from "react-native";
import { useColorScheme } from "react-native";




const Tema = createContext()


export function TemaProvider({children}){

    const [tema,setTema] = useState()


    // const scheme = useColorScheme();
    const colorTheme = useColorScheme()

     useEffect(()=>{
      
        setTema(colorTheme)
    
     },[colorTheme])



    console.log(tema)


    return (
        <Tema.Provider value={{tema,setTema}}>
            {children}
        </Tema.Provider>
    )

}

export function useTema(){
    const tema = useContext(Tema)
    return tema
}
