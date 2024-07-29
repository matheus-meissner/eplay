import Product from '../Product'
import { List, Container } from './styles'

type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ background, title }: Props) => (
  <Container>
    <div className="container">
      <h2>Nome da seção</h2>
      <List>
        <Product />
        <Product />
        <Product />
        <Product />
      </List>
    </div>
  </Container>
)

export default ProductsList
