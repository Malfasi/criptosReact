import styled from "@emotion/styled"

const Result = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  color: #fff;
`
const Imagen = styled.img`
  display: block;
  width: 120px;
`
const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`
const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`
const Resultado = ({ resultado }) => {
  const { PRICE, CHANGEPCT24HOUR, LOWDAY, HIGHDAY, IMAGEURL, LASTUPDATE } =
    resultado

  return (
    <Result>
      <Imagen src={`https://www.cryptocompare.com/${IMAGEURL}`} />
      <div>
        <Precio>
          El precio es de: <span> {PRICE}</span>
        </Precio>
        <Texto>
          Precio minimo del dia:
          <span> {LOWDAY}</span>
        </Texto>
        <Texto>
          Precio maximo del dia:
          <span> {HIGHDAY}</span>
        </Texto>
        <Texto>
          Variación:
          <span> {CHANGEPCT24HOUR}%</span>
        </Texto>
        <Texto>
          Ultima actualización:
          <span> {LASTUPDATE}</span>
        </Texto>
      </div>
    </Result>
  )
}

export default Resultado
