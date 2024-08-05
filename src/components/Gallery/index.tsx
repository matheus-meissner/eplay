import zelda from '../../assets/images/banner-homem-aranha.png'
import Section from '../Section'
import { Item, Items } from './styles'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      <Item>
        <img src={zelda} alt="imagem do link"></img>
      </Item>
      <Item>
        <img src={zelda} alt="imagem do link"></img>
      </Item>
      <Item>
        <img src={zelda} alt="imagem do link"></img>
      </Item>
      <Item>
        <img src={zelda} alt="imagem do link"></img>
      </Item>
    </Items>
  </Section>
)

export default Gallery
