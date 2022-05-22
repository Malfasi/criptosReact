import { useState, useEffect } from "react"
import styled from "@emotion/styled"
//Components
import Error from "./Error"

//Mis Hooks
import useSelectMonedas from "../hooks/useSelectMoneda"
//Data
import { monedas } from "../data/coins.js"
//Styled

const InputSubmit = styled.input`
  width: 100%;
  display: block;
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #9497ff;
  transition: background-color 0.3s ease-in-out;
  margin-top: 30px;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`

const Formulario = ({ setSelectedMonedas }) => {
  //States

  const [criptomonedas, setCriptomonedas] = useState([])
  const [error, setError] = useState(false)
  //Effects
  useEffect(() => {
    async function consultarAPI() {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD"
      const req = await fetch(url)
      const res = await req.json()

      const arrayCriptos = res.Data.map((cripto) => {
        const ojb = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        }

        return ojb
      })

      setCriptomonedas(arrayCriptos)
    }

    consultarAPI()
  }, [])
  //Hooks Propios
  const [moneda, SelectMoneda] = useSelectMonedas(
    "Seleccione su moneda",
    monedas
  )

  const [criptos, SelectCriptos] = useSelectMonedas(
    "Seleccione CriptoMoneda",
    criptomonedas
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    if ([moneda, criptos].includes("")) {
      setError(true)
      return
    }
    setError(false)

    setSelectedMonedas({ moneda, criptos })
  }

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMoneda />
        <SelectCriptos />
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  )
}

export default Formulario
