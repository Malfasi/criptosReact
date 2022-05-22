import { useState, useEffect } from "react"
import styled from "@emotion/styled"
import ImagenCripto from "./img/imagen-criptos.png"

//Componentes
import Formulario from "./components/Formulario"
import Resultado from "./components/Resultado"
import Spinner from "./components/Spinner"
//Styled Components
const Contenedor = styled.div`
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5rem;
  }
`
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`
const Heading = styled.h1`
  color: #ffffff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
  &:after {
    content: "";
    width: 100px;
    height: 5px;
    display: block;
    background-color: #66a2fe;
    margin: 10px auto 0 auto;
  }
`
//Export
const App = () => {
  const [selectedMonedas, setSelectedMonedas] = useState({})
  const [resultado, setResultado] = useState({})
  const [spinner, setSpinner] = useState(false)
  //Effects
  useEffect(() => {
    if (Object.keys(selectedMonedas).length > 0) {
      const consultar = async () => {
        setSpinner(true)
        setResultado({})
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${selectedMonedas.criptos}&tsyms=${selectedMonedas.moneda}`
        const req = await fetch(url)
        const res = await req.json()

        setResultado(
          res.DISPLAY[selectedMonedas.criptos][selectedMonedas.moneda]
        )

        setSpinner(false)
      }

      consultar()
    }
  }, [selectedMonedas])
  return (
    <Contenedor>
      <Imagen src={ImagenCripto} />
      <div>
        <Heading>Cotizador de Criptomonedas</Heading>
        <Formulario setSelectedMonedas={setSelectedMonedas} />
        {spinner && <Spinner />}
        {resultado.PRICE && <Resultado resultado={resultado} />}
      </div>
    </Contenedor>
  )
}

export default App
