import { useTheme } from "@react-navigation/native";
import { createContext, useContext, useEffect, useState } from "react";
import { Appearance } from "react-native";
import { useColorScheme } from "react-native";




const Tema = createContext()


export function TemaProvider({ children }) {

    const [tema, setTema] = useState()
    const [text, setText] = useState()
    const [corButton,setCorButton] = useState()



    // const scheme = useColorScheme();
    const colorTheme = useColorScheme()

    useEffect(() => {

        setTema(colorTheme === 'dark' ? 'black' : 'white')
        setText(colorTheme === 'dark' ? 'white' : '#23386D')
        setCorButton(colorTheme === 'dark' ? '#304FFE' : 'rgba(48, 79, 254, 0.60)')


    }, [colorTheme, tema, text, corButton])



    console.log(tema)


    return (
        <Tema.Provider value={{ tema, setTema,text,corButton }}>
            {children}
        </Tema.Provider>
    )

}

export function useTema() {
    const tema = useContext(Tema)
    return tema
}
