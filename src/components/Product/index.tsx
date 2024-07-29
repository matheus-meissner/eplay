import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" alt="" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
      obcaecati amet eum quidem eligendi! Nostrum atque possimus eum amet rem
      autem iusto, saepe fuga et, harum minima explicabo aliquam. Saepe?
    </Descricao>
  </Card>
)

export default Product
